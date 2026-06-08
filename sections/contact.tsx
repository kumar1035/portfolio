"use client";

import { motion } from "framer-motion";
import { Mail, Code2, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/data/links";

const CHANNELS = [
  {
    label: "Email",
    value: SOCIAL_LINKS.email,
    href: `mailto:${SOCIAL_LINKS.email}`,
    icon: Mail,
    accent: "from-violet-400 to-fuchsia-400",
  },
  {
    label: "LinkedIn",
    value: "anuj-kumar",
    href: SOCIAL_LINKS.linkedin,
    icon: LinkedinIcon,
    accent: "from-blue-400 to-cyan-400",
  },
  {
    label: "GitHub",
    value: "kumar1035",
    href: SOCIAL_LINKS.github,
    icon: GithubIcon,
    accent: "from-fuchsia-400 to-violet-400",
  },
  {
    label: "LeetCode",
    value: "anujkumar1035",
    href: SOCIAL_LINKS.leetcode,
    icon: Code2,
    accent: "from-amber-400 to-orange-400",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[160px]" />
      <div className="mx-auto flex max-w-5xl flex-col gap-14 px-6">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something great together"
          description="Whether it's an opportunity, a collaboration, or just a tech conversation — my inbox is always open."
        />

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass border-gradient relative overflow-hidden rounded-3xl p-8 sm:p-12"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-[120px]" />

          <div className="relative flex flex-col items-center gap-4 text-center">
            <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Have a project in mind, or just want to say hi?
            </h3>
            <p className="max-w-xl text-sm text-white/55 sm:text-base">
              Drop a message at{" "}
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="font-medium text-gradient-animate">
                {SOCIAL_LINKS.email}
              </a>{" "}
              — I usually respond within a day.
            </p>
            <Button size="lg" asChild>
              <a href={`mailto:${SOCIAL_LINKS.email}`}>
                <Mail size={18} /> Say Hello
              </a>
            </Button>
          </div>

          <div className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CHANNELS.map((channel, i) => (
              <motion.a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${channel.accent} text-white shadow-lg`}
                  >
                    <channel.icon size={19} className="text-white" />
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">{channel.label}</p>
                  <p className="mt-1 truncate font-display text-sm font-medium text-white sm:text-base">
                    {channel.value}
                  </p>
                </div>
                <div
                  className={`absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r ${channel.accent} transition-transform duration-500 group-hover:scale-x-100`}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
