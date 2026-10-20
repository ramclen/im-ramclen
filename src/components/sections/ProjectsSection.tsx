import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { SectionHeading } from '@/components/common/SectionHeading'

interface Repo {
  name: string
  category: string
  description: string
  tags: string[]
  url: string
  visual: ReactNode
  visualLabel: string
  visualClassName: string
}

// Illustrations are drawn in HTML/SVG until real screenshots exist
const PhoneMock = () => (
  <div className="h-44 w-32 translate-y-5 -rotate-[10deg] rounded-t-2xl border-4 border-b-[6px] border-[#4b5463] bg-[#222c38] px-2 pt-2.5 shadow-[17px_20px_0_rgba(0,0,0,0.13),0_12px_30px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:-rotate-[6deg] group-hover:translate-y-3">
    <div className="h-full rounded-t-lg bg-[#e9e6df] px-3 pt-4">
      <div className="mb-4 h-2.5 w-16 rounded-sm bg-[#2a3843]" />
      {[0, 1, 2, 3].map((row) => (
        <div
          key={row}
          className="mt-3 flex items-center gap-2 border-b border-[#cad0d0] pb-1.5"
        >
          <span className="size-2.5 rounded-[3px] border border-[#e78562]" />
          <span className="h-1.5 w-14 rounded bg-[#acb6bd]" />
        </div>
      ))}
    </div>
  </div>
)

const NodesMock = () => (
  <svg
    viewBox="0 0 270 150"
    className="w-64 transition-transform duration-500 group-hover:scale-105"
  >
    <g stroke="#91a7ad" strokeWidth="1" opacity="0.8">
      <line x1="72" y1="28" x2="135" y2="75" />
      <line x1="198" y1="28" x2="135" y2="75" />
      <line x1="72" y1="126" x2="135" y2="75" />
      <line x1="198" y1="126" x2="135" y2="75" />
    </g>
    {[
      { x: 0, y: 4, label: 'service' },
      { x: 198, y: 4, label: 'server' },
      { x: 0, y: 102, label: 'client' },
      { x: 198, y: 102, label: 'info' }
    ].map((node) => (
      <g key={node.label}>
        <rect
          x={node.x}
          y={node.y}
          width="72"
          height="44"
          rx="9"
          fill="#243949"
          stroke="#7191a4"
        />
        <text
          x={node.x + 36}
          y={node.y + 26}
          textAnchor="middle"
          fill="#c4dfed"
          fontSize="11"
          fontWeight="700"
          fontFamily="ui-monospace, monospace"
        >
          {node.label}
        </text>
      </g>
    ))}
    <rect
      x="96"
      y="53"
      width="78"
      height="44"
      rx="9"
      fill="#765342"
      stroke="#ee9e72"
    />
    <text
      x="135"
      y="79"
      textAnchor="middle"
      fill="#fff0df"
      fontSize="11"
      fontWeight="700"
      fontFamily="ui-monospace, monospace"
    >
      discover
    </text>
  </svg>
)

const repos: Repo[] = [
  {
    name: 'ShoppingCart',
    category: 'Frontend · Progressive Web App',
    description:
      'A React/Redux PWA for managing shopping lists backed by Google Sheets, designed to work across desktop and mobile.',
    tags: ['React', 'Redux', 'PWA'],
    url: 'https://github.com/ramclen/ShoppingCart',
    visual: <PhoneMock />,
    visualLabel: 'github / personal-build',
    visualClassName:
      'bg-[radial-gradient(circle_at_70%_40%,rgba(237,139,90,0.23),transparent_43%),linear-gradient(125deg,#312c33,#332633_58%,#251d2d)]'
  },
  {
    name: 'DiscoverProtocol',
    category: 'Developer tooling · TypeScript',
    description:
      'A TypeScript package for discovering service information at unknown server locations, usable on both client and server.',
    tags: ['TypeScript', 'Node.js', 'Networking'],
    url: 'https://github.com/ramclen/DiscoverProtocol',
    visual: <NodesMock />,
    visualLabel: 'github / developer-tool',
    visualClassName:
      'bg-[radial-gradient(circle_at_48%_60%,rgba(107,140,167,0.24),transparent_51%),linear-gradient(125deg,#233242,#192634)]'
  }
]

export const ProjectsSection = () => {
  return (
    <section
      id="github-projects"
      aria-labelledby="projects-title"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          id="projects-title"
          index="02"
          label="GitHub projects"
          title="Beyond the day job."
          subtitle="Code you can explore."
          description="Personal repositories, separate from my company experience. Independent builds where I experiment with frontend ideas and developer tooling."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {repos.map((repo) => (
            <article
              key={repo.name}
              className="reveal group panel card-hover flex flex-col overflow-hidden"
            >
              <div
                aria-hidden="true"
                className={`relative grid h-52 place-items-center overflow-hidden ${repo.visualClassName}`}
              >
                <span className="absolute left-5 top-4 font-mono text-xs text-[#c1ccd3]/70">
                  {repo.visualLabel}
                </span>
                {repo.visual}
              </div>

              <div className="flex flex-1 flex-col p-7">
                <p className="eyebrow">{repo.category}</p>
                <h3 className="mt-2 mb-3 text-2xl font-bold tracking-tight">
                  {repo.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {repo.description}
                </p>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6">
                  <ul
                    className="flex flex-wrap gap-1.5"
                    aria-label="Technologies"
                  >
                    {repo.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border bg-foreground/5 px-2.5 py-0.5 text-xs font-medium"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 whitespace-nowrap font-grotesk text-sm font-semibold text-primary transition-all duration-300 hover:gap-2.5"
                  >
                    View repository <ArrowUpRight className="size-4" />
                    <span className="sr-only">
                      (opens {repo.name} on GitHub)
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal panel mt-6 flex flex-col items-start justify-between gap-5 border-primary/30 p-7 sm:flex-row sm:items-center md:p-8">
          <div>
            <strong className="block font-grotesk text-lg tracking-tight">
              Looking for more code?
            </strong>
            <span className="text-sm text-muted-foreground">
              Explore my other public repositories, experiments and learning
              projects.
            </span>
          </div>
          <a
            href="https://github.com/ramclen?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary shrink-0"
          >
            Explore GitHub <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
