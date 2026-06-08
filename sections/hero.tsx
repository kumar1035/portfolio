"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail, FileText, Code2, GraduationCap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { Button } from "@/components/ui/button";
import { ParticleField } from "@/components/ui/particle-field";
import { SOCIAL_LINKS } from "@/data/links";

const NAME = "Anuj _Kumar";
const SUBTITLE = "Building Scalable Systems, AI Applications, and Real-Time Products";

const TYPING_SPEED = 90;
const DELETING_SPEED = 50;
const HOLD_DURATION = 1800;
const RESTART_DELAY = 500;

function TypewriterName({ text, splitAt }: { text: string; splitAt: number }) {
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && length < text.length) {
      timeout = setTimeout(() => setLength((l) => l + 1), TYPING_SPEED);
    } else if (!deleting && length === text.length) {
      timeout = setTimeout(() => setDeleting(true), HOLD_DURATION);
    } else if (deleting && length > 0) {
      timeout = setTimeout(() => setLength((l) => l - 1), DELETING_SPEED);
    } else {
      timeout = setTimeout(() => setDeleting(false), RESTART_DELAY);
    }

    return () => clearTimeout(timeout);
  }, [length, deleting, text]);

  const shown = text.slice(0, length);
  const first = shown.slice(0, Math.min(shown.length, splitAt));
  const second = shown.slice(splitAt);

  return (
    <h1 className="font-display flex flex-wrap items-center justify-center gap-x-4 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:justify-start lg:text-7xl xl:text-8xl">
      <span className="inline-flex">
        <span className="text-white">{first}</span>
        <span className="text-gradient-animate">{second}</span>
        <motion.span
          aria-hidden
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1], ease: "linear" }}
          className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.08em] rounded-full bg-gradient-to-b from-violet-400 to-cyan-400"
        />
      </span>
    </h1>
  );
}

const SOCIALS = [
  { label: "GitHub", href: SOCIAL_LINKS.github, icon: GithubIcon },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, icon: LinkedinIcon },
  { label: "LeetCode", href: SOCIAL_LINKS.leetcode, icon: Code2 },
];

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-28 pb-20"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-[0.35]" />
      <ParticleField className="absolute inset-0 h-full w-full opacity-70" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[140px]" />
      <div className="animate-pulse-glow pointer-events-none absolute right-[8%] top-[18%] h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px]" />
      <div className="animate-pulse-glow pointer-events-none absolute bottom-[8%] left-[10%] h-72 w-72 rounded-full bg-fuchsia-500/15 blur-[120px] [animation-delay:1.5s]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/70"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to Software Engineering &amp; AI internships
          </motion.span>

          <TypewriterName text={NAME} splitAt={NAME.indexOf(" ") + 1} />

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-balance text-lg text-white/60 sm:text-xl"
          >
            {SUBTITLE}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <Button size="lg" onClick={() => scrollTo("#projects")}>
              View Projects <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("#contact")}>
              <Mail size={18} /> Contact Me
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href={SOCIAL_LINKS.resume} target="_blank" rel="noopener noreferrer">
                <FileText size={18} /> Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.35 }}
            className="flex items-center gap-3 pt-2"
          >
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="glass group flex h-11 w-11 items-center justify-center rounded-full text-white/60 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-[0_0_28px_-6px_rgba(139,92,246,0.8)]"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex justify-center lg:justify-end"
        >
          <div className="animate-pulse-glow pointer-events-none absolute -inset-8 rounded-[2.75rem] bg-gradient-to-br from-violet-600/30 via-fuchsia-500/15 to-cyan-400/30 blur-3xl" />

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="border-gradient glass relative h-72 w-72 overflow-hidden rounded-[2rem] sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem]">
              <Image
                src="/images/profile.jpeg"
                alt="Anuj Kumar"
                fill
                priority
                sizes="(max-width: 1024px) 320px, 352px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080f]/50 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="glass absolute -bottom-5 -left-5 flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-2xl shadow-black/40"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-400/30 text-white">
                <GraduationCap size={18} />
              </span>
              <span className="text-left text-xs leading-tight text-white/70">
                <span className="block font-semibold text-white">NIT Jamshedpur</span>
                B.Tech CSE
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="glass absolute -top-5 -right-5 flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-medium text-white/70 shadow-2xl shadow-black/40"
            >
              <Code2 size={15} className="text-cyan-300" />
              Full-Stack &amp; AI Engineer
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/15 p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-gradient-to-b from-violet-400 to-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
