'use client'

import { motion } from 'framer-motion'
import { containerVariants, fadeUpVariants, sectionVariants } from '@/lib/motion'
import { StatusBadge } from '@/components/ui/badge'
import { publications } from '@/data'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export function PublicationsSection() {
  return (
    <motion.section
      id="publications"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">Publications</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">Academic research</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-1"
      >
        {publications.map((pub, i) => (
          <motion.div
            key={pub.id}
            variants={fadeUpVariants}
            className="group flex gap-4 p-4 rounded-xl hover:bg-neutral-200/30 dark:hover:bg-neutral-900/30 transition-colors"
          >
            <span className="text-xs font-mono text-neutral-300 dark:text-neutral-600 mt-0.5 w-5 shrink-0">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-2 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-medium text-neutral-800 dark:text-neutral-200 leading-snug">
                  {pub.url ? (
                    <Link
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline underline-offset-2 inline-flex items-center gap-1"
                    >
                      {pub.title}
                      <ArrowUpRight size={13} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ) : (
                    pub.title
                  )}
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400 dark:text-neutral-500">
                <span className="font-medium">{pub.journal}</span>
                <span>·</span>
                <span>{pub.date}</span>
                <span>·</span>
                <StatusBadge status={pub.status} />
                <span>·</span>
                <span className="capitalize">{pub.authorRole.replace('-', ' ')}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
