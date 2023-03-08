import { DownloadCVButton } from 'components/reusable/DownloadCVButton'
import Link from 'next/link'
import { FiMapPin, FiMail } from 'react-icons/fi'
import { GiFeather } from 'react-icons/gi'

export function ContactDetails() {
  return (
    <div className='w-full lg:w-1/2'>
      <div className='max-w-xl px-6 text-left'>
        <h2 className='mt-12 mb-8 text-2xl font-general-medium text-primary-dark dark:text-primary-light'>
          Contact details
        </h2>
        <ul>
          <li className='flex'>
            <i className='mt-1 mr-4 text-2xl text-neutral-500 dark:text-neutral-400'>
              <FiMapPin />
            </i>
            <span className='mb-4 text-lg text-ternary-dark dark:text-ternary-light'>Berlin, Germany</span>
          </li>

          <li className='flex'>
            <i className='mt-1 mr-4 text-2xl text-neutral-500 dark:text-neutral-400'>
              <FiMail />
            </i>

            <a href='mailto:hello@ricotrebeljahr.com' className='mb-4 text-lg hover-underline-animation'>
              hello@ricotrebeljahr.com
            </a>
          </li>

          <li className='flex'>
            <i className='mt-1 mr-4 text-2xl text-neutral-500 dark:text-neutral-400'>
              <GiFeather />
            </i>
            <Link href='/cv' className='mb-4 text-lg hover-underline-animation '>
              Resume/CV
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
