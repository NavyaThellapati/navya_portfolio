import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { resumeUrl } from "../../data/portfolioData";
import { ThemeToggle } from "../ui/ThemeToggle";
import { SocialLinks } from "../ui/SocialLinks";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Expertise", href: "/#expertise" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function FloatingNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const current = navItems
        .map((item) => item.href.split("#")[1])
        .filter(Boolean)
        .findLast((id) => {
          const element = document.getElementById(id);
          return element ? element.getBoundingClientRect().top <= 140 : false;
        });
      if (current) setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Primary navigation"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 transition-all duration-300 ${
          scrolled
            ? "h-16 border-[var(--line)] bg-[var(--surface)] shadow-2xl shadow-[#17151C]/20 backdrop-blur-2xl"
            : "h-18 border-transparent bg-transparent"
        }`}
      >
        <Link
          to="/#home"
          className="grid h-11 w-11 place-items-center rounded-full bg-[var(--text)] font-display text-sm font-bold text-[var(--bg)]"
          aria-label="Navya Thellapati home"
        >
          NT
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const id = item.href.split("#")[1];
            return (
              <Link
                key={item.label}
                to={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active === id && location.pathname === "/"
                    ? "bg-[#6E426F]/18 text-[#F6D8DF]"
                    : scrolled
                      ? "text-[var(--muted)] hover:text-[var(--text)]"
                      : "text-white/72 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href={resumeUrl}
            download
            className="rounded-full bg-gradient-to-r from-[#6E426F] to-[#8A4F62] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-[#6E426F]/25 transition hover:-translate-y-0.5 hover:brightness-110"
          >
            Resume
          </a>
        </div>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-[var(--line)] bg-[var(--surface)] lg:hidden"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 bg-[var(--bg)]/96 p-5 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--text)] font-display font-bold text-[var(--bg)]">NT</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-12 w-12 place-items-center rounded-full border border-[var(--line)]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-12 grid gap-5">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl font-bold text-[var(--text)]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="absolute inset-x-5 bottom-8 grid gap-5">
              <div className="flex items-center justify-between">
                <ThemeToggle />
                <SocialLinks large />
              </div>
              <a
                href={resumeUrl}
                download
                className="rounded-full bg-gradient-to-r from-[#6E426F] to-[#8A4F62] px-5 py-4 text-center text-sm font-bold text-white"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
