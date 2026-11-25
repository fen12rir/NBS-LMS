"use client";

export interface LmsUserProgress {
  completedChaptersByCourse: Record<string, string[]>;
  lastActiveChapterByCourse: Record<string, string>;
  bestQuizScoreByCourse: Record<string, number>;
}

const STORAGE_KEY = "nbs_lms_progress_v1";

const DEFAULT_PROGRESS: LmsUserProgress = {
  completedChaptersByCourse: {
    "cybersecurity-awareness": [],
  },
  lastActiveChapterByCourse: {
    "cybersecurity-awareness": "ch-01-pillars-and-assets",
  },
  bestQuizScoreByCourse: {},
};

export function getLmsProgress(): LmsUserProgress {
  if (typeof window === "undefined") return DEFAULT_PROGRESS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw) as Partial<LmsUserProgress>;
    return {
      completedChaptersByCourse:
        parsed.completedChaptersByCourse ||
        DEFAULT_PROGRESS.completedChaptersByCourse,
      lastActiveChapterByCourse:
        parsed.lastActiveChapterByCourse ||
        DEFAULT_PROGRESS.lastActiveChapterByCourse,
      bestQuizScoreByCourse: parsed.bestQuizScoreByCourse || {},
    };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export function markChapterCompleted(
  courseSlug: string,
  chapterId: string,
  nextChapterId?: string
): LmsUserProgress {
  const current = getLmsProgress();
  const existing = current.completedChaptersByCourse[courseSlug] || [];
  const updatedList = existing.includes(chapterId)
    ? existing
    : [...existing, chapterId];

  const nextState: LmsUserProgress = {
    ...current,
    completedChaptersByCourse: {
      ...current.completedChaptersByCourse,
      [courseSlug]: updatedList,
    },
    lastActiveChapterByCourse: {
      ...current.lastActiveChapterByCourse,
      [courseSlug]: nextChapterId || chapterId,
    },
  };

  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
    window.dispatchEvent(new Event("nbs_lms_progress_updated"));
  }
  return nextState;
}
