import { Home } from 'lucide-react'
import { Link } from 'react-router-dom'

export const NotFound = () => (
  <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 text-center text-foreground">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute top-20 right-10 size-72 rounded-full bg-primary/10 blur-3xl animate-pulse dark:bg-primary/20" />
      <div className="absolute bottom-20 left-10 size-72 rounded-full bg-primary/5 blur-3xl animate-pulse [animation-delay:2s] dark:bg-primary/15" />
    </div>

    <div className="relative z-10 mx-auto max-w-2xl space-y-8">
      <div className="space-y-4">
        <p className="bg-linear-to-r from-primary to-primary/50 bg-clip-text font-grotesk text-8xl font-bold text-transparent animate-fade-in md:text-9xl">
          404
        </p>
        <h1 className="text-4xl font-bold opacity-0 animate-fade-in-delay-1 md:text-5xl">
          Lost in space
        </h1>
        <p className="mx-auto max-w-md text-xl text-muted-foreground opacity-0 animate-fade-in-delay-2">
          This page drifted out of orbit. Let&rsquo;s get you back to base.
        </p>
      </div>
      <div className="flex justify-center opacity-0 animate-fade-in-delay-3">
        <Link to="/" className="brand-button flex items-center gap-2 px-6 py-3">
          <Home className="size-4" />
          Back to home
        </Link>
      </div>
    </div>
  </main>
)
