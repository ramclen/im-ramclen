import { useEffect, useState } from 'react'

type Range = [min: number, max: number]

type Cloud = {
  id: string
  size: number
  top: number
  duration: number
  delay: number
  opacity: number
}

type LayerConfig = {
  name: string
  count: number
  top: Range
  size: Range
  duration: Range
  opacity: Range
}

const between = ([min, max]: Range) => min + Math.random() * (max - min)

const createLayer = ({
  name,
  count,
  top,
  size,
  duration,
  opacity
}: LayerConfig) =>
  Array.from({ length: count }, (_, index): Cloud => {
    const cloudDuration = between(duration)

    return {
      id: `${name}-${index}`,
      size: between(size),
      top: between(top),
      duration: cloudDuration,
      // Negative delay so clouds are already mid-sky on first paint
      delay: -Math.random() * cloudDuration,
      opacity: between(opacity)
    }
  })

// Smaller screens get fewer, faster clouds so the sky doesn't feel crowded
const createClouds = () => {
  const width = window.innerWidth
  const area = width * window.innerHeight
  const isPhone = width < 640
  const isTablet = width < 900

  const nearCount = isPhone
    ? 2
    : isTablet
      ? 3
      : Math.min(7, Math.max(4, Math.round(area / 220000)))
  const farCount = isPhone
    ? 1
    : isTablet
      ? 2
      : Math.max(2, Math.round(nearCount * 0.6))

  const near = createLayer({
    name: 'near',
    count: nearCount,
    top: [14, 56],
    size: [140, 220],
    duration: isPhone ? [34, 48] : width < 1200 ? [46, 64] : [60, 86],
    opacity: [0.5, 0.68]
  })

  const far = createLayer({
    name: 'far',
    count: farCount,
    top: [8, 40],
    size: [100, 160],
    duration: isPhone ? [48, 68] : width < 1200 ? [62, 86] : [78, 108],
    opacity: [0.32, 0.5]
  })

  // Far layer first so near clouds paint on top
  return [...far, ...near]
}

export const CloudBackground = () => {
  const [clouds, setClouds] = useState(createClouds)

  useEffect(() => {
    const handleResize = () => setClouds(createClouds())

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-linear-to-b from-[#7a2c10] via-[#c1601f] to-[#f3d3a1]" />
      <div className="absolute inset-x-0 top-0 h-56 bg-linear-to-b from-[#ffcf8a]/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-linear-to-t from-[#f8e2b4]/70 to-transparent" />

      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="cloud"
          style={{
            width: `${cloud.size}px`,
            height: `${cloud.size * 0.4}px`,
            left: `${-(cloud.size * 1.35)}px`,
            top: `${cloud.top}%`,
            opacity: cloud.opacity,
            animation: `cloud-drift ${cloud.duration}s linear ${cloud.delay}s infinite, cloud-bob ${cloud.duration / 6}s ease-in-out ${cloud.delay}s infinite`
          }}
        />
      ))}
    </div>
  )
}
