import { cn } from '@/lib/cn'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-neutral-200 dark:border-neutral-800',
        'bg-neutral-200/40 dark:bg-neutral-900/40',
        'p-4',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
