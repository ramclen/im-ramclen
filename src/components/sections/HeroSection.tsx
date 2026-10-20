import { ArrowUpRight } from 'lucide-react'

const focusAreas = [
  'Frontend architecture',
  'Accessibility & performance',
  'Engineering leadership'
]

const impact = [
  { value: '12+ years', label: 'Engineering production frontends' },
  { value: 'React + TypeScript', label: 'My core technical specialism' },
  {
    value: 'Startups → Enterprise',
    label: 'Product, platform and public-sector experience'
  }
]

// Decorative "editor" card; aria-hidden because the same facts are in the copy
const CodeCard = () => (
  <div
    aria-hidden="true"
    className="w-full max-w-sm rounded-xl border border-white/15 bg-[#141a23]/95 p-5 shadow-2xl animate-float"
  >
    <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs text-[#bdc4cd]">
      <span className="font-mono">engineer.config.ts</span>
      <span className="flex gap-1.5">
        <i className="block size-2 rounded-full bg-[#e5a180]" />
        <i className="block size-2 rounded-full bg-[#d9b79e]" />
        <i className="block size-2 rounded-full bg-[#849c9b]" />
      </span>
    </div>
    <pre className="mt-4 font-mono text-[13px] leading-7 text-[#d5d5db]">
      <span className="text-[#8696a7]">export const</span> engineer = {'{'}
      {'\n  '}
      <span className="text-[#ffa981]">stack</span>: [
      <span className="text-[#c2e6d3]">'React'</span>,{' '}
      <span className="text-[#c2e6d3]">'TypeScript'</span>],
      {'\n  '}
      <span className="text-[#ffa981]">focus</span>:{' '}
      <span className="text-[#c2e6d3]">'scale & quality'</span>,{'\n  '}
      <span className="text-[#ffa981]">now</span>:{' '}
      <span className="text-[#c2e6d3]">'Yoti'</span>,{'\n'}
      {'}'}
    </pre>
  </div>
)

export const HeroSection = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-screen flex flex-col justify-center px-4 pt-28 pb-24"
    >
      <div className="container mx-auto max-w-6xl z-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="panel p-8 md:p-12 animate-pop-in">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-foreground/80 opacity-0 animate-fade-in">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full rounded-full bg-primary opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Currently building at Yoti · Remote-first
            </p>

            <h1
              id="hero-title"
              className="mt-6 mb-5 text-5xl md:text-7xl font-extrabold leading-[1.03] tracking-[-0.05em] opacity-0 animate-fade-in-delay-1"
            >
              Building frontends{' '}
              <span className="text-gradient">that scale.</span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground opacity-0 animate-fade-in-delay-2">
              I&rsquo;m{' '}
              <strong className="text-foreground">Cristopher Lopez</strong>, a
              Senior Frontend Engineer with{' '}
              <strong className="text-foreground">12+ years</strong> delivering
              fast, accessible, maintainable web products. I specialise in{' '}
              <strong className="text-foreground">React and TypeScript</strong>{' '}
              and in helping engineering teams build better.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 opacity-0 animate-fade-in-delay-3">
              <a
                href="#experience"
                className="brand-button inline-flex items-center justify-center gap-2"
              >
                Explore my experience <ArrowUpRight className="size-4" />
              </a>
              <a href="#github-projects" className="btn-secondary">
                See GitHub projects <ArrowUpRight className="size-4" />
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground opacity-0 animate-fade-in-delay-4">
              {focusAreas.map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <i
                    aria-hidden="true"
                    className="block size-1.5 rounded-full bg-primary"
                  />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex justify-center opacity-0 animate-fade-in-delay-3">
            <CodeCard />
          </div>
        </div>

        <ul
          aria-label="Professional overview"
          className="panel mt-8 grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border/70 opacity-0 animate-fade-in-delay-4"
        >
          {impact.map(({ value, label }) => (
            <li key={value} className="px-6 py-5 md:px-8">
              <strong className="block font-grotesk text-xl md:text-2xl font-bold tracking-tight">
                {value}
              </strong>
              <span className="mt-1 block text-sm text-muted-foreground">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
