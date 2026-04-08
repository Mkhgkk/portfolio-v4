import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/cn'
import type { Project } from '@/data'

export function ProjectCard({ project, className }: { project: Project; className?: string }) {
  const hasLink = project.githubUrl || project.liveUrl
  const href = project.liveUrl ?? project.githubUrl

  const inner = (
    <Card
      className={cn(
        'h-full flex flex-col gap-3 justify-between group',
        hasLink && 'hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors cursor-pointer',
        className,
      )}
    >
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
    </Card>
  )

  if (hasLink && href) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {inner}
      </Link>
    )
  }

  return inner
}
