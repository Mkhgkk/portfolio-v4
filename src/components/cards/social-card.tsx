import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/cn'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import type { ComponentType } from 'react'

interface SocialCardProps {
  icon: ComponentType<any>
  label: string
  sublabel: string
  href: string
  className?: string
}

export function SocialCard({ icon: Icon, label, sublabel, href, className }: SocialCardProps) {
  const isExternal = href.startsWith('http')
  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={cn('group block', className)}
    >
      <Card className="h-full flex flex-col gap-3 justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
        <Icon width={18} height={18} className="text-neutral-400 dark:text-neutral-500" />
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{label}</p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500 truncate max-w-[140px]">{sublabel}</p>
          </div>
          <ArrowUpRight
            size={14}
            className="text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors mb-0.5 shrink-0"
          />
        </div>
      </Card>
    </Link>
  )
}
