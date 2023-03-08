import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import useThemeSwitcher from '../../hooks/useThemeSwitcher'
import { Logo } from '../logos/Logo'

function AppHeader() {
  const [theme, toggleTheme] = useThemeSwitcher()

  return (
    <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} id='nav' className='sm:container sm:mx-auto'>
      <div className='z-10 block py-6 max-w-screen-lg xl:max-w-screen-xl sm:flex sm:justify-between sm:items-center'>
        <div className='flex items-center justify-between px-4 sm:px-0'>
          <Link href='/'>{theme === 'dark' ? <Logo dark /> : <Logo />}</Link>

          <button
            onClick={toggleTheme}
            aria-label='Theme Switcher'
            className='block p-3 ml-0 cursor-pointer sm:hidden bg-primary-light dark:bg-ternary-dark shadow-sm rounded-xl'>
            {theme === 'dark' ? (
              <FiMoon className='text-xl text-ternary-dark' />
            ) : (
              <FiSun className='text-xl text-gray-200' />
            )}
          </button>
        </div>

        <div className='flex-col items-center justify-between hidden sm:flex md:flex-row'>
          <button
            onClick={toggleTheme}
            aria-label='Theme Switcher'
            className='p-3 ml-8 text-gray-400 cursor-pointer hover:text-indigo-500 dark:hover:text-indigo-400 bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm rounded-xl'>
            {theme === 'dark' ? <FiSun className='text-xl ' /> : <FiMoon className='text-xl ' />}
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default AppHeader
