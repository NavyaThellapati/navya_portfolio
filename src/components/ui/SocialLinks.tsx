import { Mail } from "lucide-react";
import { email, socialLinks } from "../../data/portfolioData";

export function SocialLinks({ large = false }: { large?: boolean }) {
  const base =
    "grid place-items-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] transition hover:-translate-y-1 hover:border-[#C4A7FF]/70 hover:text-[#C4A7FF]";
  const size = large ? "h-12 w-12" : "h-10 w-10";

  return (
    <div className="flex items-center gap-3">
      {socialLinks.linkedin ? (
        <a className={`${base} ${size}`} href={socialLinks.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
          <span className="text-xs font-black">in</span>
        </a>
      ) : null}
      <a className={`${base} ${size}`} href={`mailto:${email}`} aria-label="Email Navya">
        <Mail className="h-5 w-5" />
      </a>
    </div>
  );
}
