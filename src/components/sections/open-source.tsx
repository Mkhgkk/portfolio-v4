'use client'

import { motion } from 'framer-motion'
import { containerVariants, fadeUpVariants, sectionVariants } from '@/lib/motion'
import { ossContributions } from '@/data'
import { ArrowUpRight, GitPullRequest, Plus, Wrench } from 'lucide-react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import type { OSSContributionType } from '@/data'

function ContribIcon({ type }: { type: OSSContributionType }) {
  if (type === 'created') return <Plus size={14} className="text-emerald-500" />
  if (type === 'fix') return <Wrench size={14} className="text-blue-500" />
  return <GitPullRequest size={14} className="text-purple-500" />
}

export function OpenSourceSection() {
  return (
    <motion.section
      id="oss"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">Open Source</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">Contributions to the community</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-1"
      >
        {ossContributions.map((contrib) => (
          <motion.div key={contrib.id} variants={fadeUpVariants}>
            <Link
              href={contrib.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
            >
              <Card className="h-full flex flex-col gap-3 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors min-h-[130px] justify-between">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <ContribIcon type={contrib.type} />
                    <div>
                      <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                        {contrib.repo}
                      </p>
                      <p className="text-xs text-neutral-400 dark:text-neutral-500">{contrib.org}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-neutral-400 dark:text-neutral-500">{contrib.date}</span>
                    <ArrowUpRight
                      size={13}
                      className="text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors"
                    />
                  </div>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {contrib.contribution}
                </p>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
