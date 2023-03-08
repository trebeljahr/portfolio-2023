import { DownloadCVButton } from 'components/reusable/DownloadCVButton'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import useThemeSwitcher from '../../hooks/useThemeSwitcher'
import { Logo } from '../logos/Logo'

function AppHeader() {
  const [theme, toggleTheme] = useThemeSwitcher()
  const [onCVRoute, setOnCVRoute] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setOnCVRoute(router.asPath === '/cv')
  }, [router])

  return (
    <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} id='nav' className='container mx-auto'>
      <div className='z-10 block py-6 max-w-screen-lg xl:max-w-screen-xl'>
        <div className='flex items-center justify-between'>
          <Link href='/'>{theme === 'dark' ? <Logo dark /> : <Logo />}</Link>
          <div className='flex items-center gap-3'>
            {onCVRoute && <DownloadCVButton />}
            <button
              onClick={toggleTheme}
              aria-label='Theme Switcher'
              className='p-3 text-gray-400 cursor-pointer hover:text-indigo-500 dark:hover:text-indigo-400 bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm rounded-xl'>
              {theme === 'dark' ? <FiSun className='text-xl ' /> : <FiMoon className='text-xl ' />}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default AppHeader
