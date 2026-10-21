interface ExpertiseGroup {
  title: string
  items: string[]
}

const groups: ExpertiseGroup[] = [
  {
    title: 'Frontend engineering',
    items: [
      'React & TypeScript',
      'JavaScript (ES6+) · HTML · CSS / SASS',
      'Redux, GraphQL & REST APIs',
      'Scalable component & micro-frontend architecture'
    ]
  },
  {
    title: 'Quality by design',
    items: [
      'Web accessibility (WCAG)',
      'Performance optimisation',
      'Automated testing · Jest · TDD',
      'CI/CD · Jenkins · Docker'
    ]
  },
  {
    title: 'Technical leadership',
    items: [
      'Mentoring & code reviews',
      'Frontend standards',
      'Workshops & knowledge sharing',
      'Cross-functional collaboration'
    ]
  },
  {
    title: 'Emerging practices',
    items: [
      'AI-assisted development · Claude Code',
      'MCP servers',
      'Agentic workflows',
      'Reusable prompt & skill libraries'
    ]
  }
]

export const ExpertiseSection = () => {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-title"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="reveal panel grid gap-10 p-8 md:p-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="eyebrow">03 / How I work</p>
            <h2
              id="expertise-title"
              className="mt-3 mb-5 text-3xl font-bold leading-[1.12] tracking-[-0.04em] md:text-5xl"
            >
              What I bring <span className="text-gradient">to a team.</span>
            </h2>
            <p className="max-w-sm leading-relaxed text-muted-foreground">
              I combine hands-on implementation with architecture, quality and
              knowledge sharing, so teams can ship confidently and keep moving.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {groups.map(({ title, items }) => (
              <div key={title} className="border-t-2 border-primary/70 pt-4">
                <h3 className="mb-3 text-base font-semibold">{title}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-snug text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
