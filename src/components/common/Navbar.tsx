import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { LogoMark } from '@/components/common/LogoMark'
import { ThemeToggle } from '@/components/common/ThemeToggle'

interface NavItem {
  name: string
  href: string
}

const navItems: NavItem[] = [
  { name: 'Experience', href: '#experience' },
  { name: 'GitHub projects', href: '#github-projects' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'About', href: '#about' }
]

const mobileItems: NavItem[] = [
  ...navItems,
  { name: 'Let’s connect', href: '#contact' }
]

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = isMenuOpen ? 'hidden' : originalOverflow

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isMenuOpen])

  return (
    <>
      <nav
        className={cn(
          'fixed w-full z-50 transition-all duration-300',
          isScrolled
            ? 'py-3 bg-background/85 backdrop-blur-md border-b border-border/60 shadow-sm'
            : 'py-5'
        )}
        aria-label="Primary navigation"
      >
        <div className="container flex items-center justify-between">
          <a
            href="#hero"
            className="flex items-center gap-3"
            aria-label="Cristopher Lopez, back to top"
          >
            <span
              aria-hidden="true"
              className="flex size-10 items-center justify-center rounded-xl border border-primary/40 bg-card text-foreground shadow-sm"
            >
              <LogoMark className="w-7" />
            </span>
            <span className="grid leading-tight">
              <b className="font-grotesk text-sm text-foreground">
                Cristopher Lopez
              </b>
              <span className="text-xs text-foreground/70">
                Senior Frontend Engineer
              </span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-7 font-grotesk text-sm">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="nav-link text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-lg border border-primary/60 bg-card/60 px-4 py-2 font-semibold text-primary transition-colors duration-300 hover:bg-primary/10"
            >
              Let&rsquo;s connect ↗
            </a>
            <ThemeToggle className="text-foreground shrink-0" />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle className="text-foreground" />
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-2 text-foreground z-50"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          'fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center',
          'transition-all duration-300 md:hidden',
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col space-y-8 text-xl font-grotesk">
          {mobileItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                'text-foreground/80 hover:text-primary transition-[color,opacity,translate] duration-500 ease-out',
                isMenuOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              )}
              style={{
                transitionDelay: isMenuOpen ? `${key * 70 + 100}ms` : '0ms'
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
