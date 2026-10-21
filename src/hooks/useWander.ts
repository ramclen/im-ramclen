import { useEffect, type RefObject } from 'react'

type WanderOptions = {
  min: number
  max: number
  start: number
  speed?: number
  pause?: [number, number]
}

const DEFAULT_PAUSE: [number, number] = [1800, 6000]

// Moves the node horizontally and exposes its state as data attributes
// (data-moving / data-facing) so the walk cycle itself lives in CSS.
export const useWander = (
  ref: RefObject<HTMLElement | null>,
  { min, max, start, speed = 4, pause = DEFAULT_PAUSE }: WanderOptions
) => {
  const [pauseMin, pauseMax] = pause

  useEffect(() => {
    const node = ref.current
    if (!node) return

    node.style.left = `${start}%`
    node.dataset.moving = 'false'

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let pos = start
    let target = min + Math.random() * (max - min)
    let pauseUntil = performance.now() + 1200 + Math.random() * 2000
    let lastTime = performance.now()
    let wasMoving = false
    let frameId: number

    node.dataset.facing = target > pos ? 'right' : 'left'

    const tick = (time: number) => {
      const dt = Math.min(0.05, (time - lastTime) / 1000)
      lastTime = time

      let moving = false

      if (time > pauseUntil) {
        const diff = target - pos
        if (Math.abs(diff) < 0.6) {
          pauseUntil = time + pauseMin + Math.random() * (pauseMax - pauseMin)
          target = min + Math.random() * (max - min)
        } else {
          moving = true
          // Ease in/out near the ends of each walk
          const ease = Math.min(1, Math.abs(diff) / 2.5)
          pos += Math.sign(diff) * speed * Math.max(0.35, ease) * dt
          node.style.left = `${pos}%`
        }
      }

      if (moving !== wasMoving) {
        wasMoving = moving
        node.dataset.moving = String(moving)
        if (moving) node.dataset.facing = target > pos ? 'right' : 'left'
      }

      frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [ref, min, max, start, speed, pauseMin, pauseMax])
}
