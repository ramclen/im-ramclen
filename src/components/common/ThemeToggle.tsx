import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/contexts/theme'

interface ThemeToggleProps {
  className?: string
}

const ENGAGED_KEY = 'theme-toggle-engaged'

// Storage can throw in private mode, so treat any failure as "not engaged yet"
const hasEngaged = () => {
  try {
    return localStorage.getItem(ENGAGED_KEY) === 'true'
  } catch {
    return false
  }
}

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { isDark, toggleTheme } = useTheme()
  const [showAttractor, setShowAttractor] = useState(() => !hasEngaged())

  const handleToggle = () => {
    toggleTheme()
    if (!showAttractor) return

    setShowAttractor(false)
    try {
      localStorage.setItem(ENGAGED_KEY, 'true')
    } catch {
      // Not worth surfacing; the nudge just comes back next visit
    }
  }

  return (
    <button
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={handleToggle}
      className={cn(
        'group relative isolate rounded-full p-2 transition-all duration-300',
        showAttractor &&
          'motion-safe:animate-[theme-nudge_2.8s_ease-in-out_infinite] motion-reduce:animate-none',
        className
      )}
    >
      {showAttractor && (
        <>
          <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-primary/25 motion-safe:animate-ping" />
          <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-primary/20 motion-safe:animate-ping [animation-delay:450ms]" />
        </>
      )}

      {isDark ? (
        <Sun
          key="sun"
          className="size-6 text-yellow-300 animate-icon-in transition-transform duration-300 group-hover:rotate-45"
        />
      ) : (
        <Moon
          key="moon"
          className="size-6 text-stone-700 animate-icon-in transition-transform duration-300 group-hover:-rotate-12"
        />
      )}
    </button>
  )
}
