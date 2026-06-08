"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SOCIAL_LINKS } from "@/data/links";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => !!el
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[80] transition-all duration-500",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <motion.button
          onClick={() => handleNavClick("#home")}
          className={cn(
            "flex items-center rounded-full px-4 py-2 font-display text-lg font-semibold tracking-tight transition-all duration-500",
            scrolled
              ? "border border-white/10 bg-[#0b0b14]/85 shadow-lg shadow-black/30 backdrop-blur-xl"
              : "bg-transparent"
          )}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="text-gradient-animate">Anuj</span>
          <span className="text-white">.dev</span>
        </motion.button>

        <nav
          className={cn(
            "hidden items-center gap-1 rounded-full px-2 py-2 transition-all duration-500 lg:flex",
            scrolled
              ? "border border-white/10 bg-[#0b0b14]/85 shadow-lg shadow-black/30 backdrop-blur-xl"
              : "bg-white/[0.02] border border-white/5 backdrop-blur-md"
          )}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                active === link.href ? "text-white" : "text-white/50 hover:text-white"
              )}
            >
              {active === link.href && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/30 to-cyan-400/20"
                  transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button size="sm" variant="outline" onClick={() => handleNavClick("#contact")}>
            Let&apos;s Talk
          </Button>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full text-white transition-all duration-500 lg:hidden",
            scrolled || open
              ? "border border-white/10 bg-[#0b0b14]/85 shadow-lg shadow-black/30 backdrop-blur-xl"
              : "glass"
          )}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-6 mt-3 flex flex-col gap-1 rounded-2xl border border-white/10 bg-[#0b0b14]/95 p-3 shadow-2xl shadow-black/60 backdrop-blur-xl lg:hidden"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors",
                  active === link.href ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"
                )}
              >
                {link.label}
              </button>
            ))}
            <a
              href={SOCIAL_LINKS.resume}
              className="mt-1 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
