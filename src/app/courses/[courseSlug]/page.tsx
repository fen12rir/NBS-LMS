"use client";

import React, { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LmsHeader } from "@/components/layout/lms-header";
import { StationeryVerticalStrip } from "@/components/brand/stationery-pattern";
import { LMS_COURSES, StaffTrack } from "@/data/courses";
import {
  getLmsProgress,
  markChapterCompleted,
  LmsUserProgress,
} from "@/lib/progress-store";
import {
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Volume2,
  VolumeX,
  Check,
  Lightbulb,
  Store,
  Info,
  Video,
} from "lucide-react";

function CybersecurityCoursePlayerContent() {
  const course = LMS_COURSES[0];
  const searchParams = useSearchParams();
  const chapterQuery = searchParams.get("chapter");

  const [selectedChapterIdx, setSelectedChapterIdx] = useState<number>(0);
  const [staffTrack, setStaffTrack] = useState<StaffTrack>("branch_cashier");
  const [lang, setLang] = useState<"en" | "tl">("en");
  const [selectedCheckpointItems, setSelectedCheckpointItems] = useState<
    Record<string, string[]>
  >({
    "ch-01-pillars-and-assets": ["chk-1-p2pe"],
    "ch-02-pci-dss": ["chk-2-sticky-cvv"],
  });
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [videoMissing, setVideoMissing] = useState(false);
  const [progress, setProgress] = useState<LmsUserProgress>({
    completedChaptersByCourse: { "cybersecurity-awareness": [] },
    lastActiveChapterByCourse: {
      "cybersecurity-awareness": "ch-01-pillars-and-assets",
    },
    bestQuizScoreByCourse: {},
  });

  useEffect(() => {
    setProgress(getLmsProgress());
    if (chapterQuery !== null) {
      const parsedIdx = parseInt(chapterQuery, 10);
      if (
        !isNaN(parsedIdx) &&
        parsedIdx >= 0 &&
        parsedIdx < course.chapters.length
      ) {
        setSelectedChapterIdx(parsedIdx);
      }
    }
  }, [chapterQuery, course.chapters.length]);

  useEffect(() => {
    setVideoMissing(false);
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [selectedChapterIdx, lang]);

  const currentChapter = course.chapters[selectedChapterIdx];
  const completedIds =
    progress.completedChaptersByCourse[course.slug] || [];
  const isChapterDone = completedIds.includes(currentChapter.id);

  const toggleCheckpointItem = (chapterId: string, itemId: string) => {
    setSelectedCheckpointItems((prev) => {
      const currentList = prev[chapterId] || [];
      const nextList = currentList.includes(itemId)
        ? currentList.filter((id) => id !== itemId)
        : [...currentList, itemId];
      return { ...prev, [chapterId]: nextList };
    });
  };

  const handleReadAloud = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const titleText =
      lang === "tl" ? currentChapter.titleTl : currentChapter.title;
    const introText =
      (lang === "tl"
        ? currentChapter.introParagraphTl
        : currentChapter.introParagraph) ||
      (lang === "tl" ? currentChapter.summaryTl : currentChapter.summary);

    const sectionTexts = currentChapter.sections
      .map((s) => {
        const sTitle = lang === "tl" ? s.titleTl : s.title;
        const sBody =
          (lang === "tl" ? s.descriptionTl : s.description) ||
          `${lang === "tl" ? s.whatTextTl : s.whatText}. ${
            lang === "tl" ? s.howToProtectTextTl : s.howToProtectText
          }`;
        const sSimple =
          lang === "tl" ? s.simpleExplanationTl : s.simpleExplanation;
        return `${sTitle}. ${sBody}. ${sSimple}`;
      })
      .join(" ");

    const utterance = new SpeechSynthesisUtterance(
      `${titleText}. ${introText}. ${sectionTexts}`
    );
    utterance.lang = lang === "tl" ? "fil-PH" : "en-US";
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleCompleteAndAdvance = () => {
    const nextIdx = Math.min(course.chapters.length - 1, selectedChapterIdx + 1);
    const nextChapter = course.chapters[nextIdx];
    const updated = markChapterCompleted(
      course.slug,
      currentChapter.id,
      nextChapter?.id
    );
    setProgress(updated);
    if (selectedChapterIdx < course.chapters.length - 1) {
      setSelectedChapterIdx(nextIdx);
    }
  };

  const checkedForCurrent =
    selectedCheckpointItems[currentChapter.id] || [];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <LmsHeader
        lang={lang}
        onToggleLang={() => setLang((prev) => (prev === "en" ? "tl" : "en"))}
      />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-8 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Chapter Sidebar */}
        <aside className="lg:col-span-4 space-y-4">
          <div className="nbs-paper-card p-4 space-y-4">
            <div className="border-b border-stone-200 pb-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#E4002B]">
                  Course 01 • {completedIds.length} / 8 Completed
                </span>
                <span className="text-[11px] font-mono font-bold text-slate-600">
                  {Math.round(
                    (completedIds.length / course.chapters.length) * 100
                  )}
                  %
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-base text-slate-950 mt-0.5">
                {course.title}
              </h2>
              <div className="w-full h-2 bg-stone-200 border border-slate-900 mt-2.5">
                <div
                  className="h-full bg-[#E4002B] transition-all"
                  style={{
                    width: `${Math.max(
                      8,
                      Math.round(
                        (completedIds.length / course.chapters.length) * 100
                      )
                    )}%`,
                  }}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              {course.chapters.map((ch, idx) => {
                const isSelected = idx === selectedChapterIdx;
                const isDone = completedIds.includes(ch.id);
                return (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => setSelectedChapterIdx(idx)}
                    className={`w-full text-left px-3 py-2.5 text-xs flex items-center justify-between border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#FFF1F2] border-slate-900 shadow-[2px_2px_0px_0px_#E4002B] font-bold text-slate-950"
                        : "bg-white border-stone-200 hover:border-slate-900 text-slate-700"
                    }`}
                  >
                    <div className="flex items-center space-x-2.5 min-w-0">
                      <span
                        className={`font-mono text-[11px] font-bold px-1.5 py-0.5 border shrink-0 ${
                          isSelected
                            ? "bg-[#E4002B] text-white border-slate-900"
                            : isDone
                            ? "bg-emerald-50 text-emerald-800 border-emerald-600"
                            : "bg-[#FAF8F5] text-slate-700 border-stone-300"
                        }`}
                      >
                        {ch.number}
                      </span>
                      <span className="truncate">
                        {lang === "tl" ? ch.titleTl : ch.title}
                      </span>
                    </div>

                    {isDone && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Lesson Content */}
        <main className="lg:col-span-8">
          <div className="nbs-paper-card overflow-hidden flex flex-col justify-between">
            {/* Chapter Header */}
            <div className="border-b-2 border-slate-900 bg-white flex">
              <StationeryVerticalStrip className="w-16 sm:w-20 shrink-0 hidden sm:block" />
              <div className="p-5 sm:p-6 flex-1 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="nbs-slide-pill">
                    CHAPTER {currentChapter.number} OF 08 •{" "}
                    {currentChapter.slideRange}
                  </span>

                  {currentChapter.isImplemented && (
                    <button
                      type="button"
                      onClick={handleReadAloud}
                      className={`px-3 py-1 text-xs font-bold border border-slate-900 flex items-center space-x-1.5 cursor-pointer ${
                        isSpeaking
                          ? "bg-[#E4002B] text-white"
                          : "bg-[#FAF8F5] hover:bg-white text-slate-800"
                      }`}
                    >
                      {isSpeaking ? (
                        <>
                          <VolumeX className="w-3.5 h-3.5" />
                          <span>Stop Audio</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5 text-[#E4002B]" />
                          <span>Read Aloud</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

                <h1 className="font-heading font-black text-xl sm:text-2xl text-slate-950 uppercase tracking-tight pt-1">
                  {lang === "tl"
                    ? currentChapter.titleTl
                    : currentChapter.title}
                </h1>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {lang === "tl"
                    ? currentChapter.introParagraphTl ||
                      currentChapter.summaryTl
                    : currentChapter.introParagraph || currentChapter.summary}
                </p>
              </div>
            </div>

            {/* Chapter Body */}
            <div className="p-5 sm:p-7 space-y-6">
              {currentChapter.isImplemented ? (
                <>
                  {/* Video Player */}
                  {currentChapter.video && (
                    <div className="border-2 border-slate-900 bg-white shadow-[3px_3px_0px_0px_#111827] overflow-hidden">
                      <div className="bg-slate-950 text-white px-4 py-2.5 flex items-center justify-between gap-2">
                        <div className="flex items-center space-x-2">
                          <Video className="w-4 h-4 text-[#E4002B] shrink-0" />
                          <span className="font-heading font-bold text-xs sm:text-sm">
                            {lang === "tl"
                              ? currentChapter.video.titleTl
                              : currentChapter.video.title}
                          </span>
                        </div>
                        {currentChapter.video.durationLabel && (
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-[#E4002B] text-white shrink-0">
                            {currentChapter.video.durationLabel}
                          </span>
                        )}
                      </div>

                      <div className="bg-slate-900 relative aspect-video w-full flex items-center justify-center">
                        {!videoMissing ? (
                          <video
                            key={`${currentChapter.id}-${currentChapter.video.src}`}
                            src={`${currentChapter.video.src}?v=2`}
                            controls
                            preload="metadata"
                            onError={() => setVideoMissing(true)}
                            className="w-full h-full object-contain bg-black"
                          />
                        ) : (
                          <div className="p-6 text-center space-y-2 max-w-md">
                            <Video className="w-10 h-10 text-[#E4002B] mx-auto" />
                            <div className="font-heading font-bold text-sm text-white">
                              {lang === "tl"
                                ? "Handa na ang Video Player Slot"
                                : "Training Video Player Ready"}
                            </div>
                            <p className="text-xs text-stone-300 leading-relaxed">
                              Place your video file at{" "}
                              <code className="px-1.5 py-0.5 bg-slate-800 text-stone-100 font-mono text-[11px] border border-slate-700">
                                public{currentChapter.video.src}
                              </code>{" "}
                              to stream it directly in this lesson.
                            </p>
                          </div>
                        )}
                      </div>

                      {(currentChapter.video.caption ||
                        currentChapter.video.captionTl) && (
                        <div className="px-4 py-2.5 bg-[#FAF8F5] border-t border-stone-300 text-xs text-slate-600">
                          {lang === "tl"
                            ? currentChapter.video.captionTl
                            : currentChapter.video.caption}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Key Takeaway */}
                  {currentChapter.simpleTakeaway && (
                    <div className="p-4 bg-[#FFF1F2] border-2 border-[#E4002B] shadow-[3px_3px_0px_0px_#E4002B] flex items-start space-x-3">
                      <Lightbulb className="w-5 h-5 text-[#E4002B] shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <div className="text-[11px] font-mono font-bold uppercase text-[#E4002B]">
                          {lang === "tl"
                            ? "SA MADALING SALITA (KEY TAKEAWAY)"
                            : "KEY TAKEAWAY"}
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-slate-900 leading-relaxed">
                          {lang === "tl"
                            ? currentChapter.simpleTakeawayTl
                            : currentChapter.simpleTakeaway}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Lesson Sections */}
                  <div className="space-y-4">
                    {currentChapter.sections.map((sec) => {
                      const borderLeftClass =
                        sec.accentColor === "red"
                          ? "border-l-4 border-l-[#E4002B]"
                          : sec.accentColor === "emerald"
                          ? "border-l-4 border-l-emerald-700"
                          : "border-l-4 border-l-slate-900";

                      const exampleText =
                        lang === "tl"
                          ? sec.realStoreExampleTl
                          : sec.realStoreExample;

                      return (
                        <div
                          key={sec.id}
                          className={`p-4 sm:p-5 bg-[#FAF8F5] border border-stone-300 ${borderLeftClass} space-y-2.5`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="font-heading font-extrabold text-sm sm:text-base text-slate-950">
                              {lang === "tl" ? sec.titleTl : sec.title}
                            </h3>
                            {sec.badge && (
                              <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-white border border-stone-300 text-slate-600 shrink-0">
                                {sec.badge}
                              </span>
                            )}
                          </div>

                          {/* Section Details */}
                          {sec.description && (
                            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                              {lang === "tl"
                                ? sec.descriptionTl
                                : sec.description}
                            </p>
                          )}

                          {sec.whatText && (
                            <div className="text-xs sm:text-sm text-slate-800 space-y-1">
                              <div>
                                <strong className="text-slate-950">
                                  {lang === "tl" ? "Ano ito: " : "What: "}
                                </strong>
                                {lang === "tl" ? sec.whatTextTl : sec.whatText}
                              </div>
                              <div>
                                <strong className="text-[#E4002B]">
                                  {lang === "tl"
                                    ? "Paano Iingatan: "
                                    : "How to Protect: "}
                                </strong>
                                {lang === "tl"
                                  ? sec.howToProtectTextTl
                                  : sec.howToProtectText}
                              </div>
                            </div>
                          )}

                          {/* Section Explanation */}
                          <div className="p-3 bg-white border border-stone-300 space-y-2">
                            <div className="flex items-start space-x-2 text-xs text-slate-700 leading-relaxed">
                              <Info className="w-4 h-4 text-[#E4002B] shrink-0 mt-0.5" />
                              <div>
                                <strong className="text-slate-900">
                                  {lang === "tl"
                                    ? "Sa madaling salita: "
                                    : "Why this matters: "}
                                </strong>
                                {lang === "tl"
                                  ? sec.simpleExplanationTl
                                  : sec.simpleExplanation}
                              </div>
                            </div>

                            {exampleText && (
                              <div className="pt-2 border-t border-stone-200 flex items-start space-x-2 text-xs text-slate-700">
                                <Store className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                                <div>
                                  <strong className="text-slate-950">
                                    {lang === "tl"
                                      ? "Halimbawa sa Branch: "
                                      : "Store Example: "}
                                  </strong>
                                  {exampleText}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Role Checklist */}
                  <div className="p-4 bg-[#FAF8F5] border border-stone-300 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-heading font-extrabold text-xs uppercase text-slate-900">
                        Role-Specific Daily Checklist (Slides 34-35)
                      </span>
                      <div className="inline-flex border border-slate-900 bg-white">
                        <button
                          type="button"
                          onClick={() => setStaffTrack("branch_cashier")}
                          className={`px-3 py-1 text-xs font-bold cursor-pointer ${
                            staffTrack === "branch_cashier"
                              ? "bg-[#E4002B] text-white"
                              : "text-slate-700 hover:bg-stone-100"
                          }`}
                        >
                          Branch / Cashier
                        </button>
                        <button
                          type="button"
                          onClick={() => setStaffTrack("hq_office")}
                          className={`px-3 py-1 text-xs font-bold cursor-pointer ${
                            staffTrack === "hq_office"
                              ? "bg-[#E4002B] text-white"
                              : "text-slate-700 hover:bg-stone-100"
                          }`}
                        >
                          HQ / Office
                        </button>
                      </div>
                    </div>

                    {staffTrack === "branch_cashier" ? (
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>
                          • <strong>Clean Terminal Area:</strong> Keep smartphones and loose cameras away from payment counters.
                        </li>
                        <li>
                          • <strong>Physical Inspection:</strong> Check card readers daily for skimmer overlays or broken seals.
                        </li>
                        <li>
                          • <strong>No Password Sharing:</strong> Never write register PINs or passwords under keyboards.
                        </li>
                      </ul>
                    ) : (
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>
                          • <strong>Unique Passwords &amp; MFA:</strong> Use separate complex passwords and MFA for every system.
                        </li>
                        <li>
                          • <strong>Phishing Guard:</strong> Do not open links or download attachments from unknown senders.
                        </li>
                        <li>
                          • <strong>URL Verification:</strong> Ensure websites use HTTPS:// instead of HTTP:// before typing credentials.
                        </li>
                      </ul>
                    )}
                  </div>

                  {/* Practice Checkpoint */}
                  {currentChapter.checkpoint && (
                    <div className="border-2 border-slate-900 bg-[#FAF8F5] p-5 shadow-[3px_3px_0px_0px_#111827] space-y-3">
                      <div>
                        <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase bg-[#E4002B] text-white">
                          {currentChapter.checkpoint.badge}
                        </span>
                        <h3 className="font-heading font-extrabold text-sm sm:text-base text-slate-950 mt-1.5">
                          {lang === "tl"
                            ? currentChapter.checkpoint.promptTl
                            : currentChapter.checkpoint.prompt}
                        </h3>
                        <p className="text-xs text-slate-600 mt-0.5">
                          {lang === "tl"
                            ? currentChapter.checkpoint.instructionTl
                            : currentChapter.checkpoint.instruction}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                        {currentChapter.checkpoint.items.map((item) => {
                          const selected = checkedForCurrent.includes(item.id);
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() =>
                                toggleCheckpointItem(currentChapter.id, item.id)
                              }
                              className={`p-3.5 text-left border transition-all cursor-pointer flex flex-col justify-between ${
                                selected
                                  ? item.isCorrect
                                    ? "bg-[#FFF1F2] border-[#E4002B] shadow-[2px_2px_0px_0px_#E4002B]"
                                    : "bg-amber-50 border-amber-600"
                                  : "bg-white border-stone-300 hover:border-slate-900"
                              }`}
                            >
                              <div className="flex items-start justify-between gap-2">
                                <span className="text-xs font-bold text-slate-900 leading-snug">
                                  {lang === "tl" ? item.labelTl : item.label}
                                </span>
                                <span
                                  className={`w-4 h-4 border flex items-center justify-center shrink-0 mt-0.5 ${
                                    selected
                                      ? "bg-[#E4002B] border-[#E4002B] text-white"
                                      : "border-stone-400 bg-white"
                                  }`}
                                >
                                  {selected && <Check className="w-3 h-3" />}
                                </span>
                              </div>
                              {selected && (
                                <div className="mt-2.5 pt-2 border-t border-red-200 text-[11px] font-semibold text-[#8B0000]">
                                  {lang === "tl"
                                    ? item.feedbackTl
                                    : item.feedback}
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="border border-stone-300 bg-[#FAF8F5] p-6 text-center space-y-2">
                  <div className="font-heading font-extrabold text-sm text-slate-900">
                    {lang === "tl"
                      ? "Kasalukuyang Inihahanda ang Kabanatang Ito"
                      : "Chapter Content Coming Soon"}
                  </div>
                  <p className="text-xs text-slate-600">
                    {lang === "tl"
                      ? currentChapter.summaryTl
                      : currentChapter.summary}
                  </p>
                </div>
              )}
            </div>

            {/* Chapter Pagination */}
            <div className="p-4 border-t-2 border-slate-900 bg-[#FAF8F5] flex items-center justify-between">
              <button
                type="button"
                disabled={selectedChapterIdx === 0}
                onClick={() =>
                  setSelectedChapterIdx((prev) => Math.max(0, prev - 1))
                }
                className="px-4 py-2 text-xs font-heading font-bold border border-slate-900 bg-white disabled:opacity-40 flex items-center space-x-1 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <span className="text-xs font-mono font-bold text-slate-600">
                Chapter {currentChapter.number} of 08{" "}
                {isChapterDone ? "• Completed" : ""}
              </span>

              {selectedChapterIdx < course.chapters.length - 1 ? (
                <button
                  type="button"
                  onClick={handleCompleteAndAdvance}
                  className="px-5 py-2 text-xs font-heading font-bold bg-[#E4002B] hover:bg-[#C10024] text-white border border-slate-950 shadow-[2px_2px_0px_0px_#111827] flex items-center space-x-1 cursor-pointer"
                >
                  <span>Complete &amp; Next Chapter</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <Link
                  href="/quiz"
                  onClick={() =>
                    markChapterCompleted(course.slug, currentChapter.id)
                  }
                  className="px-5 py-2 text-xs font-heading font-bold bg-emerald-700 text-white border border-slate-950 shadow-[2px_2px_0px_0px_#111827] flex items-center space-x-1"
                >
                  <span>Start Quiz</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function CybersecurityCoursePlayerPage() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-xs font-mono">Loading Lesson Player...</div>
      }
    >
      <CybersecurityCoursePlayerContent />
    </Suspense>
  );
}
