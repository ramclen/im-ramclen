import { useId, useRef, type CSSProperties } from 'react'
import { useWander } from '@/hooks/useWander'

type AstronautProps = {
  min: number
  max: number
  start: number
  bottomClassName: string
  widthClassName: string
  speed?: number
  idleDelay?: number
  role?: 'explorer' | 'scientist'
  pause?: [number, number]
}

const pivot = (x: number, y: number): CSSProperties => ({
  transformOrigin: `${x}px ${y}px`
})

const Astronaut = ({
  min,
  max,
  start,
  bottomClassName,
  widthClassName,
  speed,
  idleDelay = 0,
  role = 'explorer',
  pause
}: AstronautProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const uid = useId().replace(/:/g, '')
  const suit = `suit-${uid}`
  const visor = `visor-${uid}`
  const visorClip = `visor-clip-${uid}`
  const beam = `beam-${uid}`

  useWander(ref, { min, max, start, speed, pause })

  return (
    <div
      ref={ref}
      data-role={role}
      className={`astronaut absolute ${bottomClassName} ${widthClassName}`}
      style={
        { left: `${start}%`, '--astro-delay': `${idleDelay}s` } as CSSProperties
      }
    >
      <div className="astro-flip">
        <svg
          viewBox="0 0 64 100"
          className="h-auto w-full overflow-visible drop-shadow-[0_6px_10px_rgba(0,0,0,0.3)]"
        >
          <defs>
            <linearGradient id={suit} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fdfbf6" />
              <stop offset="100%" stopColor="#d9d0bd" />
            </linearGradient>
            <radialGradient id={visor} cx="0.35" cy="0.3" r="0.9">
              <stop offset="0%" stopColor="#4f86a6" />
              <stop offset="45%" stopColor="#1d3550" />
              <stop offset="100%" stopColor="#0b1422" />
            </radialGradient>
            <linearGradient id={beam} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8ff7d6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#8ff7d6" stopOpacity="0" />
            </linearGradient>
            <clipPath id={visorClip}>
              <ellipse cx="34" cy="19" rx="10" ry="9" />
            </clipPath>
          </defs>

          <ellipse
            className="astro-shadow"
            style={pivot(32, 95)}
            cx="32"
            cy="95"
            rx="13"
            ry="2.4"
            fill="#1a0a04"
            opacity="0.3"
          />

          <g>
            <circle
              className="astro-dust"
              cx="22"
              cy="92"
              r="2.4"
              fill="#c98a5c"
            />
            <circle
              className="astro-dust"
              cx="38"
              cy="93"
              r="2"
              fill="#b8774a"
              style={{ animationDelay: '0.45s' }}
            />
          </g>

          <g className="astro-figure">
            <g className="astro-back-arm" style={pivot(20, 42)}>
              <rect x="16" y="40" width="8" height="22" rx="4" fill="#ddd5c3" />
              <circle cx="20" cy="62" r="3.5" fill="#a8956a" />
            </g>

            <line
              x1="13"
              y1="37"
              x2="10.5"
              y2="25"
              stroke="#8a7a55"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <circle
              className="astro-beacon"
              cx="10.5"
              cy="24"
              r="2"
              fill="#ff5a3c"
            />
            <rect x="9" y="35" width="13" height="31" rx="3.5" fill="#cdbf9c" />
            <rect
              x="11.5"
              y="40"
              width="8"
              height="1.6"
              rx="0.8"
              fill="#a8956a"
            />
            <rect
              x="11.5"
              y="44"
              width="8"
              height="1.6"
              rx="0.8"
              fill="#a8956a"
            />

            <g className="astro-back-leg" style={pivot(27, 66)}>
              <rect
                x="22"
                y="64"
                width="10"
                height="23"
                rx="4"
                fill="#ddd5c3"
              />
              <rect x="20" y="84" width="14" height="8" rx="3" fill="#6f5e3d" />
            </g>
            <g className="astro-front-leg" style={pivot(37, 66)}>
              <rect
                x="32"
                y="64"
                width="10"
                height="23"
                rx="4"
                fill={`url(#${suit})`}
              />
              <rect x="32" y="73" width="10" height="4" rx="2" fill="#e6dcc6" />
              <rect x="31" y="84" width="14" height="8" rx="3" fill="#8a7a55" />
            </g>

            <rect
              x="18"
              y="36"
              width="28"
              height="32"
              rx="11"
              fill={`url(#${suit})`}
            />
            <rect x="18" y="59" width="28" height="4" fill="#c9bb98" />
            <rect x="26" y="44" width="13" height="9" rx="2" fill="#6f6248" />
            <circle
              className="astro-beacon"
              cx="29.5"
              cy="48.5"
              r="1.5"
              fill="#ff6b4a"
            />
            <circle cx="35.5" cy="48.5" r="1.5" fill="#4ab0e0" />

            <g className="astro-front-arm" style={pivot(44, 42)}>
              {role === 'scientist' && (
                <polygon
                  className="astro-beam"
                  points="42.5,71 46.5,71 53,103 36,103"
                  fill={`url(#${beam})`}
                />
              )}
              <rect
                x="40"
                y="40"
                width="9"
                height="23"
                rx="4.5"
                fill={`url(#${suit})`}
              />
              {role === 'scientist' && (
                <>
                  <rect
                    x="40"
                    y="62"
                    width="9"
                    height="9"
                    rx="1.5"
                    fill="#4b5058"
                  />
                  <rect
                    className="astro-screen"
                    x="41.5"
                    y="66"
                    width="6"
                    height="3"
                    rx="0.6"
                    fill="#6ef2c6"
                  />
                </>
              )}
              <circle cx="44.5" cy="63" r="3.8" fill="#c9b98e" />
            </g>

            <g className="astro-head" style={pivot(32, 32)}>
              <rect x="25" y="29" width="14" height="6" rx="2" fill="#c9bb98" />
              <circle cx="32" cy="18" r="15" fill={`url(#${suit})`} />
              <rect
                x="16.5"
                y="13"
                width="3"
                height="7"
                rx="1.2"
                fill="#c9bb98"
              />
              <ellipse
                cx="34"
                cy="19"
                rx="10"
                ry="9"
                fill={`url(#${visor})`}
                stroke="#b8ab8a"
                strokeWidth="1.2"
              />
              <g clipPath={`url(#${visorClip})`}>
                <polygon
                  className="astro-glint"
                  points="34,6 37.5,6 33.5,32 30,32"
                  fill="#ffffff"
                  opacity="0"
                />
              </g>
              <ellipse
                cx="30"
                cy="15"
                rx="2.6"
                ry="3.6"
                fill="#ffffff"
                opacity="0.35"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  )
}

const SCIENTIST_PAUSE: [number, number] = [6000, 12000]
const ROVER_PAUSE: [number, number] = [5000, 10000]

const Wheel = ({ cx }: { cx: number }) => (
  <g className="rover-wheel">
    <circle cx={cx} cy="56" r="9" fill="#3a302a" />
    <circle
      cx={cx}
      cy="56"
      r="6.5"
      fill="none"
      stroke="#5a4a3a"
      strokeWidth="1.5"
      strokeDasharray="2 2"
    />
    <line
      x1={cx - 6}
      y1="56"
      x2={cx + 6}
      y2="56"
      stroke="#8a7a55"
      strokeWidth="1.4"
    />
    <line x1={cx} y1="50" x2={cx} y2="62" stroke="#8a7a55" strokeWidth="1.4" />
    <circle cx={cx} cy="56" r="2.6" fill="#c9bb98" />
  </g>
)

const Rover = () => {
  const ref = useRef<HTMLDivElement>(null)

  useWander(ref, {
    min: 28,
    max: 40,
    start: 34,
    speed: 1.4,
    pause: ROVER_PAUSE
  })

  return (
    <div ref={ref} className="rover absolute bottom-[2%] w-16 sm:w-20 md:w-24">
      <div className="rover-flip">
        <svg
          viewBox="0 0 120 70"
          className="h-auto w-full overflow-visible drop-shadow-[0_6px_8px_rgba(0,0,0,0.35)]"
        >
          <ellipse
            cx="60"
            cy="66"
            rx="52"
            ry="3"
            fill="#1a0a04"
            opacity="0.3"
          />
          <circle className="rover-dust" cx="12" cy="62" r="4" fill="#c98a5c" />
          <circle
            className="rover-dust"
            cx="16"
            cy="64"
            r="3"
            fill="#b8774a"
            style={{ animationDelay: '0.5s' }}
          />

          <g className="rover-body">
            {/* Rocker-bogie suspension */}
            <path
              d="M22 56 L40 40 L60 56 M60 56 L78 40 L98 56"
              fill="none"
              stroke="#8a7a55"
              strokeWidth="2.4"
              strokeLinejoin="round"
            />

            <rect x="6" y="27" width="14" height="11" rx="2" fill="#8a7a55" />
            <g stroke="#6b5c3e" strokeWidth="1">
              <line x1="9" y1="29" x2="9" y2="36" />
              <line x1="13" y1="29" x2="13" y2="36" />
              <line x1="17" y1="29" x2="17" y2="36" />
            </g>

            <rect x="18" y="29" width="84" height="14" rx="3" fill="#efe9dc" />
            <rect x="22" y="24" width="72" height="6" rx="1.5" fill="#c9bb98" />
            <rect x="26" y="35" width="22" height="2.5" rx="1" fill="#c1442c" />
            <circle
              className="astro-beacon"
              cx="72"
              cy="36"
              r="1.8"
              fill="#ff5a3c"
            />
            <rect x="80" y="33" width="9" height="5" rx="1" fill="#2a4f6b" />

            <g className="rover-dish" style={pivot(40, 24)}>
              <line
                x1="40"
                y1="24"
                x2="40"
                y2="15"
                stroke="#8a7a55"
                strokeWidth="1.6"
              />
              <ellipse cx="40" cy="13" rx="8" ry="3" fill="#d9d0bd" />
              <circle cx="40" cy="12" r="1.2" fill="#8a7a55" />
            </g>

            <line
              x1="92"
              y1="25"
              x2="92"
              y2="8"
              stroke="#c9bb98"
              strokeWidth="3"
            />
            <g className="rover-head" style={pivot(92, 8)}>
              <rect x="84" y="1" width="16" height="9" rx="2" fill="#efe9dc" />
              <circle cx="95" cy="5.5" r="2.4" fill="#2a4f6b" />
              <circle cx="89.5" cy="5.5" r="1.6" fill="#2a4f6b" />
              <circle cx="94.4" cy="4.8" r="0.7" fill="#ffffff" opacity="0.6" />
            </g>
          </g>

          <Wheel cx={22} />
          <Wheel cx={60} />
          <Wheel cx={98} />
        </svg>
      </div>
    </div>
  )
}

const WeatherStation = () => (
  <div className="absolute bottom-[7%] left-[71%] w-6 sm:w-7 md:w-8">
    <svg
      viewBox="0 0 40 80"
      className="h-auto w-full overflow-visible drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]"
    >
      <ellipse cx="20" cy="78" rx="15" ry="2" fill="#1a0a04" opacity="0.25" />
      <g stroke="#8a7a55" strokeWidth="1.6" strokeLinecap="round">
        <line x1="20" y1="48" x2="7" y2="77" />
        <line x1="20" y1="48" x2="33" y2="77" />
        <line x1="20" y1="48" x2="20" y2="77" />
      </g>
      <line x1="20" y1="12" x2="20" y2="48" stroke="#c9bb98" strokeWidth="2" />
      <rect
        x="23"
        y="26"
        width="13"
        height="7"
        rx="1"
        fill="#2a4f6b"
        transform="rotate(-18 29.5 29.5)"
      />
      <rect x="13" y="40" width="14" height="10" rx="2" fill="#efe9dc" />
      <circle className="astro-beacon" cx="17" cy="45" r="1.4" fill="#ff5a3c" />
      <rect x="20" y="43.5" width="5" height="3" rx="0.6" fill="#6ef2c6" />
      <g className="station-spin">
        <line
          x1="11"
          y1="11"
          x2="29"
          y2="11"
          stroke="#8a7a55"
          strokeWidth="1.2"
        />
        <path d="M8 11 a3 3 0 0 1 6 0 Z" fill="#c1442c" />
        <path d="M26 11 a3 3 0 0 0 6 0 Z" fill="#c1442c" />
      </g>
      <circle cx="20" cy="11" r="1.6" fill="#c9bb98" />
    </svg>
  </div>
)

export const MarsGround = () => {
  return (
    <div
      className="absolute inset-x-0 bottom-0 h-[26vh] min-h-[170px] max-h-[260px]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-full w-full"
      >
        <path
          d="M0,140 C220,90 380,150 620,110 C860,70 1040,130 1440,90 L1440,220 L0,220 Z"
          className="fill-[#a85a2c] dark:fill-[#7a3418] transition-colors duration-[1400ms] ease-in-out"
        />
        <path
          d="M0,180 C240,130 460,190 720,150 C980,110 1180,170 1440,140 L1440,220 L0,220 Z"
          className="fill-[#8a4620] dark:fill-[#5c2712] transition-colors duration-[1400ms] ease-in-out"
        />
      </svg>

      <div className="absolute bottom-[6%] left-[18%] h-3 w-5 rounded-full bg-[#6b3416] dark:bg-[#4a2012] opacity-80 transition-colors duration-[1400ms] ease-in-out" />
      <div className="absolute bottom-[10%] left-[62%] h-2.5 w-4 rounded-full bg-[#6b3416] dark:bg-[#4a2012] opacity-70 transition-colors duration-[1400ms] ease-in-out" />
      <div className="absolute bottom-[4%] left-[80%] h-2 w-3 rounded-full bg-[#6b3416] dark:bg-[#4a2012] opacity-80 transition-colors duration-[1400ms] ease-in-out" />

      <Astronaut
        min={2}
        max={24}
        start={6}
        speed={3.4}
        idleDelay={-2}
        bottomClassName="bottom-[8%]"
        widthClassName="w-10 sm:w-12 md:w-14"
      />
      <WeatherStation />
      <Rover />

      <Astronaut
        min={76}
        max={93}
        start={80}
        speed={2.4}
        role="scientist"
        pause={SCIENTIST_PAUSE}
        bottomClassName="bottom-[5%]"
        widthClassName="w-9 sm:w-11 md:w-13"
      />
    </div>
  )
}
