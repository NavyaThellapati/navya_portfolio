import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageTransition } from "../components/animations/PageTransition";
import { AboutSection } from "../components/sections/AboutSection";
import { ContactSection } from "../components/sections/ContactSection";
import { EducationSection } from "../components/sections/EducationSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { HeroSection } from "../components/sections/HeroSection";
import { ImpactMetrics } from "../components/sections/ImpactMetrics";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { SkillsSection } from "../components/sections/SkillsSection";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const pendingSection = window.sessionStorage.getItem("pendingPortfolioSection");
    if (pendingSection) window.sessionStorage.removeItem("pendingPortfolioSection");

    const id = pendingSection || location.hash.replace("#", "");
    if (!id) return;

    const scroll = () => {
      const element = document.getElementById(id);
      if (element) window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    };
    const timers = [120, 520, 940].map((delay) => window.setTimeout(scroll, delay));

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [location.hash]);

  return (
    <PageTransition>
      <HeroSection />
      <ImpactMetrics />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </PageTransition>
  );
}
