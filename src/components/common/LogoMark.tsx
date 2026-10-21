// Same geometry as public/favicon.svg. The slash sits exactly halfway
// between the C and the L, which the font's "/" glyph never quite managed.
export const LogoMark = ({ className }: { className?: string }) => (
  <svg
    viewBox="6 16 52 32"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <g transform="translate(32 32) scale(0.92) translate(-32 -32)">
      <g stroke="currentColor" strokeWidth="5.5">
        <path d="M24.92 25.28 A9.5 9.5 0 1 0 24.92 38.72" />
        <path d="M45.05 19.5 V41.5 H58.05" strokeLinejoin="miter" />
      </g>
      <path
        d="M34.8 20 L32.2 44"
        className="stroke-primary"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>
  </svg>
)
