'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/cn'
import type { Project } from '@/data'

function CardContent({ project }: { project: Project }) {
  const hasLink = project.githubUrl || project.liveUrl
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
            {project.title}
          </h3>
          <div className="flex items-center gap-1 shrink-0">
            {project.highlight && (
              <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/50 px-2 py-0.5 rounded-md">
                {project.highlight}
              </span>
            )}
            {hasLink && (
              <ArrowUpRight
                size={14}
                className="text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors"
              />
            )}
          </div>
        </div>
        <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 line-clamp-3">
          {project.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-1">
        {project.tech.slice(0, 6).map((t) => (
          <Badge key={t} tech={t} />
        ))}
        {project.tech.length > 6 && (
          <span className="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium bg-neutral-200 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-500">
            +{project.tech.length - 6}
          </span>
        )}
      </div>
    </>
  )
}

export function ProjectCard({
  project,
  className,
  onSelect,
  isSelected = false,
}: {
  project: Project
  className?: string
  onSelect?: () => void
  isSelected?: boolean
}) {
  const href = project.liveUrl ?? project.githubUrl

  // Projects with an external link: original behavior, no shared transition
  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        <Card
          className={cn(
            'h-full flex flex-col gap-3 justify-between group',
            'hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors cursor-pointer',
            className,
          )}
        >
          <CardContent project={project} />
        </Card>
      </Link>
    )
  }

  // Projects without a link: shared layout transition to detail overlay
  return (
    <motion.div
      layoutId={`card-${project.id}`}
      onClick={onSelect}
      className={cn(
        'h-full rounded-2xl border border-neutral-200 dark:border-neutral-800',
        'bg-neutral-200/40 dark:bg-neutral-900/40',
        'p-4 flex flex-col gap-3 justify-between group cursor-pointer',
        'hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors',
        className,
      )}
      style={{ opacity: isSelected ? 0 : 1 }}
    >
      <CardContent project={project} />
    </motion.div>
  )
}
