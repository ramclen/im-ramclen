import { useEffect, useState, type CSSProperties } from 'react'

type Star = {
  id: number
  size: number
  x: number
  y: number
  opacity: number
  duration: number
  delay: number
}

type Meteor = {
  id: number
  size: number
  x: number
  y: number
  duration: number
  delay: number
}

const createStars = (): Star[] => {
  // Roughly one star per 100x100px keeps density even across screen sizes
  const count = Math.floor((window.innerWidth * window.innerHeight) / 10000)

  return Array.from({ length: count }, (_, id) => ({
    id,
    // Mostly small stars with the odd brighter one
    size:
      Math.random() < 0.85
        ? Math.random() * 1.6 + 1
        : Math.random() * 1.5 + 2.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.5,
    duration: Math.random() * 4 + 3,
    delay: -Math.random() * 7
  }))
}

const createMeteors = (): Meteor[] =>
  Array.from({ length: window.innerWidth < 640 ? 3 : 5 }, (_, id) => ({
    id,
    size: Math.random() * 2 + 1,
    x: 20 + Math.random() * 80,
    y: Math.random() * 30,
    duration: Math.random() * 10 + 14,
    delay: Math.random() * 18
  }))

export const StarBackground = () => {
  const [stars, setStars] = useState(createStars)
  const [meteors] = useState(createMeteors)

  useEffect(() => {
    const handleResize = () => setStars(createStars())

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-linear-to-b from-[#05030a] via-[#160a10] to-[#2c1013]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#3a1512]/70 to-transparent" />

      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-twinkle"
          style={
            {
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.x}%`,
              top: `${star.y}%`,
              '--star-opacity': star.opacity,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`
            } as CSSProperties
          }
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.size * 60}px`,
            height: `${meteor.size}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDuration: `${meteor.duration}s`,
            animationDelay: `${meteor.delay}s`
          }}
        />
      ))}
    </div>
  )
}
