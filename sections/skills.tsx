"use client";

import { motion } from "framer-motion";
import {
  Code2,
  LayoutTemplate,
  Server,
  BrainCircuit,
  Database,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { SKILL_CATEGORIES } from "@/data/skills";

const ICONS = [Code2, LayoutTemplate, Server, BrainCircuit, Database, Wrench];

const cardVariant = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I build with"
          description="A curated set of languages, frameworks, and platforms I use to design, build, and ship robust software."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((cat, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={cat.title}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -8 }}
                className="glass group relative overflow-hidden rounded-2xl p-7 transition-shadow duration-500 hover:shadow-[0_0_60px_-18px_rgba(34,211,238,0.45)]"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-violet-500/0 to-cyan-400/0 blur-3xl transition-all duration-700 group-hover:from-violet-500/25 group-hover:to-cyan-400/20" />

                <div className="relative flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.08 }}
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-violet-200 ring-1 ring-white/10"
                    >
                      <Icon size={22} />
                    </motion.div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">{cat.title}</h3>
                      <p className="text-xs text-white/45">{cat.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, si) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 + si * 0.05, duration: 0.4 }}
                        whileHover={{ scale: 1.08, y: -2 }}
                      >
                        <Badge
                          variant="outline"
                          className="cursor-default transition-colors duration-300 hover:bg-violet-500/15 hover:text-white"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
