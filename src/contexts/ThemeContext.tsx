import { useEffect, useState, type ReactNode } from 'react'
import { ThemeContext } from '@/contexts/theme'

const darkQuery = '(prefers-color-scheme: dark)'

// The OS setting is the source of truth. The toggle only overrides it for the
// current visit and is dropped as soon as the system preference changes.
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(darkQuery).matches
  )

  useEffect(() => {
    const media = window.matchMedia(darkQuery)
    const handleChange = (event: MediaQueryListEvent) =>
      setIsDark(event.matches)

    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  const toggleTheme = () => setIsDark((prev) => !prev)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
