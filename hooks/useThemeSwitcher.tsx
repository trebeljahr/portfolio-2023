import { Dispatch, SetStateAction, useEffect, useState } from 'react'

const useThemeSwitcher = (): ['light' | 'dark', () => void] => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const root = window.document.documentElement
    const initialTheme = localStorage.getItem('theme') as 'light' | 'dark'
    root.classList.add(initialTheme)
    setTheme(initialTheme)
  }, [])

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
