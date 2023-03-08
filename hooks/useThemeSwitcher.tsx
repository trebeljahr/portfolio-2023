import { Dispatch, SetStateAction, useEffect, useState } from 'react'

const useThemeSwitcher = (): [string, () => void] => {
  const [theme, setTheme] = useState<string>(typeof window !== 'undefined' ? localStorage.theme : '')

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    const root = window.document.documentElement

    root.classList.remove(theme)
    root.classList.add(nextTheme)
    localStorage.setItem('theme', nextTheme)

    setTheme(nextTheme)
  }

  return [theme, toggleTheme]
}

export default useThemeSwitcher
