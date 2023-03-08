import { motion } from 'framer-motion'
import { FiArrowDownCircle } from 'react-icons/fi'

export function DownloadCVButton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.9,
        delay: 0.3,
      }}
      className='flex justify-center sm:block'>
      <a
        // download='cv-rico-trebeljahr.pdf'
        href='/files/cv-rico-trebeljahr.pdf'
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center justify-center text-lg text-gray-600 border border-indigo-200 rounded-lg shadow-lg font-general-medium w-36 sm:w-48 sm:mb-0 dark:border-ternary-dark py-2.5 sm:py-3 bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:ring-darkblue hover:border-darkblue hover:bg-darkblue duration-500 hover:text-white'
        aria-label='Open CV as PDF'>
        <FiArrowDownCircle className='w-5 h-5 ml-0 mr-2 sm:ml-1 sm:mr-3 sn:w-6 sm:h-6 duration-100'></FiArrowDownCircle>
        <span className='text-sm sm:text-lg duration-100'>Download CV</span>
      </a>
    </motion.div>
  )
}
