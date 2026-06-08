"use client";

import { motion } from "framer-motion";
import { Star, Code, Users, Trophy, Award, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ACHIEVEMENTS, type Achievement } from "@/data/achievements";

const ICONS: Record<Achievement["icon"], LucideIcon> = {
  star: Star,
  code: Code,
  users: Users,
  trophy: Trophy,
  award: Award,
};

const cardVariant = {
  hidden: { opacity: 0, y: 36, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute right-1/4 top-0 h-80 w-80 translate-x-1/2 rounded-full bg-amber-400/10 blur-[140px]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones along the way"
          description="Recognitions and contributions that mark my growth as an engineer, competitive programmer, and community contributor."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((achievement, i) => {
            const Icon = ICONS[achievement.icon];
            const isLast = i === ACHIEVEMENTS.length - 1 && ACHIEVEMENTS.length % 3 !== 0;
            return (
              <motion.div
                key={achievement.title}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -8, scale: 1.015 }}
                className={`glass-strong group relative overflow-hidden rounded-2xl border border-white/10 p-7 transition-shadow duration-500 hover:shadow-[0_0_70px_-18px_rgba(217,70,239,0.45)] ${
                  isLast ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="pointer-events-none absolute -left-10 -bottom-10 h-44 w-44 rounded-full bg-gradient-to-tr from-violet-500/0 via-fuchsia-500/0 to-cyan-400/0 blur-3xl transition-all duration-700 group-hover:from-violet-500/25 group-hover:via-fuchsia-500/15 group-hover:to-cyan-400/20" />

                <div className="relative flex flex-col gap-4">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.6 }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/20 via-fuchsia-500/15 to-violet-500/20 text-amber-200 ring-1 ring-white/10"
                  >
                    <Icon size={26} />
                  </motion.div>
                  <h3 className="font-display text-lg font-semibold leading-snug text-white">
                    {achievement.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/55">{achievement.description}</p>
                </div>

                <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
