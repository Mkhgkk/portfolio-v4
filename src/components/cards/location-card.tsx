import { MapPin } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/cn'

export function LocationCard({ className }: { className?: string }) {
  return (
    <Card className={cn('flex flex-col gap-3 justify-between', className)}>
      <MapPin size={18} className="text-neutral-400 dark:text-neutral-500" />
      <div>
        <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Seoul</p>
        <p className="text-xs text-neutral-400 dark:text-neutral-500">Korea</p>
      </div>
    </Card>
  )
}
