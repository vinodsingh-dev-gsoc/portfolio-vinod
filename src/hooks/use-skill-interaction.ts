"use client";

import { useEffect } from "react";
import { SkillNames } from "@/data/skills";

export const SKILL_HOVER_EVENT = "skill-hover-event";
export const SKILL_CLICK_EVENT = "skill-click-event";

export const triggerSkillHover = (skillName: string | null) => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent(SKILL_HOVER_EVENT, { detail: { skillName } })
    );
  }
};

export const triggerSkillClick = (skillName: string) => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent(SKILL_CLICK_EVENT, { detail: { skillName } })
    );
  }
};

export const useSkillInteraction = ({
  onSkillHover,
  onSkillClick,
}: {
  onSkillHover?: (skillName: string | null) => void;
  onSkillClick?: (skillName: string) => void;
}) => {
  useEffect(() => {
    const hoverHandler = (e: Event) => {
      const customEvent = e as CustomEvent<{ skillName: string | null }>;
      onSkillHover?.(customEvent.detail.skillName);
    };

    const clickHandler = (e: Event) => {
      const customEvent = e as CustomEvent<{ skillName: string }>;
      onSkillClick?.(customEvent.detail.skillName);
    };

    if (onSkillHover) window.addEventListener(SKILL_HOVER_EVENT, hoverHandler);
    if (onSkillClick) window.addEventListener(SKILL_CLICK_EVENT, clickHandler);

    return () => {
      if (onSkillHover) window.removeEventListener(SKILL_HOVER_EVENT, hoverHandler);
      if (onSkillClick) window.removeEventListener(SKILL_CLICK_EVENT, clickHandler);
    };
  }, [onSkillHover, onSkillClick]);
};
