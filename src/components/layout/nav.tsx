'use client'

import Link from 'next/link'
import { ThemeToggle } from '@/components/ui/theme-toggle'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Writing', href: '#publications' },
]

export function Nav() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4">
      <nav className="flex items-center justify-between px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100/80 dark:bg-neutral-950/80 backdrop-blur-sm">
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-3 py-1.5 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors rounded-full hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <ThemeToggle />
      </nav>
    </header>
  )
}
