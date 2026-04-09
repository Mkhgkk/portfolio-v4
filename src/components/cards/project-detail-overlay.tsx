'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { X, ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { Project } from '@/data'

export function ProjectDetailOverlay({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-40 bg-black/20 dark:bg-black/50 backdrop-blur-[2px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        onClick={onClose}
      />

      {/* Expanded card — shares layoutId with the grid card */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none">
        <motion.div
          layoutId={`card-${project.id}`}
          className="w-full max-w-sm rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-5 flex flex-col gap-4 pointer-events-auto"
        >
          {/* Content fades in after the shape settles */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, delay: 0.12 }}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                  {project.title}
                </h3>
                {project.highlight && (
                  <span className="inline-flex w-fit text-xs font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/50 px-2 py-0.5 rounded-md">
                    {project.highlight}
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300 transition-colors shrink-0 mt-0.5"
                aria-label="Close"
              >
                <X size={14} />
              </button>
            </div>

            {/* Full description */}
            <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              {project.description}
            </p>

            {/* All tech */}
            <div className="flex flex-wrap gap-1">
              {project.tech.map((t) => (
                <Badge key={t} tech={t} />
              ))}
            </div>

            {/* Links */}
            {(project.liveUrl || project.githubUrl) && (
              <div className="flex gap-3 pt-1 border-t border-neutral-200 dark:border-neutral-800">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  >
                    Live demo <ArrowUpRight size={11} />
                  </Link>
                )}
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  >
                    GitHub <ArrowUpRight size={11} />
                  </Link>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
