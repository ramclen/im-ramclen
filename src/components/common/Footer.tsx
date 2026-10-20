import { ArrowUp } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border mt-12">
      <div className="container flex flex-wrap items-center justify-between gap-4 py-6 text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Cristopher Lopez · Designed to put{' '}
          <span className="text-primary">the work first.</span>
        </p>
        <div className="flex items-center gap-4">
          <p className="hidden sm:block">
            Made for humans. Engineered for the web.
          </p>
          <a
            href="#hero"
            aria-label="Back to top"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-[background-color,translate] duration-300 hover:-translate-y-1"
          >
            <ArrowUp className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
