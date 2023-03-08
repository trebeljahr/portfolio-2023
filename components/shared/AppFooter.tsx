import { FiGithub, FiTwitter, FiLinkedin, FiGlobe } from 'react-icons/fi'
import AppFooterCopyright from './AppFooterCopyright'

const socialLinks = [
  {
    icon: <FiGlobe />,
    text: 'Blog',
    url: 'https://trebeljahr.com',
  },
  {
    icon: <FiGithub />,
    text: 'GitHub',
    url: 'https://github.com/trebeljahr',
  },
  {
    icon: <FiTwitter />,
    text: 'Twitter',
    url: 'https://twitter.com/ricotrebeljahr',
  },
  {
    icon: <FiLinkedin />,
    text: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ricotrebeljahr/',
  },
]

function AppFooter() {
  return (
    <div className='container mx-auto'>
      <div className='pt-20 pb-8 mt-20 border-t-2 sm:pt-30 border-primary-light dark:border-secondary-dark'>
        <div className='flex flex-col items-center justify-center mb-12 font-general-regular sm:mb-28'>
          <p className='mb-5 text-3xl sm:text-4xl text-primary-dark dark:text-primary-light'>Follow me</p>
          <ul className='flex gap-4 sm:gap-8'>
            {socialLinks.map((link) => (
              <li
                key={link.text}
                className='p-4 text-gray-400 rounded-lg cursor-pointer hover:text-indigo-500 dark:hover:text-indigo-400 bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm duration-300'>
                <a href={link.url} aria-label={link.text} target='__blank' className='text-xl sm:text-2xl md:text-3xl'>
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <AppFooterCopyright />
      </div>
    </div>
  )
}

export default AppFooter
