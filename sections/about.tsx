"use client";

import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ABOUT } from "@/data/about";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <SectionHeading
          eyebrow="About Me"
          title="The person behind the code"
          description="A glimpse into my academic journey, what drives me, and the kind of engineer I'm becoming."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left: profile / education card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="glass border-gradient relative overflow-hidden rounded-3xl p-8 lg:col-span-2"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-violet-500/20 blur-[100px]" />
            <div className="relative flex flex-col gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-violet-200">
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold text-white">{ABOUT.role}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  Pursuing a Bachelor of Technology in Computer Science &amp; Engineering, building a strong foundation in algorithms, systems, and modern software engineering.
                </p>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">Current CGPA</p>
                  <p className="font-display mt-1 text-4xl font-bold text-gradient-animate">{ABOUT.cgpa}</p>
                </div>
                <div className="h-12 w-px bg-white/10" />
                <p className="text-sm text-white/50">Maintaining strong academic performance while building real-world projects in parallel.</p>
              </div>

              <p className="text-sm leading-relaxed text-white/60">{ABOUT.summary}</p>
            </div>
          </motion.div>

          {/* Right: passions grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
            {ABOUT.passions.map((p, i) => (
              <motion.div
                key={p.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -6 }}
                className="glass group relative overflow-hidden rounded-2xl p-6 transition-shadow duration-300 hover:shadow-[0_0_50px_-16px_rgba(139,92,246,0.55)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/0 via-transparent to-cyan-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-violet-500/[0.06] group-hover:to-cyan-400/[0.06]" />
                <div className="relative flex flex-col gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-violet-200 transition-transform duration-300 group-hover:scale-110 group-hover:text-cyan-200">
                    <Sparkles size={18} />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-white">{p.label}</h4>
                  <p className="text-sm leading-relaxed text-white/55">{p.description}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              custom={ABOUT.passions.length}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="glass relative col-span-full flex flex-col gap-2 overflow-hidden rounded-2xl border-gradient p-6"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-violet-300">Mission</p>
              <p className="text-base leading-relaxed text-white/70">
                I aim to build software that&apos;s not just functional, but scalable, resilient, and delightful to use — bridging the gap between solid engineering fundamentals and applied AI.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
