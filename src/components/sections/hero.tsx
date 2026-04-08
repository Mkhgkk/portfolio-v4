"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { containerVariants, fadeUpVariants } from "@/lib/motion";
import { LinkedinIcon } from "@/components/ui/icons";
import { LocationCard } from "@/components/cards/location-card";
import { RoleCard } from "@/components/cards/role-card";
import { GithubCard } from "@/components/cards/github-card";
import { SocialCard } from "@/components/cards/social-card";
import { AvatarCard } from "@/components/cards/avatar-card";
import { person } from "@/data";

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
          className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100"
        >
          Hi, I&apos;m {person.firstName} 👋
        </motion.h1>
        <motion.p
          variants={fadeUpVariants}
          className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-xl"
        >
          {(() => {
            const [before, after] = person.bio.split("Contilab");
            return (
              <>
                {before}
                <Link
                  href="http://contilab.co.kr/isafeguard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 dark:text-neutral-300 underline underline-offset-2 decoration-neutral-400 dark:decoration-neutral-600 hover:decoration-neutral-700 dark:hover:decoration-neutral-300 transition-colors"
                >
                  Contilab
                </Link>
                {after}
              </>
            );
          })()}
        </motion.p>
      </motion.div>

      {/* Bento Grid — 2 rows × 8 cols
          Row 1: Avatar(3) | Role(3) | Location(2)
          Row 2: Avatar(3) | GitHub(3) | LinkedIn(2)
      */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 sm:grid-cols-8 grid-rows-2 gap-1"
      >
        <motion.div
          variants={fadeUpVariants}
          className="row-span-2 sm:col-span-3 sm:row-span-2"
        >
          <AvatarCard className="h-full min-h-[250px]" />
        </motion.div>

        <motion.div variants={fadeUpVariants} className="sm:col-span-3">
          <RoleCard className="h-full min-h-[120px]" />
        </motion.div>

        <motion.div variants={fadeUpVariants} className="sm:col-span-2">
          <LocationCard className="h-full min-h-[120px]" />
        </motion.div>

        <motion.div variants={fadeUpVariants} className="sm:col-span-3">
          <GithubCard className="h-full min-h-[120px]" />
        </motion.div>

        <motion.div variants={fadeUpVariants} className="sm:col-span-2">
          <SocialCard
            icon={LinkedinIcon}
            label="LinkedIn"
            sublabel="Connect"
            href={person.links.linkedin}
            className="h-full min-h-[120px]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
