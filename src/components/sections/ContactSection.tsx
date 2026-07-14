import { MapPin, Mail } from "lucide-react";
import { email, location, resumeUrl, socialLinks } from "../../data/portfolioData";
import { AnimatedSection } from "../animations/AnimatedSection";
import { SectionBackground } from "../backgrounds/SectionBackground";
import { ButtonLink } from "../ui/Button";
import { CopyEmailButton } from "../ui/CopyEmailButton";

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="relative overflow-hidden bg-[var(--bg)] py-24">
      <SectionBackground variant="contact" />
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[#D39AA8]/18 blur-3xl" aria-hidden="true" />
      <div className="section-shell relative">
        <div className="mx-auto max-w-5xl rounded-[34px] border border-[#FFF9F3]/10 bg-[var(--surface)] px-5 py-14 text-center shadow-2xl shadow-[#130D12]/18 sm:px-10">
          <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-extrabold leading-tight">Open to new opportunities.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            I’m currently exploring Software Engineer, Backend, Full-Stack, and AI Engineer roles.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4 text-sm font-semibold text-[var(--muted)]">
            <a className="inline-flex items-center gap-2 hover:text-[#FFF9F3]" href={`mailto:${email}`}><Mail className="h-4 w-4" />{email}</a>
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#D8BA82]" />{location}</span>
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
