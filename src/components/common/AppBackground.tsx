import { CloudBackground } from '@/components/common/CloudBackground'
import { StarBackground } from '@/components/common/StarBackground'
import { MarsGround } from '@/components/common/MarsGround'
import { RocketLaunch } from '@/components/common/RocketLaunch'
import { useTheme } from '@/contexts/theme'

export const AppBackground = () => {
  const { isDark } = useTheme()

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
          isDark ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <StarBackground />
      </div>

      <div
        className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
          isDark ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <CloudBackground />
      </div>

      {/* Sun corona + disc */}
      <div
        className={`absolute rounded-full blur-3xl animate-glow-breathe transition-all duration-[1400ms] ease-in-out ${
          isDark
            ? 'h-40 w-40 top-16 right-10 bg-orange-200/0 opacity-0'
            : 'h-60 w-60 top-16 right-6 bg-orange-200/45 opacity-80'
        }`}
      />
      <div
        className={`absolute rounded-full transition-all duration-[1400ms] ease-in-out ${
          isDark
            ? 'h-14 w-14 top-[92px] right-16 opacity-0'
            : 'h-20 w-20 top-[88px] right-12 bg-linear-to-br from-yellow-50 via-orange-100 to-orange-300 shadow-[0_0_36px_rgba(251,146,60,0.45)] opacity-100'
        }`}
      />

      {/* Phobos glow + disc, Deimos disc */}
      <div
        className={`absolute rounded-full blur-3xl animate-glow-breathe transition-all duration-[1400ms] ease-in-out ${
          isDark
            ? 'h-40 w-40 top-16 right-10 bg-slate-200/10 opacity-70'
            : 'h-60 w-60 top-16 right-6 opacity-0'
        }`}
      />
      <div
        className={`absolute rounded-full transition-all duration-[1400ms] ease-in-out ${
          isDark
            ? 'h-14 w-14 top-[92px] right-16 bg-stone-300 shadow-[inset_-6px_-6px_0_0_rgba(15,23,42,0.6),inset_2px_2px_0_0_rgba(255,255,255,0.25)] opacity-100'
            : 'h-20 w-20 top-[88px] right-12 opacity-0'
        }`}
      />
      <div
        className={`absolute h-4 w-4 top-[150px] right-32 rounded-full bg-stone-400/80 transition-opacity duration-[1400ms] ease-in-out ${
          isDark ? 'opacity-90' : 'opacity-0'
        }`}
      />

      <MarsGround />
      <RocketLaunch />
    </div>
  )
}
