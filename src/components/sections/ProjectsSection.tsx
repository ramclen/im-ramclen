import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ProjectArtwork } from '@/components/projects/ProjectArtwork'
import { projects, type Project } from '@/data/projects'

const ExternalLink = ({
  href,
  label,
  srLabel
}: {
  href: string
  label: string
  srLabel: string
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 whitespace-nowrap font-grotesk text-sm font-semibold text-primary transition-all duration-300 hover:gap-2.5"
  >
    {label} <ArrowUpRight className="size-4" />
    <span className="sr-only">({srLabel})</span>
  </a>
)

const ProjectCard = ({ project }: { project: Project }) => (
  <article className="reveal group panel card-hover flex flex-col overflow-hidden">
    <ProjectArtwork project={project} />

    <div className="flex flex-1 flex-col p-7">
      <p className="eyebrow">{project.category}</p>
      <h3 className="mt-2 mb-3 text-2xl font-bold tracking-tight">
        {project.name}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6">
        <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border bg-foreground/5 px-2.5 py-0.5 text-xs font-medium"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex gap-5">
          {project.demo && (
            <ExternalLink
              href={project.demo}
              label="Live demo"
              srLabel={`opens the ${project.name} demo in a new tab`}
            />
          )}
          <ExternalLink
            href={project.repo}
            label="View repository"
            srLabel={`opens ${project.name} on GitHub`}
          />
        </div>
      </div>
    </div>
  </article>
)

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
          {projects.map((project) => (
            <ProjectCard key={project.repo} project={project} />
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
