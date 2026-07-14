import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { resumeUrl, socialLinks } from "../../data/portfolioData";
import { ThemeToggle } from "../ui/ThemeToggle";

const navItems = [
  { label: "About", id: "about" },
  { label: "Projects", id: "work" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "expertise" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

const scrollToSection = (id: string, attempt = 0) => {
  window.requestAnimationFrame(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (attempt < 8) {
      window.setTimeout(() => scrollToSection(id, attempt + 1), 80);
    }
  });
};

export function FloatingNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const current = navItems
        .map((item) => item.id)
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
    if (location.pathname !== "/" || !location.hash) return;
    const id = location.hash.replace("#", "");
    scrollToSection(id);
  }, [location.hash, location.pathname]);

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

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    setOpen(false);

    if (location.pathname !== "/") {
      window.sessionStorage.setItem("pendingPortfolioSection", id);
      navigate({ pathname: "/", hash: `#${id}` });
      return;
    }

    window.history.replaceState(null, "", `#${id}`);
    scrollToSection(id);
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Primary navigation"
        className={`mx-auto flex max-w-[1180px] items-center justify-between rounded-full border px-4 transition-all duration-300 ${
          scrolled
            ? "h-16 border-[var(--line)] bg-[var(--surface)] shadow-2xl shadow-[#090611]/20 backdrop-blur-2xl"
            : "h-18 border-transparent bg-transparent"
        }`}
      >
        <Link to="/#home" className="flex items-center gap-3" aria-label="Navya Thellapati home">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-[#F08AB8]/70 bg-[#090611]/80 font-display text-sm font-bold text-[#FFF9FF] shadow-[0_0_24px_rgba(217,70,239,0.42)]">NT</span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-bold text-[#F08AB8]">Navya</span>
            <span className="block text-sm font-bold text-[#FFF9FF]">Thellapati</span>
          </span>
        </Link>
        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => {
            return (
              <a
                key={item.label}
                href={`#${item.id}`}
                onClick={(event) => handleNavClick(event, item.id)}
                className={`relative rounded-full px-3 py-2 text-sm font-semibold transition ${
                  active === item.id && location.pathname === "/"
                    ? "text-[#FFF9FF] after:absolute after:inset-x-4 after:-bottom-1 after:h-px after:bg-[#F08AB8] after:shadow-[0_0_10px_rgba(217,70,239,0.9)]"
                    : scrolled
                      ? "text-[var(--muted)] hover:text-[var(--text)]"
                      : "text-[#FFF9FF]/72 hover:text-[#FFF9FF]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          {socialLinks.linkedin ? (
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-transparent text-[#FFF9FF] transition hover:border-[#F08AB8]/40 hover:bg-[#130A20] hover:text-[#F08AB8]">
              <span className="text-xs font-black">in</span>
            </a>
          ) : null}
          <ThemeToggle />
          <a
            href={resumeUrl}
            download
            className="rounded-full bg-gradient-to-r from-[#D946EF] to-[#F08AB8] px-4 py-2 text-sm font-bold text-[#FFF9FF] shadow-lg shadow-[#D946EF]/25 transition hover:-translate-y-0.5 hover:brightness-110"
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
              <span className="grid h-12 w-12 place-items-center rounded-full border border-[#F08AB8]/70 bg-[#090611] font-display font-bold text-[#FFF9FF]">NT</span>
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
                  <a
                    href={`#${item.id}`}
                    onClick={(event) => handleNavClick(event, item.id)}
                    className="font-display text-3xl font-bold text-[var(--text)]"
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
            </div>
            <div className="absolute inset-x-5 bottom-8 grid gap-5">
              <div className="flex items-center justify-between">
                <ThemeToggle />
                {socialLinks.linkedin ? (
                  <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-12 w-12 place-items-center rounded-full border border-[var(--line)] text-[#FFF9FF]">
                    <span className="text-sm font-black">in</span>
                  </a>
                ) : null}
              </div>
              <a
                href={resumeUrl}
                download
                className="rounded-full bg-gradient-to-r from-[#D946EF] to-[#F08AB8] px-5 py-4 text-center text-sm font-bold text-[#FFF9FF]"
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
