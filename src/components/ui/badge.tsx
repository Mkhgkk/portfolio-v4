import { cn } from '@/lib/cn'

type BadgeVariant = 'blue' | 'green' | 'purple' | 'orange' | 'amber' | 'neutral'

const techColorMap: Record<string, BadgeVariant> = {
  // Languages & TypeScript
  Python: 'blue',
  TypeScript: 'blue',
  JavaScript: 'blue',
  Java: 'orange',
  Kotlin: 'purple',
  Solidity: 'purple',
  // Frontend
  React: 'blue',
  'React Native': 'blue',
  // Backend / Infra
  Flask: 'green',
  'Node.js': 'green',
  Docker: 'blue',
  Nginx: 'green',
  // Database
  MongoDB: 'green',
  SQL: 'green',
  // ML / Vision
  TensorRT: 'orange',
  YOLOv11: 'orange',
  'ML Kit': 'orange',
  FFmpeg: 'orange',
  // Streaming / Real-time
  GStreamer: 'neutral',
  WebRTC: 'neutral',
  MediaMTX: 'neutral',
  SocketIO: 'neutral',
  // Blockchain / Crypto
  Web3: 'purple',
  ZoKrates: 'purple',
  Blockchain: 'purple',
  // Mapping
  Mapbox: 'green',
  // Mobile
  'Android SDK': 'green',
  // General
  TDD: 'neutral',
  Agile: 'neutral',
  'CI/CD': 'neutral',
}

const variantClasses: Record<BadgeVariant, string> = {
  blue: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  green: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  purple: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  orange: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  amber: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  neutral: 'bg-neutral-200 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400',
}

export function Badge({ tech, className }: { tech: string; className?: string }) {
  const variant = techColorMap[tech] ?? 'neutral'
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium',
        variantClasses[variant],
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
          ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
          : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        className,
      )}
    >
      {status === 'under-review' ? 'Under Review' : 'Published'}
    </span>
  )
}
