'use client'

import { motion } from 'framer-motion'
import { containerVariants, fadeUpVariants, sectionVariants } from '@/lib/motion'
import { Badge } from '@/components/ui/badge'
import { experience } from '@/data'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Experience</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">Where I&apos;ve worked</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col"
      >
        {experience.map((entry, i) => (
          <motion.div
            key={`${entry.company}-${i}`}
            variants={fadeUpVariants}
            className="relative flex gap-4 pb-8 last:pb-0"
          >
            {/* Timeline line */}
            {i < experience.length - 1 && (
              <div className="absolute left-[5px] top-6 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />
            )}
            {/* Dot */}
            <div className="relative mt-1.5 flex-shrink-0">
              <div className="w-[11px] h-[11px] rounded-full border-2 border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-950" />
            </div>
            {/* Content */}
            <div className="flex flex-col gap-2 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                      {entry.company}
                    </span>
                    {entry.website && (
                      <Link
                        href={entry.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                      >
                        <ArrowUpRight size={13} />
                      </Link>
                    )}
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{entry.role}</p>
                </div>
                <span className="text-sm text-neutral-400 dark:text-neutral-500 whitespace-nowrap shrink-0">
                  {entry.period.start} – {entry.period.end === 'present' ? 'Present' : entry.period.end}
                </span>
              </div>

              <ul className="flex flex-col gap-1">
                {entry.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex gap-2">
                    <span className="text-neutral-300 dark:text-neutral-600 shrink-0 mt-0.5">–</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1">
                {entry.tech.map((t) => (
                  <Badge key={t} tech={t} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
