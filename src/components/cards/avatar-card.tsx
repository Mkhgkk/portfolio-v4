import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/cn'
import { person } from '@/data'

export function AvatarCard({ className }: { className?: string }) {
  return (
    <Card className={cn('overflow-hidden !p-0 relative', className)}>
      <Image
        src="/assets/avatar.png"
        alt={person.name}
        fill
        className="object-cover grayscale hover:grayscale-0 transition-[filter] duration-500"
        sizes="(max-width: 640px) 50vw, 200px"
        priority
      />
    </Card>
  )
}
