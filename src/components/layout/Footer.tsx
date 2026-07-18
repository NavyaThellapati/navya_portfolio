import { ArrowUp, Mail } from "lucide-react";
import { email, socialLinks } from "../../data/portfolioData";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-transparent py-8">
      <div className="section-shell flex flex-col gap-5 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-[var(--text)]">Navya Thellapati</p>
          <p>Software Engineer</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a className="inline-flex items-center gap-2 hover:text-[#C4A7FF]" href={`mailto:${email}`}>
            <Mail className="h-4 w-4" />
            Email
          </a>
          {socialLinks.linkedin ? <a className="hover:text-[#C4A7FF]" href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> : null}
          <button
            type="button"
            className="inline-flex items-center gap-2 hover:text-[#C4A7FF]"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp className="h-4 w-4" />
            Back to Top
          </button>
        </div>
        <p>© {new Date().getFullYear()} Navya Thellapati.</p>
      </div>
    </footer>
  );
}
