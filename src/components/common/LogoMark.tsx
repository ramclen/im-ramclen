// Same geometry as public/favicon.svg. The slash sits exactly halfway
// between the C and the L, which the font's "/" glyph never quite managed.
export const LogoMark = ({ className }: { className?: string }) => (
  <svg
    viewBox="5 16 52 32"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <g stroke="currentColor" strokeWidth="5.5">
      <path d="M25.7 25.3 A9.5 9.5 0 1 0 25.7 38.7" />
      <path d="M42 19.5 V41.5 H55" strokeLinejoin="miter" />
    </g>
    <path
      d="M36 19 L31 45"
      className="stroke-primary"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
)
