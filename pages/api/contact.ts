import formData from 'form-data'
import Mailgun from 'mailgun.js'
import type { NextApiRequest, NextApiResponse } from 'next'

// @ts-ignore:next-line
const mailgun = new Mailgun(formData)

const DOMAIN = 'portfolio.trebeljahr.com'

const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY || '',
  url: 'https://api.eu.mailgun.net',
})

type EmailData = {
  from: string
  to: string
  subject: string
  text: string
}

async function sendEmail(data: EmailData) {
  await mg.messages.create(DOMAIN, data)
}

type RequestBody = Omit<EmailData, 'to'> & { name: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { from, subject, text, name } = req.body as RequestBody

      const message = `${name} sent you a message via your portfolio website: \n ${text}`
      const data = {
        from,
        to: 'ricotrebeljahr@gmail.com',
        subject,
        html: message,
        text: message,
      }

      await sendEmail(data)

      res.json({
        success: 'Sent email, all good',
      })
    } catch (err) {
      console.error(err)
      res.status(500).json({
        error: 'Something went wrong',
      })
    }
  }
}
