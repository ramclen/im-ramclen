import { ArrowUpRight, CircleCheck } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionHeading } from '@/components/common/SectionHeading'

interface Project {
  name: string
  sector: string
  role?: string
  current?: boolean
  highlights: string[]
  image: string
  url?: string
  tags: string[]
}

// Current role gets the big card; the rest share the grid below
const featured: Project = {
  name: 'Yoti',
  sector: 'Digital identity',
  role: 'Senior Frontend Engineer',
  current: true,
  highlights: [
    'Architected a micro-frontend with a client-side caching layer that cut initial load times.',
    'Lead the team’s AI-augmented engineering practices: MCP servers, agentic workflows and reusable prompt libraries.',
    'Set frontend standards, mentor engineers and run company-wide workshops.'
  ],
  image: 'projects/yoti-logo.png',
  url: 'https://www.yoti.com',
  tags: ['React', 'TypeScript', 'Redux', 'PWA', 'MCP']
}

const projects: Project[] = [
  {
    name: 'Flix by Foundry',
    sector: 'Film & VFX software',
    role: 'Software Engineer',
    highlights: [
      'Automated quality assurance across the release lifecycle of a storyboarding and previz tool used across the film industry.',
      'Maintained Jenkins CI pipelines, improving test coverage and release reliability.'
    ],
    image: 'projects/flix-foundry.png',
    url: 'https://www.foundry.com/products/flix',
    tags: ['TypeScript', 'Node.js', 'Docker', 'Jenkins']
  },
  {
    name: 'Norwegian Technology',
    sector: 'Web platform',
    highlights: [
      'Built a web app that lets companies create and manage their own pages.',
      'Co-designed the REST API and database schema with backend developers and the product owner.'
    ],
    image: 'projects/norwegian-technology.svg',
    tags: ['React', 'AngularJS', 'Angular Material', 'Bootstrap']
  },
  {
    name: 'RedPROMAR',
    sector: 'Public sector',
    highlights: [
      'Built the back office, REST API and public site end to end.',
      'Citizen-science platform for the Government of the Canary Islands that tracks marine wildlife sightings.'
    ],
    image: 'projects/redpromar.svg',
    tags: ['Symfony', 'PHP', 'jQuery', 'Bootstrap']
  }
]

const Highlights = ({ items, large }: { items: string[]; large?: boolean }) => (
  <ul className={cn('space-y-2.5', large ? 'text-base' : 'text-sm')}>
    {items.map((item) => (
      <li
        key={item}
        className="flex gap-2.5 text-muted-foreground leading-relaxed"
      >
        <CircleCheck
          className={cn(
            'shrink-0 text-primary',
            large ? 'size-5 mt-0.5' : 'size-4 mt-0.5'
          )}
        />
        <span>{item}</span>
      </li>
    ))}
  </ul>
)

const Tags = ({ tags }: { tags: string[] }) => (
  <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
    {tags.map((tag) => (
      <li
        key={tag}
        className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-foreground/5 border border-border"
      >
        {tag}
      </li>
    ))}
  </ul>
)

const VisitLink = ({ project }: { project: Project }) =>
  project.url ? (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold font-grotesk text-primary hover:gap-2.5 transition-all duration-300"
    >
      Visit website
      <ArrowUpRight className="size-4" />
      <span className="sr-only">(opens {project.name} in a new tab)</span>
    </a>
  ) : null

const Meta = ({ project }: { project: Project }) => (
  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-2">
    <p className="eyebrow">{project.sector}</p>
    {project.current && (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/30 px-2.5 py-0.5 text-xs font-semibold text-primary">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full rounded-full bg-primary opacity-60 motion-safe:animate-ping" />
          <span className="relative inline-flex size-2 rounded-full bg-primary" />
        </span>
        Current role
      </span>
    )}
  </div>
)

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          id="experience-title"
          index="01"
          label="Professional experience"
          title="Products I’ve helped ship."
          subtitle="Teams I’ve helped grow."
          description="My work inside companies: solving real product challenges, delivering production software and supporting engineering teams."
        />

        <article className="reveal group panel card-hover overflow-hidden grid md:grid-cols-5 mb-8">
          {/* Backdrop matches the logo artwork so object-contain shows the full mark */}
          <div className="relative md:col-span-2 h-56 md:h-auto overflow-hidden bg-[#323a43]">
            <img
              src={featured.image}
              alt={`${featured.name} preview`}
              className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          <div className="md:col-span-3 flex flex-col gap-5 p-6 md:p-10 border-t-4 md:border-t-0 md:border-l-4 border-primary">
            <div>
              <Meta project={featured} />
              <h3 className="text-3xl font-bold tracking-tight">
                {featured.name}
              </h3>
              <p className="font-medium text-foreground/80 mt-1">
                {featured.role}
              </p>
            </div>
            <Highlights items={featured.highlights} large />
            <Tags tags={featured.tags} />
            <VisitLink project={featured} />
          </div>
        </article>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.name}
              className="reveal group panel card-hover flex flex-col overflow-hidden"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <Meta project={project} />
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  {project.role && (
                    <p className="text-sm font-medium text-foreground/80 mt-0.5">
                      {project.role}
                    </p>
                  )}
                </div>
                <Highlights items={project.highlights} />
                <div className="mt-auto space-y-4 pt-1">
                  <Tags tags={project.tags} />
                  <VisitLink project={project} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
