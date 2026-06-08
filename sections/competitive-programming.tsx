"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Activity } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { CP_STATS } from "@/data/competitive-programming";

const cardVariant = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

// Deterministic pseudo-random heights for the contribution graph so SSR/CSR match.
const CONTRIBUTION_LEVELS = Array.from({ length: 52 }, (_, i) =>
  Math.abs(Math.sin(i * 12.9898) * 43758.5453) % 1
);

export default function CompetitiveProgramming() {
  return (
    <section id="competitive-programming" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[150px]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <SectionHeading
          eyebrow="Competitive Programming"
          title="Sharpening problem-solving, daily"
          description="Consistently solving algorithmic challenges across platforms to strengthen data structures, algorithms, and analytical thinking."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CP_STATS.map((platform, i) => (
            <motion.a
              key={platform.platform}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -8 }}
              className="glass group relative flex flex-col gap-5 overflow-hidden rounded-2xl p-6 transition-shadow duration-500 hover:shadow-[0_0_60px_-18px_rgba(139,92,246,0.5)]"
            >
              <div
                className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${platform.accent} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-20`}
              />
              <div className="relative flex items-center justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{platform.platform}</h3>
                  <p className="text-xs text-white/40">@{platform.handle}</p>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 group-hover:border-white/30 group-hover:text-white group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </div>

              <div className="relative flex flex-col gap-3">
                {platform.stats.map((stat) => (
                  <div key={stat.label} className="flex items-baseline justify-between border-t border-white/5 pt-3 first:border-0 first:pt-0">
                    <span className="text-xs text-white/45">{stat.label}</span>
                    <span className="font-display text-xl font-semibold text-white">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </span>
                  </div>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass relative overflow-hidden rounded-2xl p-7"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-violet-200">
              <Activity size={18} />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-white">Contribution Activity</h3>
              <p className="text-xs text-white/40">Weekly coding activity across the year</p>
            </div>
          </div>

          <div className="grid grid-flow-col grid-rows-7 gap-1.5 overflow-x-auto pb-2">
            {CONTRIBUTION_LEVELS.map((level, i) => {
              const intensity =
                level > 0.85 ? "bg-cyan-400" : level > 0.65 ? "bg-violet-400/80" : level > 0.4 ? "bg-violet-500/40" : level > 0.18 ? "bg-violet-500/20" : "bg-white/[0.04]";
              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.012, duration: 0.3 }}
                  className={`h-3.5 w-3.5 rounded-[3px] ${intensity}`}
                />
              );
            })}
          </div>
          <div className="mt-4 flex items-center justify-end gap-2 text-[10px] text-white/30">
            <span>Less</span>
            <span className="h-3 w-3 rounded-[3px] bg-white/[0.04]" />
            <span className="h-3 w-3 rounded-[3px] bg-violet-500/20" />
            <span className="h-3 w-3 rounded-[3px] bg-violet-500/40" />
            <span className="h-3 w-3 rounded-[3px] bg-violet-400/80" />
            <span className="h-3 w-3 rounded-[3px] bg-cyan-400" />
            <span>More</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
