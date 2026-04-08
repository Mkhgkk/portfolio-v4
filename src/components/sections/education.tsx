'use client'

import { motion } from 'framer-motion'
import { containerVariants, fadeUpVariants, sectionVariants } from '@/lib/motion'
import { education } from '@/data'
import { GraduationCap } from 'lucide-react'

export function EducationSection() {
  return (
    <motion.section
      id="education"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Education</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">Academic background</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-3"
      >
        {education.map((entry, i) => (
          <motion.div
            key={i}
            variants={fadeUpVariants}
            className="flex items-start gap-3 p-4 rounded-xl hover:bg-neutral-200/30 dark:hover:bg-neutral-900/30 transition-colors"
          >
            <div className="mt-0.5 p-1.5 rounded-lg bg-neutral-200/60 dark:bg-neutral-800/60 shrink-0">
              <GraduationCap size={14} className="text-neutral-500 dark:text-neutral-400" />
            </div>
            <div className="flex flex-col gap-0.5 min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                    {entry.institution}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {entry.degree} · {entry.field}
                  </p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500">{entry.location}</p>
                </div>
                <span className="text-xs text-neutral-400 dark:text-neutral-500 whitespace-nowrap shrink-0">
                  {entry.period.start} – {entry.period.end}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
