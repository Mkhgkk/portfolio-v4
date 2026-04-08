import { Card } from '@/components/ui/card'
import { cn } from '@/lib/cn'

export function RoleCard({ className }: { className?: string }) {
  return (
    <Card className={cn('flex flex-col gap-3 justify-between', className)}>
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Available</span>
      </div>
      <div>
        <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Research Engineer</p>
        <p className="text-xs text-neutral-400 dark:text-neutral-500">@ ConTi Lab</p>
      </div>
    </Card>
  )
}
