'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className={cn('w-8 h-8', className)} />
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={cn(
        'flex items-center justify-center w-8 h-8 rounded-lg',
        'text-neutral-500 dark:text-neutral-400',
        'hover:text-neutral-800 dark:hover:text-neutral-200',
        'hover:bg-neutral-200 dark:hover:bg-neutral-800',
        'transition-colors',
        className,
      )}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={16} />
      ) : (
        <Moon size={16} />
      )}
    </button>
  )
}
