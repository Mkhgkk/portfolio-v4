import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/cn'
import { person } from '@/data'
import { GithubIcon } from '@/components/ui/icons'

export function GithubCard({ className }: { className?: string }) {
  return (
    <Link
      href={person.links.github}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('group block', className)}
    >
      <Card className="h-full flex flex-col gap-3 justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
        <GithubIcon className="text-neutral-400 dark:text-neutral-500" />
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">GitHub</p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500">@Mkhgkk</p>
          </div>
          <ArrowUpRight
            size={14}
            className="text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors mb-0.5"
          />
        </div>
      </Card>
    </Link>
  )
}
