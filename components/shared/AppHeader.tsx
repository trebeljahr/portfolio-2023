import Button from 'components/reusable/Button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import useThemeSwitcher from '../../hooks/useThemeSwitcher'
import HireMeModal from '../HireMeModal'
import { Logo } from '../logos/Logo'

function AppHeader() {
  const [showMenu, setShowMenu] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [theme, toggleTheme] = useThemeSwitcher()

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true)
    } else {
      setShowMenu(false)
    }
  }

  function showHireMeModal() {
    if (!showModal) {
      document.getElementsByTagName('html')[0].classList.add('overflow-y-hidden')
      setShowModal(true)
    } else {
      document.getElementsByTagName('html')[0].classList.remove('overflow-y-hidden')
      setShowModal(false)
    }
  }

  return (
    <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} id='nav' className='sm:container sm:mx-auto'>
      <div className='z-10 block py-6 max-w-screen-lg xl:max-w-screen-xl sm:flex sm:justify-between sm:items-center'>
        <div className='flex items-center justify-between px-4 sm:px-0'>
          <div>
            <Link href='/'>{theme === 'dark' ? <Logo dark /> : <Logo />}</Link>
          </div>

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

          <div className='sm:hidden'>
            <button onClick={toggleMenu} type='button' className='focus:outline-none' aria-label='Hamburger Menu'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='fill-current h-7 w-7 text-secondary-dark dark:text-ternary-light'>
                {showMenu ? <FiX className='text-3xl' /> : <FiMenu className='text-3xl' />}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={
            showMenu
              ? 'block m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none'
              : 'hidden'
          }>
          <div className='pt-3 border-t-2 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark'>
            <button
              onClick={showHireMeModal}
              className='block w-24 px-4 py-2 mt-2 text-left text-white bg-indigo-700 rounded-sm font-general-medium sm:hidden text-md hover:bg-indigo-600 shadow-sm duration-300'
              aria-label='Hire Me Button'>
              Hire Me
            </button>
          </div>
        </div>

        <div className='flex-col items-center justify-between hidden sm:flex md:flex-row'>
          <div className='hidden md:flex'>
            <button
              onClick={showHireMeModal}
              className='px-5 text-white bg-indigo-700 text-md font-general-medium hover:bg-indigo-600 shadow-sm rounded-md py-2.5 duration-300'
              aria-label='Hire Me Button'>
              Hire Me
            </button>
          </div>

          <button
            onClick={toggleTheme}
            aria-label='Theme Switcher'
            className='p-3 ml-8 text-gray-400 cursor-pointer hover:text-indigo-500 dark:hover:text-indigo-400 bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm rounded-xl'>
            {theme === 'dark' ? <FiSun className='text-xl ' /> : <FiMoon className='text-xl ' />}
          </button>
        </div>
      </div>
      <div>
        <>
          {showModal ? <HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} /> : null}
          {showModal ? showHireMeModal : null}
        </>
      </div>
    </motion.nav>
  )
}

export default AppHeader
