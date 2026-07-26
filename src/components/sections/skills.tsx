"use client";

import { useState, type CSSProperties } from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { UNIQUE_SKILLS } from "@/data/constants";
import { usePerfProfile } from "@/hooks/use-perf-profile";
import { cn } from "@/lib/utils";
import { triggerSkillHover, triggerSkillClick } from "@/hooks/use-skill-interaction";

const FILTER_OPTIONS = [
  "All",
  "Expert",
  "Advanced",
  "Proficient",
  "Frontend & Mobile",
  "Backend & Cloud",
  "Core & Architecture",
  "Tools & DevOps",
];

/**
 * Tech-stack section.
 *
 * On capable devices the skills live in the interactive 3D keyboard's keycaps,
 * so this is just a header and the section is tall (the keyboard scrubs through
 * it on scroll). When the 3D scene is disabled (low-end / reduced-motion), the
 * keyboard isn't there to convey the skills — so we render them as a real HTML
 * grid instead. Progressive enhancement: the content survives without WebGL.
 */
const SkillsSection = () => {
  const { disable3D, ready } = usePerfProfile();
  const showGrid = ready && disable3D;
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredSkills = UNIQUE_SKILLS.filter((skill) => {
    if (activeFilter === "All") return true;
    return skill.proficiency === activeFilter || skill.category === activeFilter;
  });

  if (showGrid) {
    return (
      <SectionWrapper
        id="skills"
        className="flex flex-col items-center justify-center min-h-[100dvh] py-24"
      >
        <SectionHeader
          id="skills"
          title="Tech Stack"
          desc="Tools & technologies sorted by mastery"
          className="static mb-8"
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl px-4">
          {FILTER_OPTIONS.map((opt) => (
            <button
              key={opt}
              onClick={() => setActiveFilter(opt)}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 border",
                activeFilter === opt
                  ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20 scale-105"
                  : "bg-secondary/40 text-muted-foreground border-border/50 hover:bg-secondary/70 hover:text-foreground"
              )}
            >
              {opt}
            </button>
          ))}
        </div>

        <ul className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-3 px-4 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
          {filteredSkills.map((skill) => (
            <li
              key={skill.name}
              onMouseEnter={() => triggerSkillHover(skill.name)}
              onMouseLeave={() => triggerSkillHover(null)}
              onClick={() => triggerSkillClick(skill.name)}
              style={{ "--skill": skill.color } as CSSProperties}
              className={cn(
                "pointer-events-auto cursor-pointer",
                "group relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl p-4",
                "border border-border/60 bg-secondary/20 backdrop-blur-sm",
                "transition-[transform,border-color,background-color,box-shadow] duration-300",
                "hover:-translate-y-1 hover:border-[var(--skill)] hover:bg-secondary/40",
                "hover:shadow-[0_10px_40px_-12px_var(--skill)]"
              )}
            >
              <span
                aria-hidden
                style={{ background: "var(--skill)" }}
                className="pointer-events-none absolute -top-6 h-16 w-16 rounded-full opacity-25 blur-2xl transition-opacity duration-300 group-hover:opacity-70"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={skill.icon}
                alt={skill.label}
                width={40}
                height={40}
                loading="lazy"
                className="relative size-8 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110 md:size-10"
              />
              <span className="relative text-center text-xs font-semibold text-foreground/90 transition-colors group-hover:text-foreground md:text-sm">
                {skill.label}
              </span>
              {skill.proficiency && (
                <div className="flex items-center gap-1 mt-0.5">
                  <span
                    className={cn(
                      "text-[9px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-full border",
                      skill.proficiency === "Expert"
                        ? "bg-amber-500/15 text-amber-500 border-amber-500/30 dark:text-amber-400"
                        : skill.proficiency === "Advanced"
                        ? "bg-blue-500/15 text-blue-500 border-blue-500/30 dark:text-blue-400"
                        : "bg-purple-500/15 text-purple-500 border-purple-500/30 dark:text-purple-400"
                    )}
                  >
                    {skill.proficiency}
                  </span>
                  {skill.level && (
                    <span className="text-[10px] font-mono font-bold text-muted-foreground/80">
                      {skill.level}%
                    </span>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper
      id="skills"
      className="w-full h-screen md:h-[150dvh] pointer-events-none flex flex-col items-center justify-start pt-24"
    >
      <SectionHeader
        id="skills"
        title="Tech Stack"
        desc="(hint: press a key or hover any skill tag below)"
      />

      {/* Filter Tabs in 3D Mode */}
      <div className="pointer-events-auto mt-4 flex flex-wrap items-center justify-center gap-1.5 max-w-4xl mx-auto px-4 z-20">
        {FILTER_OPTIONS.map((opt) => (
          <button
            key={opt}
            onClick={() => setActiveFilter(opt)}
            className={cn(
              "px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 border cursor-pointer backdrop-blur-md",
              activeFilter === opt
                ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25 scale-105"
                : "bg-secondary/60 dark:bg-black/40 text-muted-foreground border-border/60 hover:bg-secondary hover:text-foreground"
            )}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="pointer-events-auto mt-5 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto px-6 z-20">
        {filteredSkills.map((skill) => (
          <button
            key={skill.name}
            onMouseEnter={() => triggerSkillHover(skill.name)}
            onMouseLeave={() => triggerSkillHover(null)}
            onClick={() => triggerSkillClick(skill.name)}
            style={{ "--skill-color": skill.color } as CSSProperties}
            className="group flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-secondary/70 dark:bg-black/50 hover:bg-primary/20 hover:border-[var(--skill-color)] border border-border/60 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_20px_-4px_var(--skill-color)] shadow-sm cursor-pointer"
          >
            <img
              src={skill.icon}
              alt={skill.label}
              className="w-4 h-4 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-foreground/90 font-semibold">{skill.label}</span>
            {skill.proficiency && (
              <span
                className={cn(
                  "text-[9px] font-extrabold uppercase tracking-wide px-1.5 py-0.5 rounded-full border transition-colors duration-300",
                  skill.proficiency === "Expert"
                    ? "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30 group-hover:bg-amber-500/25"
                    : skill.proficiency === "Advanced"
                    ? "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30 group-hover:bg-blue-500/25"
                    : "bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30 group-hover:bg-purple-500/25"
                )}
              >
                {skill.proficiency} {skill.level ? `• ${skill.level}%` : ""}
              </span>
            )}
          </button>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
