import { Code2, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { SOCIAL_LINKS } from "@/data/links";

const FOOTER_LINKS = [
  { label: "GitHub", href: SOCIAL_LINKS.github, icon: GithubIcon },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, icon: LinkedinIcon },
  { label: "LeetCode", href: SOCIAL_LINKS.leetcode, icon: Code2 },
  { label: "Email", href: `mailto:${SOCIAL_LINKS.email}`, icon: Mail },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#05050a]">
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-[0.06]" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-lg font-semibold text-white">
            <span className="text-gradient-animate">Anuj Kumar</span>
          </p>
          <p className="mt-1 text-sm text-white/40">
            Building Scalable Systems, AI Applications, and Real-Time Products.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {FOOTER_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-white/60 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-[0_0_24px_-6px_rgba(139,92,246,0.7)]"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
      <div className="relative border-t border-white/5 py-5 text-center text-xs text-white/30">
        © {new Date().getFullYear()} Anuj Kumar. All rights reserved.
      </div>
    </footer>
  );
}
