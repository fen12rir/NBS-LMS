"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { LmsHeader } from "@/components/layout/lms-header";
import { StationeryHeaderPattern } from "@/components/brand/stationery-pattern";
import { LMS_COURSES } from "@/data/courses";
import { getLmsProgress, LmsUserProgress } from "@/lib/progress-store";
import {
  ShieldCheck,
  Clock,
  ChevronRight,
  CheckCircle2,
  PlayCircle,
  Lock,
  Award,
  Code2,
} from "lucide-react";

export default function CourseCatalogDashboard() {
  const [lang, setLang] = useState<"en" | "tl">("en");
  const [progress, setProgress] = useState<LmsUserProgress>({
    completedChaptersByCourse: { "cybersecurity-awareness": [] },
    lastActiveChapterByCourse: {
      "cybersecurity-awareness": "ch-01-pillars-and-assets",
    },
    bestQuizScoreByCourse: {},
  });

  const activeCourse = LMS_COURSES[0];

  useEffect(() => {
    setProgress(getLmsProgress());
    const onUpdate = () => setProgress(getLmsProgress());
    window.addEventListener("nbs_lms_progress_updated", onUpdate);
    return () =>
      window.removeEventListener("nbs_lms_progress_updated", onUpdate);
  }, []);

  const completedIds =
    progress.completedChaptersByCourse[activeCourse.slug] || [];
  const nextIncompleteIdx = activeCourse.chapters.findIndex(
    (ch) => !completedIds.includes(ch.id)
  );
  const resumeIdx = nextIncompleteIdx === -1 ? 0 : nextIncompleteIdx;
  const resumeChapter = activeCourse.chapters[resumeIdx];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <LmsHeader
        lang={lang}
        onToggleLang={() => setLang((prev) => (prev === "en" ? "tl" : "en"))}
      />

      {/* Editorial Stationery Hero — Crisp Vector SVG */}
      <section className="bg-white border-b-2 border-slate-900 overflow-hidden">
        <StationeryHeaderPattern className="h-20 sm:h-24 w-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-6 pt-4 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="nbs-slide-pill mb-1.5">
              NBS STAFF TRAINING PORTAL
            </span>
            <h1 className="font-heading font-black text-xl sm:text-3xl text-slate-950 tracking-tight">
              {lang === "tl"
                ? "Maligayang pagbabalik, Maria Santos!"
                : "Welcome back, Maria Santos!"}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              {lang === "tl"
                ? "Tapusin ang 8 maiikling kabanata at ipasa ang interactive quiz upang makuha ang iyong opisyal na NBS E-Certificate."
                : "Complete your 8 short chapters and pass the interactive quiz to unlock your official NBS E-Certificate."}
            </p>
          </div>

          {/* Simple Continue Action Box Driven by Real Progress */}
          <div className="bg-[#FAF8F5] border-2 border-slate-900 p-4 shadow-[3px_3px_0px_0px_#111827] flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#E4002B]">
                Course 1 • {completedIds.length} of{" "}
                {activeCourse.chapters.length} Chapters Done
              </div>
              <div className="font-heading font-extrabold text-sm text-slate-950 mt-0.5">
                Next: Ch {resumeChapter.number} ({lang === "tl" ? resumeChapter.titleTl : resumeChapter.title})
              </div>
            </div>
            <Link
              href={`/courses/cybersecurity-awareness?chapter=${resumeIdx}`}
              className="px-4 py-2.5 bg-[#E4002B] hover:bg-[#C10024] text-white font-heading font-bold text-xs uppercase tracking-wider border border-slate-950 shadow-[2px_2px_0px_0px_#111827] flex items-center space-x-1.5 shrink-0 transition-all"
            >
              <PlayCircle className="w-4 h-4" />
              <span>
                {completedIds.length === 0 ? "Start Lesson" : "Continue Lesson"}
              </span>
            </Link>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto w-full px-4 sm:px-8 py-8 space-y-8">
        {/* Active Course Section: Clean 8-Chapter Cards + Quiz & Certificate Row */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b-2 border-slate-900 pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E4002B]">
                Active Course 01 • {activeCourse.code}
              </span>
              <h2 className="font-heading font-black text-xl sm:text-2xl text-slate-950">
                {activeCourse.title}
              </h2>
            </div>
            <div className="flex items-center space-x-3 text-xs font-semibold text-slate-600">
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-[#E4002B]" />
                <span>~{activeCourse.estimatedMinutes} mins</span>
              </span>
              <span>•</span>
              <span>8 Chapters</span>
              <span>•</span>
              <span>Passing Score: 80%</span>
            </div>
          </div>

          {/* 8 Chapters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {activeCourse.chapters.map((ch, idx) => {
              const isDone = completedIds.includes(ch.id);
              const isCurrent = idx === resumeIdx && !isDone;
              return (
                <Link
                  key={ch.id}
                  href={`/courses/cybersecurity-awareness?chapter=${idx}`}
                  className={`nbs-paper-card-hover p-4 flex flex-col justify-between ${
                    isCurrent ? "border-[#E4002B] bg-[#FFF1F2]/30" : ""
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-1">
                      <span
                        className={`font-mono text-xs font-bold px-2 py-0.5 border ${
                          isDone
                            ? "bg-emerald-50 text-emerald-800 border-emerald-600"
                            : ch.isImplemented
                            ? "bg-[#E4002B] text-white border-slate-900"
                            : "bg-[#FAF8F5] text-slate-700 border-slate-900"
                        }`}
                      >
                        CH {ch.number}
                      </span>

                      {isDone ? (
                        <span className="text-xs font-bold text-emerald-700 flex items-center space-x-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Done</span>
                        </span>
                      ) : (
                        <span className="text-xs font-mono text-slate-500">
                          {ch.durationMinutes} min
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading font-extrabold text-sm text-slate-950 leading-snug">
                      {lang === "tl" ? ch.titleTl : ch.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {lang === "tl" ? ch.summaryTl : ch.summary}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-stone-200 flex items-center justify-between text-xs font-bold text-[#E4002B]">
                    <span>
                      {isDone
                        ? "Review Chapter"
                        : isCurrent
                        ? "Continue Chapter"
                        : "Open Chapter"}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Simple 2-Card Bottom Strip: Interactive Quiz + Official E-Certificate */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="nbs-paper-card p-5 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="nbs-slide-pill">STEP 2 • PRACTICAL QUIZ</span>
                <h3 className="font-heading font-extrabold text-base text-slate-950 pt-1">
                  Interactive Cybersecurity Quiz
                </h3>
                <p className="text-xs text-slate-600">
                  Spot counter hazards, inspect phishing emails, and respond to cashier scenarios.
                </p>
              </div>
              <Link
                href="/quiz"
                className="px-4 py-2.5 bg-[#E4002B] hover:bg-[#C10024] text-white font-heading font-bold text-xs uppercase border border-slate-950 shadow-[2px_2px_0px_0px_#111827] shrink-0 flex items-center space-x-1.5"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Start Quiz</span>
              </Link>
            </div>

            <div className="nbs-paper-card p-5 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="nbs-slide-pill">STEP 3 • CERTIFICATION</span>
                <h3 className="font-heading font-extrabold text-base text-slate-950 pt-1">
                  Official NBS E-Certificate
                </h3>
                <p className="text-xs text-slate-600">
                  Download your verified PDF certificate with QR code once you score 80% or higher.
                </p>
              </div>
              <Link
                href="/certificate"
                className="px-4 py-2.5 bg-white hover:bg-stone-100 text-slate-950 font-heading font-bold text-xs uppercase border-2 border-slate-900 shadow-[2px_2px_0px_0px_#111827] shrink-0 flex items-center space-x-1.5"
              >
                <Award className="w-4 h-4 text-[#E4002B]" />
                <span>View Certificate</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Future Courses Section */}
        <section className="space-y-3 pt-2">
          <div className="border-b border-stone-300 pb-2 flex items-center justify-between">
            <h2 className="font-heading font-extrabold text-sm uppercase tracking-wider text-slate-700">
              Upcoming Training Modules (Future Courses)
            </h2>
            <span className="text-xs text-slate-500">Multi-Course Ready</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LMS_COURSES.slice(1).map((course, idx) => (
              <div
                key={course.slug}
                className="bg-white/80 border-2 border-dashed border-stone-300 p-4 flex items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 bg-stone-100 border border-stone-300 text-slate-700">
                      COURSE 0{idx + 2}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center space-x-1">
                      <Lock className="w-3 h-3" />
                      <span>Coming Soon</span>
                    </span>
                  </div>
                  <h3 className="font-heading font-extrabold text-sm text-slate-900 mt-1.5">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {course.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
