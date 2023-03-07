import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiArrowDownCircle } from 'react-icons/fi'
import useThemeSwitcher from '../../hooks/useThemeSwitcher'

function AppBanner() {
  const [activeTheme] = useThemeSwitcher()

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
      className='flex flex-col items-center mt-5 sm:justify-between sm:flex-row md:mt-2'>
      <div className='w-full text-left md:w-1/3'>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.1,
          }}
          className='text-2xl text-center uppercase font-general-semibold lg:text-3xl xl:text-4xl sm:text-left text-ternary-dark dark:text-primary-light'>
          Hi, Iam Stoman
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.2,
          }}
          className='mt-4 text-lg leading-normal text-center text-gray-500 font-general-medium md:text-xl lg:text-2xl xl:text-3xl sm:text-left dark:text-gray-200'>
          A Full-Stack Developer & Design Enthusiast
        </motion.p>
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
            download='Stoman-Resume.pdf'
            href='/files/Stoman-Resume.pdf'
            className='flex items-center justify-center mt-12 mb-6 text-lg text-gray-500 border border-indigo-200 rounded-lg shadow-lg font-general-medium w-36 sm:w-48 sm:mb-0 dark:border-ternary-dark py-2.5 sm:py-3 bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 hover:text-white duration-500'
            aria-label='Download Resume'>
            <FiArrowDownCircle className='w-5 h-5 ml-0 mr-2 sm:ml-1 sm:mr-3 sn:w-6 sm:h-6 duration-100'></FiArrowDownCircle>
            <span className='text-sm sm:text-lg duration-100'>Download CV</span>
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
        className='float-right w-full mt-8 text-right sm:w-2/3 sm:mt-0'>
        <Image src={activeTheme === 'dark' ? '/images/developer.svg' : '/images/developer-dark.svg'} alt='Developer' />
      </motion.div>
    </motion.section>
  )
}

export default AppBanner
