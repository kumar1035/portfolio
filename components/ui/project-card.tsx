"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import { GithubIcon } from "@/components/ui/brand-icons";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

const CATEGORY_STYLES: Record<string, string> = {
  WEB: "from-cyan-400 to-blue-500",
  "AI/ML": "from-violet-400 to-fuchsia-500",
  JAVA: "from-orange-400 to-amber-500",
  PYTHON: "from-emerald-400 to-teal-500",
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(project.previewImage) && !imageFailed;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [9, -9]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-9, 9]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
      className="group"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="glass border-gradient relative flex h-full flex-col overflow-hidden rounded-3xl transition-shadow duration-500 hover:shadow-[0_30px_80px_-24px_rgba(139,92,246,0.5)]"
      >
        {/* Preview image */}
        <div className="relative h-52 overflow-hidden border-b border-white/5">
          {showImage ? (
            <>
              <Image
                src={project.previewImage!}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                onError={() => setImageFailed(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080f] via-[#08080f]/10 to-transparent" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/25 via-fuchsia-600/10 to-cyan-500/25" />
              <div className="absolute inset-0 bg-grid opacity-[0.18]" />
              <motion.div
                style={{ transform: "translateZ(40px)" }}
                className="relative flex h-full flex-col items-center justify-center gap-2 text-white/50"
              >
                <Code size={36} className="opacity-60 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-90" />
                <span className="text-xs uppercase tracking-[0.3em]">Project Preview</span>
              </motion.div>
            </>
          )}
          <div className="absolute right-4 top-4 flex flex-wrap gap-2">
            {project.categories.map((cat) => (
              <span
                key={cat}
                className={`rounded-full bg-gradient-to-r ${CATEGORY_STYLES[cat]} px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-black/80 shadow-lg`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div style={{ transform: "translateZ(30px)" }} className="flex flex-1 flex-col gap-4 p-7">
          <h3 className="font-display text-xl font-semibold text-white transition-colors group-hover:text-gradient-animate">
            {project.title}
          </h3>

          <p className={`text-sm leading-relaxed text-white/55 ${expanded ? "" : "line-clamp-3"}`}>
            {project.description}
          </p>

          {project.description.length > 140 && (
            <button
              onClick={() => setExpanded((e) => !e)}
              className="-mt-2 self-start text-xs font-medium text-violet-300 transition-colors hover:text-cyan-300"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="default" className="text-[11px]">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-3 pt-2">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-white/70 transition-colors hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
              >
                <GithubIcon size={16} /> GitHub
              </a>
            ) : (
              <button
                type="button"
                disabled
                title="Link coming soon"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-white/50 transition-colors disabled:cursor-not-allowed"
              >
                <GithubIcon size={16} /> GitHub
              </button>
            )}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500/30 to-cyan-400/30 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-white/10 transition-colors hover:from-violet-500/50 hover:to-cyan-400/50"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            ) : (
              <button
                type="button"
                disabled
                title="Coming soon"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-400/20 px-4 py-2.5 text-sm font-medium text-white/60 ring-1 ring-white/10 disabled:cursor-not-allowed"
              >
                <ExternalLink size={16} /> Live Demo
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
