import { Download } from 'lucide-react'
import cvPdf from '@/assets/Cristopher-Lopez-CV.pdf'

export const AboutSection = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="reveal panel grid gap-6 p-8 md:p-12 lg:grid-cols-[0.42fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow">04 / About me</p>
            <h2
              id="about-title"
              className="mt-3 text-3xl font-bold leading-[1.12] tracking-[-0.04em] md:text-4xl"
            >
              Twelve years in, still enjoying the craft.
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Across startups, enterprise products and government services, I
              have focused on building applications that stay usable, fast and
              maintainable long after they ship.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              At Yoti, my work also includes setting frontend standards,
              mentoring engineers and sharing practical ways to improve
              delivery, including the responsible adoption of AI-assisted
              workflows.
            </p>
            <a href={cvPdf} download className="btn-secondary mt-2">
              <Download className="size-4" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
