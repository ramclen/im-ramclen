interface SectionHeadingProps {
  index: string
  label: string
  title: string
  subtitle?: string
  description?: string
  id: string
}

export const SectionHeading = ({
  index,
  label,
  title,
  subtitle,
  description,
  id
}: SectionHeadingProps) => {
  return (
    <div className="reveal panel mb-8 flex flex-col gap-5 p-8 md:flex-row md:items-end md:justify-between md:p-10">
      <div>
        <p className="eyebrow">
          {index} / {label}
        </p>
        <h2
          id={id}
          className="mt-3 max-w-2xl text-3xl font-bold leading-[1.1] tracking-[-0.04em] md:text-5xl"
        >
          {title}
          {subtitle && (
            <>
              <br />
              <span className="text-muted-foreground">{subtitle}</span>
            </>
          )}
        </h2>
      </div>
      {description && (
        <p className="text-sm leading-relaxed text-muted-foreground md:max-w-xs">
          {description}
        </p>
      )}
    </div>
  )
}
