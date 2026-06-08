"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "@/components/ui/project-card";
import { PROJECTS, PROJECT_FILTERS, type ProjectCategory } from "@/data/projects";

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("ALL");

  const filtered = useMemo(() => {
    if (filter === "ALL") return PROJECTS;
    return PROJECTS.filter((p) => p.categories.includes(filter as Exclude<ProjectCategory, "ALL">));
  }, [filter]);

  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-[150px]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects that push boundaries"
          description="A selection of full-stack, AI-powered, and systems projects — built end to end with modern, production-grade tooling."
        />

        <Tabs
          value={filter}
          onValueChange={(v) => setFilter(v as ProjectCategory)}
          className="flex flex-col items-center gap-10"
        >
          <TabsList>
            {PROJECT_FILTERS.map((f) => (
              <TabsTrigger key={f} value={f} className="relative">
                {filter === f && (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                    transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
                  />
                )}
                <span className="relative z-10">{f}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <motion.div layout className="grid w-full gap-7 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-white/40">No projects in this category yet.</p>
          )}
        </Tabs>
      </div>
    </section>
  );
}
