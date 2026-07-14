import type { LucideIcon } from "lucide-react";

export type ThemeName = "light" | "dark";

export type ProjectSlug = "documind" | "mychart" | "responsible-ai";

export interface Metric {
  value: number;
  suffix: string;
  label: string;
}

export interface FocusArea {
  title: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
}

export interface Project {
  slug: ProjectSlug;
  title: string;
  shortTitle: string;
  description: string;
  technologies: string[];
  highlights: string[];
  metrics: string[];
  problem: string;
  solution: string;
  features: string[];
  workflow: string[];
  challenges: string[];
  results: string[];
  lessons: string[];
  future: string[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
  icon: LucideIcon;
  size?: "wide" | "tall";
}

export interface Certification {
  title: string;
  issuer: string;
  icon: LucideIcon;
}
