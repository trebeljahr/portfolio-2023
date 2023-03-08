import formData from 'form-data'
import Mailgun from 'mailgun.js'

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

export default async function handler(req, res) {
  try {
    const data = {
      from: req.body.sender,
      to: 'ricotrebeljahr@gmail.com',
      subject: req.body.subject,
      html: req.body.message,
      text: req.body.message,
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
