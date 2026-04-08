import { HeroSection } from '@/components/sections/hero'
import { ProjectsSection } from '@/components/sections/projects'
import { ExperienceSection } from '@/components/sections/experience'
import { PublicationsSection } from '@/components/sections/publications'
import { OpenSourceSection } from '@/components/sections/open-source'
import { EducationSection } from '@/components/sections/education'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <PublicationsSection />
      <OpenSourceSection />
      <EducationSection />
    </>
  )
}
