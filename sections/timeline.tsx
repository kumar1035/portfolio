"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { TIMELINE } from "@/data/timeline";

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />
      <div className="mx-auto flex max-w-4xl flex-col gap-16 px-6">
        <SectionHeading
          eyebrow="Journey"
          title="My path so far"
          description="A timeline of milestones — from starting my B.Tech to building real-world software and exploring AI engineering."
        />

        <div className="relative">
          {/* central line */}
          <div className="absolute left-[27px] top-0 h-full w-px bg-white/10 sm:left-1/2 sm:-translate-x-1/2" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[27px] top-0 h-full w-px bg-gradient-to-b from-violet-400 via-fuchsia-400 to-cyan-400 sm:left-1/2 sm:-translate-x-1/2"
          />

          <div className="flex flex-col gap-12">
            {TIMELINE.map((entry, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={entry.year}
                  className={`relative flex flex-col gap-6 sm:flex-row sm:items-center ${
                    isEven ? "" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* node */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 top-1 z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-[#0a0a14] sm:left-1/2 sm:-translate-x-1/2"
                  >
                    <span className="font-display text-sm font-bold text-gradient-animate">{entry.year}</span>
                    <span className="absolute inset-0 -z-10 animate-pulse-glow rounded-2xl bg-violet-500/20 blur-xl" />
                  </motion.div>

                  {/* spacer for alignment on desktop */}
                  <div className="hidden flex-1 sm:block" />

                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40, y: 16 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -4 }}
                    className={`glass ml-20 flex-1 rounded-2xl p-6 transition-shadow duration-300 hover:shadow-[0_0_50px_-18px_rgba(139,92,246,0.5)] sm:ml-0 ${
                      isEven ? "sm:mr-[calc(50%+2rem)]" : "sm:ml-[calc(50%+2rem)]"
                    }`}
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-violet-300">{entry.year}</p>
                    <h3 className="font-display mt-2 text-xl font-semibold text-white">{entry.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">{entry.description}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
