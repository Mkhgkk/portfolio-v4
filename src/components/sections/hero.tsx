'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { containerVariants, fadeUpVariants } from '@/lib/motion'
import { LinkedinIcon } from '@/components/ui/icons'
import { LocationCard } from '@/components/cards/location-card'
import { RoleCard } from '@/components/cards/role-card'
import { GithubCard } from '@/components/cards/github-card'
import { SocialCard } from '@/components/cards/social-card'
import { TimeCard } from '@/components/cards/time-card'
import { person } from '@/data'

export function HeroSection() {
  return (
    <section id="home" className="flex flex-col gap-8">
      {/* Intro Text */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-3"
      >
        <motion.h1
          variants={fadeUpVariants}
          className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100"
        >
          Hi, I&apos;m {person.firstName} 👋
        </motion.h1>
        <motion.p
          variants={fadeUpVariants}
          className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-xl"
        >
          {person.bio}
        </motion.p>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 sm:grid-cols-8 gap-1"
      >
        <motion.div variants={fadeUpVariants} className="sm:col-span-2">
          <LocationCard className="h-full min-h-[100px]" />
        </motion.div>

        <motion.div variants={fadeUpVariants} className="sm:col-span-3">
          <RoleCard className="h-full min-h-[100px]" />
        </motion.div>

        <motion.div variants={fadeUpVariants} className="sm:col-span-3">
          <GithubCard className="h-full min-h-[100px]" />
        </motion.div>

        <motion.div variants={fadeUpVariants} className="sm:col-span-2">
          <SocialCard
            icon={LinkedinIcon}
            label="LinkedIn"
            sublabel="Connect"
            href={person.links.linkedin}
            className="h-full min-h-[100px]"
          />
        </motion.div>

        <motion.div variants={fadeUpVariants} className="sm:col-span-3">
          <SocialCard
            icon={Mail}
            label="Email"
            sublabel={person.email}
            href={`mailto:${person.email}`}
            className="h-full min-h-[100px]"
          />
        </motion.div>

        <motion.div variants={fadeUpVariants} className="sm:col-span-3">
          <TimeCard className="h-full min-h-[100px]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
