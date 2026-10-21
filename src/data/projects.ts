import data from './projects.json'

export const illustrations = ['phone', 'network', 'code'] as const
export const palettes = ['warm', 'cool'] as const

export type Illustration = (typeof illustrations)[number]
export type Palette = (typeof palettes)[number]

export interface Project {
  name: string
  category: string
  description: string
  tags: string[]
  repo: string
  demo?: string
  image?: string
  illustration: Illustration
  palette: Palette
}

const isString = (value: unknown): value is string =>
  typeof value === 'string' && value.trim().length > 0

const isOneOf = <T extends string>(
  options: readonly T[],
  value: unknown
): value is T => options.includes(value as T)

// JSON is hand-edited, so check entries at the boundary rather than trusting
// the shape: a typo should hide one card, not break the whole page
const toProject = (entry: unknown, index: number): Project | null => {
  const raw = (entry ?? {}) as Record<string, unknown>
  const required = ['name', 'category', 'description', 'repo'] as const
  const missing: string[] = required.filter((key) => !isString(raw[key]))
  if (!Array.isArray(raw.tags)) missing.push('tags')

  if (missing.length > 0) {
    if (import.meta.env.DEV) {
      console.warn(
        `projects.json: skipping entry ${index}, missing ${missing.join(', ')}`,
        entry
      )
    }
    return null
  }

  return {
    name: raw.name as string,
    category: raw.category as string,
    description: raw.description as string,
    repo: raw.repo as string,
    tags: (raw.tags as unknown[]).filter(isString),
    demo: isString(raw.demo) ? raw.demo : undefined,
    image: isString(raw.image) ? raw.image : undefined,
    illustration: isOneOf(illustrations, raw.illustration)
      ? raw.illustration
      : 'code',
    palette: isOneOf(palettes, raw.palette) ? raw.palette : 'cool'
  }
}

export const projects: Project[] = data.projects
  .map(toProject)
  .filter((project): project is Project => project !== null)
