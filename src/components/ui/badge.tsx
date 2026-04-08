import { cn } from '@/lib/cn'

export function Badge({ tech, className }: { tech: string; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium',
        'bg-neutral-100 text-neutral-500 border border-neutral-200/80',
        'dark:bg-neutral-800/60 dark:text-neutral-400 dark:border-neutral-700/50',
        className,
      )}
    >
      {tech}
    </span>
  )
}

export function StatusBadge({
  status,
  className,
}: {
  status: 'published' | 'under-review'
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium',
        status === 'under-review'
          ? 'bg-neutral-100 text-neutral-500 border border-neutral-200/80 dark:bg-neutral-800/60 dark:text-neutral-400 dark:border-neutral-700/50'
          : 'bg-neutral-100 text-neutral-500 border border-neutral-200/80 dark:bg-neutral-800/60 dark:text-neutral-400 dark:border-neutral-700/50',
        className,
      )}
    >
      {status === 'under-review' ? 'Under Review' : 'Published'}
    </span>
  )
}
