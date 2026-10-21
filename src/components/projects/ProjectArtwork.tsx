import type { Illustration, Palette, Project } from '@/data/projects'

const paletteClasses: Record<Palette, string> = {
  warm: 'bg-[radial-gradient(circle_at_70%_40%,rgba(237,139,90,0.23),transparent_43%),linear-gradient(125deg,#312c33,#332633_58%,#251d2d)]',
  cool: 'bg-[radial-gradient(circle_at_48%_60%,rgba(107,140,167,0.24),transparent_51%),linear-gradient(125deg,#233242,#192634)]'
}

const PhoneArt = () => (
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

const networkNodes = [
  { x: 0, y: 4, label: 'service' },
  { x: 198, y: 4, label: 'server' },
  { x: 0, y: 102, label: 'client' },
  { x: 198, y: 102, label: 'info' }
]

// "DiscoverProtocol" -> "discover", short enough for the centre node
const firstWord = (name: string) =>
  name
    .split(/(?=[A-Z])|[\s_-]+/)[0]
    .toLowerCase()
    .slice(0, 9)

const NetworkArt = ({ name }: { name: string }) => (
  <svg
    viewBox="0 0 270 150"
    className="w-64 font-mono text-[11px] font-bold transition-transform duration-500 group-hover:scale-105"
  >
    <g stroke="#91a7ad" opacity="0.8">
      {networkNodes.map(({ x, y, label }) => (
        <line key={label} x1={x + 36} y1={y + 22} x2="135" y2="75" />
      ))}
    </g>
    {networkNodes.map(({ x, y, label }) => (
      <g key={label}>
        <rect
          x={x}
          y={y}
          width="72"
          height="44"
          rx="9"
          fill="#243949"
          stroke="#7191a4"
        />
        <text x={x + 36} y={y + 26} textAnchor="middle" fill="#c4dfed">
          {label}
        </text>
      </g>
    ))}
    <rect
      x="91"
      y="53"
      width="88"
      height="44"
      rx="9"
      fill="#765342"
      stroke="#ee9e72"
    />
    <text x="135" y="79" textAnchor="middle" fill="#fff0df">
      {firstWord(name)}
    </text>
  </svg>
)

// Generic artwork for projects that don't have anything more specific yet
const CodeArt = ({ name, tags }: { name: string; tags: string[] }) => (
  <div className="w-64 -rotate-3 rounded-lg border border-white/15 bg-[#141a23]/95 p-4 font-mono text-[11px] leading-6 text-[#d5d5db] shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:rotate-0">
    <div className="mb-2 flex gap-1.5">
      <i className="size-2 rounded-full bg-[#e5a180]" />
      <i className="size-2 rounded-full bg-[#d9b79e]" />
      <i className="size-2 rounded-full bg-[#849c9b]" />
    </div>
    <p>
      <span className="text-[#8696a7]">import</span> {'{ '}
      <span className="text-[#ffa981]">{name}</span>
      {' }'}
    </p>
    {tags.slice(0, 3).map((tag) => (
      <p key={tag} className="truncate">
        <span className="text-[#8696a7]">{'  //'}</span>{' '}
        <span className="text-[#c2e6d3]">{tag}</span>
      </p>
    ))}
  </div>
)

const renderIllustration = (
  illustration: Illustration,
  { name, tags }: Project
) => {
  switch (illustration) {
    case 'phone':
      return <PhoneArt />
    case 'network':
      return <NetworkArt name={name} />
    case 'code':
      return <CodeArt name={name} tags={tags} />
  }
}

export const ProjectArtwork = ({ project }: { project: Project }) => {
  if (project.image) {
    return (
      <div className="h-52 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
    )
  }

  return (
    <div
      aria-hidden="true"
      className={`relative grid h-52 place-items-center overflow-hidden ${paletteClasses[project.palette]}`}
    >
      <span className="absolute left-5 top-4 font-mono text-xs text-[#c1ccd3]/70">
        github / {project.name}
      </span>
      {renderIllustration(project.illustration, project)}
    </div>
  )
}
