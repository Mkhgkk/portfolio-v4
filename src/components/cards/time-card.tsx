'use client'

import { useEffect, useState } from 'react'
import { Clock } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/cn'

function useSeoulTime() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          timeZone: 'Asia/Seoul',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }),
      )
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return time
}

export function TimeCard({ className }: { className?: string }) {
  const time = useSeoulTime()

  return (
    <Card className={cn('flex flex-col gap-3 justify-between', className)}>
      <Clock size={18} className="text-neutral-400 dark:text-neutral-500" />
      <div>
        <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200 font-mono tabular-nums">
          {time || '--:-- --'}
        </p>
        <p className="text-xs text-neutral-400 dark:text-neutral-500">KST (UTC+9)</p>
      </div>
    </Card>
  )
}
