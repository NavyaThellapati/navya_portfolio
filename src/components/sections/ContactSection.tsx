import { MapPin, Mail, Send } from "lucide-react";
import { email, location, resumeUrl, socialLinks } from "../../data/portfolioData";
import { AnimatedSection } from "../animations/AnimatedSection";
import { SectionBackground } from "../backgrounds/SectionBackground";
import { ButtonLink } from "../ui/Button";
import { CopyEmailButton } from "../ui/CopyEmailButton";

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="relative overflow-hidden bg-[var(--bg)] py-16">
      <SectionBackground variant="contact" />
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[#F08AB8]/18 blur-3xl" aria-hidden="true" />
      <div className="section-shell relative">
        <div className="relative overflow-hidden rounded-[24px] border border-[#F08AB8]/22 bg-[var(--surface)] px-6 py-9 shadow-[0_0_54px_rgba(217,70,239,0.12)] sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(217,70,239,0.24),transparent_30%),radial-gradient(circle_at_62%_80%,rgba(124,58,237,0.14),transparent_32%)]" aria-hidden="true" />
          <Send className="absolute right-6 top-6 h-16 w-16 rotate-12 text-[#F08AB8]/35 lg:right-10 lg:top-auto" aria-hidden="true" />
          <div className="relative max-w-xl">
          <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-extrabold leading-tight">Let&apos;s build something <span className="text-[#F08AB8]">impactful.</span></h2>
          <p className="mt-4 text-[clamp(1rem,1.45vw,1.1rem)] leading-7 text-[var(--muted)]">
            I’m open to Software Engineer, Backend, Full-Stack, and AI opportunities.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold text-[var(--muted)]">
            <a className="inline-flex items-center gap-2 hover:text-[#FFF9FF]" href={`mailto:${email}`}><Mail className="h-4 w-4" />{email}</a>
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#C4A7FF]" />{location}</span>
          </div>
          </div>
          <div className="relative mt-8 flex flex-wrap gap-3 lg:mt-0 lg:justify-end">
            <ButtonLink href={`mailto:${email}`}>Email Me</ButtonLink>
            {socialLinks.linkedin ? <ButtonLink href={socialLinks.linkedin} target="_blank" rel="noreferrer" variant="secondary">LinkedIn</ButtonLink> : null}
            <ButtonLink href={resumeUrl} download variant="secondary">Download Resume</ButtonLink>
            <CopyEmailButton />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
