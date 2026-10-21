import { useEffect, useRef, type CSSProperties } from 'react'

const smokePuffs = [
  { size: 'h-2 w-2', tone: 'bg-white/45', delay: '0s', drift: '-6px' },
  { size: 'h-2.5 w-2.5', tone: 'bg-white/35', delay: '0.4s', drift: '5px' },
  { size: 'h-3 w-3', tone: 'bg-white/25', delay: '0.8s', drift: '-3px' },
  { size: 'h-2.5 w-2.5', tone: 'bg-white/30', delay: '1.2s', drift: '7px' }
]

export const RocketLaunch = () => {
  const rocketRef = useRef<HTMLDivElement>(null)
  const exhaustRef = useRef<HTMLDivElement>(null)
  const tickingRef = useRef(false)

  useEffect(() => {
    const orbitDrift = (p: number) => -Math.pow(p, 1.4) * 70

    const wobbleX = (p: number) =>
      orbitDrift(p) +
      Math.sin(p * Math.PI * 2 * 1.1) * 4.5 +
      Math.sin(p * Math.PI * 2 * 0.45 + 1.2) * 3 +
      Math.sin(p * Math.PI * 2 * 0.18 + 0.4) * 2.5

    const updatePosition = () => {
      tickingRef.current = false
      const node = rocketRef.current
      if (!node) return

      const scrollRange =
        document.documentElement.scrollHeight - window.innerHeight
      const progress =
        scrollRange > 0
          ? Math.min(1, Math.max(0, window.scrollY / scrollRange))
          : 0

      const translateX = wobbleX(progress)
      const translateYJitter = Math.sin(progress * Math.PI * 2 * 1.4) * 0.5
      const translateY = -progress * 105 + translateYJitter
      const rotate = Math.max(
        -14,
        Math.min(10, (wobbleX(progress + 0.004) - translateX) * 25)
      )
      const scale = 1 - progress * 0.4
      const opacity =
        progress > 0.88 ? Math.max(0, 1 - (progress - 0.88) / 0.12) : 1
      const exhaustOpacity = Math.min(1, progress / 0.01)

      node.style.transform = `translate(${translateX}px, ${translateY}vh) rotate(${rotate}deg) scale(${scale})`
      node.style.opacity = String(opacity)

      if (exhaustRef.current) {
        exhaustRef.current.style.opacity = String(exhaustOpacity)
      }
    }

    const handleScroll = () => {
      if (tickingRef.current) return
      tickingRef.current = true
      requestAnimationFrame(updatePosition)
    }

    updatePosition()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div
      ref={rocketRef}
      className="absolute bottom-[10%] right-[8%] md:right-[12%] w-8 sm:w-10 md:w-12 will-change-transform"
      style={{ transformOrigin: '50% 85%' }}
      aria-hidden="true"
    >
      <div className="relative">
        <svg
          viewBox="0 0 40 100"
          className="h-auto w-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]"
        >
          <path d="M10 62 L2 82 L14 76 Z" fill="#b23a2e" />
          <path d="M30 62 L38 82 L26 76 Z" fill="#b23a2e" />
          <rect x="10" y="20" width="20" height="52" rx="10" fill="#e7e2d6" />
          <path
            d="M20 2 C26 12 30 20 30 26 L10 26 C10 20 14 12 20 2 Z"
            fill="#c1442c"
          />
          <circle cx="20" cy="38" r="6" fill="#2a4f6b" />
          <circle cx="18" cy="36" r="1.6" fill="#fff" opacity="0.5" />
          <rect x="10" y="54" width="20" height="4" fill="#c1442c" />
        </svg>

        <div
          ref={exhaustRef}
          className="absolute left-1/2 top-[74%] -translate-x-1/2 flex flex-col items-center"
          style={{ opacity: 0 }}
        >
          <div className="relative h-7 w-3.5">
            <div className="animate-flame absolute inset-0 origin-top rounded-b-full bg-linear-to-b from-orange-300 via-orange-500/90 to-transparent blur-[0.5px]" />
            <div
              className="animate-flame absolute inset-x-[25%] top-0 h-4 origin-top rounded-b-full bg-linear-to-b from-white via-yellow-200 to-transparent"
              style={{ animationDelay: '-0.09s' }}
            />
          </div>
          <div className="relative -mt-2 h-3 w-3">
            {smokePuffs.map((puff) => (
              <span
                key={puff.delay}
                className={`animate-smoke absolute left-1/2 top-0 -translate-x-1/2 rounded-full blur-[1px] ${puff.size} ${puff.tone}`}
                style={
                  {
                    animationDelay: puff.delay,
                    '--drift': puff.drift
                  } as CSSProperties
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
