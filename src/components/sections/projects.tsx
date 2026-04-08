'use client'

import { motion } from 'framer-motion'
import { containerVariants, fadeUpVariants, sectionVariants } from '@/lib/motion'
import { ProjectCard } from '@/components/cards/project-card'
import { projects } from '@/data'

export function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">Projects</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">Things I&apos;ve built</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-1"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={fadeUpVariants}>
            <ProjectCard project={project} className="min-h-[160px]" />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
