import { MapPin, Mail } from "lucide-react";
import { email, location, resumeUrl, socialLinks } from "../../data/portfolioData";
import { AnimatedSection } from "../animations/AnimatedSection";
import { SectionBackground } from "../backgrounds/SectionBackground";
import { ButtonLink } from "../ui/Button";
import { CopyEmailButton } from "../ui/CopyEmailButton";

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="dark-surface luxury-gradient animated-gradient relative overflow-hidden bg-[var(--bg)] py-28">
      <SectionBackground variant="contact" />
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[#C58E9D]/18 blur-3xl" aria-hidden="true" />
      <div className="section-shell relative">
        <div className="mx-auto max-w-5xl border-y border-white/10 py-16 text-center">
          <h2 className="font-display text-5xl font-extrabold leading-tight sm:text-7xl">Let’s create something useful.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            I’m open to Software Engineer, Backend, Full-Stack, and AI opportunities.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4 text-sm font-semibold text-[var(--muted)]">
            <a className="inline-flex items-center gap-2 hover:text-white" href={`mailto:${email}`}><Mail className="h-4 w-4" />{email}</a>
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-slate-300" />{location}</span>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CopyEmailButton />
            <ButtonLink href={`mailto:${email}`}>Email Me</ButtonLink>
            {socialLinks.linkedin ? <ButtonLink href={socialLinks.linkedin} target="_blank" rel="noreferrer" variant="secondary">LinkedIn</ButtonLink> : null}
            {socialLinks.github ? <ButtonLink href={socialLinks.github} target="_blank" rel="noreferrer" variant="secondary">GitHub</ButtonLink> : null}
            <ButtonLink href={resumeUrl} download variant="secondary">Download Resume</ButtonLink>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
