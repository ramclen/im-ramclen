import { ArrowUp } from 'lucide-react'

export const Footer = () => (
  <footer className="relative mt-12 border-t border-border bg-card">
    <div className="container flex items-center justify-between gap-4 py-6 text-sm text-muted-foreground">
      <p>&copy; {new Date().getFullYear()} Cristopher Lopez</p>
      <a
        href="#hero"
        aria-label="Back to top"
        className="rounded-full bg-primary/10 p-2 text-primary transition-[background-color,translate] duration-300 hover:-translate-y-1 hover:bg-primary/20"
      >
        <ArrowUp className="size-5" />
      </a>
    </div>
  </footer>
)
