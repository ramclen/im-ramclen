import { HeroSection } from '@/components/sections/HeroSection'
import { AppBackground } from '@/components/common/AppBackground'
import { Navbar } from '@/components/common/Navbar'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ExpertiseSection } from '@/components/sections/ExpertiseSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/common/Footer'

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <AppBackground />
      <Navbar />
      <main id="main">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <ExpertiseSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
