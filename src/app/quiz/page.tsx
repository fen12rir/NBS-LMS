"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LmsHeader } from "@/components/layout/lms-header";
import {
  Mail,
  ChevronRight,
  ChevronLeft,
  Award,
  Flag,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function InteractiveQuizPage() {
  const [step, setStep] = useState<number>(1);
  const [selectedFlags, setSelectedFlags] = useState<string[]>(["loose-slot"]);
  const [emailChoice, setEmailChoice] = useState<"safe" | "phish" | null>(null);
  const [scenarioChoice, setScenarioChoice] = useState<string | null>(null);

  const toggleFlag = (id: string) => {
    setSelectedFlags((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <LmsHeader />

      <main className="max-w-4xl w-full mx-auto px-4 sm:px-8 py-8 space-y-5">
        {/* Quiz Header */}
        <div className="nbs-paper-card p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="nbs-slide-pill">
              INTERACTIVE QUIZ • CHALLENGE {step} OF 3
            </span>
            <h1 className="font-heading font-black text-lg sm:text-xl text-slate-950 mt-1">
              {step === 1
                ? "Spot the POS Counter Risks"
                : step === 2
                ? "Inspect This Suspicious Email"
                : "Cashier Incident Response"}
            </h1>
          </div>

          <div className="flex items-center space-x-2">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setStep(num)}
                className={`px-3 py-1.5 font-mono text-xs font-bold border border-slate-900 cursor-pointer transition-all ${
                  step === num
                    ? "bg-[#E4002B] text-white shadow-[2px_2px_0px_0px_#111827]"
                    : "bg-white text-slate-700 hover:bg-stone-100"
                }`}
              >
                0{num}
              </button>
            ))}
          </div>
        </div>

        {/* Challenge Card */}
        <div className="nbs-paper-card p-6 sm:p-8 space-y-6">
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <h2 className="font-heading font-extrabold text-base sm:text-lg text-slate-950">
                  Select the 3 security problems on this cashier counter:
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Click any item below to flag it and reveal why it is safe or dangerous.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    id: "loose-slot",
                    zone: "CARD READER",
                    title: "Card Reader Slot Feels Loose & Bulky",
                    desc: "The plastic frame around the card slot sticks out.",
                    isProblem: true,
                    explanation:
                      "Correct. A bulky or loose card slot is a sign of a physical card skimmer (Slide 12).",
                  },
                  {
                    id: "cvv-note",
                    zone: "COUNTER NOTE",
                    title: "Sticky Note with Customer Card & CVV",
                    desc: "A yellow note with a 16-digit card number and CVV.",
                    isProblem: true,
                    explanation:
                      "Correct. Writing down CVV or card numbers violates the PCI DSS Zero Storage Rule (Slide 10).",
                  },
                  {
                    id: "serial-match",
                    zone: "INVENTORY LOG",
                    title: "POS Serial Number Matches Logbook",
                    desc: "Terminal S/N 2438-A matches the store inventory list.",
                    isProblem: false,
                    explanation:
                      "This is safe. Checking serial numbers daily prevents device swaps.",
                  },
                  {
                    id: "phone-keypad",
                    zone: "NEAR PIN PAD",
                    title: "Personal Phone Next to PIN Keypad",
                    desc: "A smartphone is resting beside the payment terminal.",
                    isProblem: true,
                    explanation:
                      "Correct. Keep personal phones and cameras away from payment counters (Slides 10 & 34).",
                  },
                ].map((item) => {
                  const picked = selectedFlags.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleFlag(item.id)}
                      className={`p-4 text-left border-2 transition-all cursor-pointer flex flex-col justify-between ${
                        picked
                          ? item.isProblem
                            ? "bg-[#FFF1F2] border-[#E4002B] shadow-[3px_3px_0px_0px_#E4002B]"
                            : "bg-amber-50 border-amber-600"
                          : "bg-[#FAF8F5] border-slate-900 hover:bg-white"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] font-bold uppercase px-2 py-0.5 bg-slate-900 text-white">
                            {item.zone}
                          </span>
                          <span
                            className={`text-xs font-mono font-bold flex items-center space-x-1 ${
                              picked ? "text-[#E4002B]" : "text-slate-400"
                            }`}
                          >
                            <Flag className="w-3 h-3" />
                            <span>{picked ? "FLAGGED" : "SELECT"}</span>
                          </span>
                        </div>
                        <div className="font-heading font-extrabold text-sm text-slate-950 mt-2.5">
                          {item.title}
                        </div>
                        <p className="text-xs text-slate-600 mt-1">
                          {item.desc}
                        </p>
                      </div>

                      {picked && (
                        <div className="mt-3 pt-2 border-t border-red-200 text-xs font-medium text-slate-900">
                          {item.explanation}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div>
                <h2 className="font-heading font-extrabold text-base sm:text-lg text-slate-950">
                  Inspect this email: Is it Safe or a Phishing Scam?
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Check the sender address and whether the link uses HTTPS:// or HTTP:// (Slide 35).
                </p>
              </div>

              <div className="border-2 border-slate-900 bg-[#FAF8F5] p-5 space-y-3">
                <div className="flex items-center space-x-2 text-xs font-mono text-slate-600 pb-2 border-b border-stone-300">
                  <Mail className="w-4 h-4 text-[#E4002B]" />
                  <span>
                    From:{" "}
                    <strong className="text-slate-950">
                      IT Support &lt;admin@nbs-login-reset.ru&gt;
                    </strong>
                  </span>
                </div>
                <div className="font-heading font-extrabold text-sm text-slate-950">
                  Subject: URGENT: Reset Your Branch Password Today
                </div>
                <p className="text-xs sm:text-sm text-slate-700">
                  Your National Book Store account will be locked in 30 minutes. Click the link below and type your password now:
                </p>
                <div className="p-2.5 bg-white border border-slate-900 font-mono text-xs text-[#E4002B] font-bold">
                  http://nbs-login-reset.ru/verify-account
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setEmailChoice("phish")}
                  className={`p-4 border-2 text-left cursor-pointer transition-all ${
                    emailChoice === "phish"
                      ? "bg-emerald-50 border-emerald-700 shadow-[3px_3px_0px_0px_#047857]"
                      : "bg-white border-slate-900 hover:bg-[#FAF8F5]"
                  }`}
                >
                  <div className="font-heading font-extrabold text-sm text-slate-950 flex items-center space-x-2">
                    <Flag className="w-4 h-4 text-[#E4002B] shrink-0" />
                    <span>Report as Phishing Scam</span>
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    It uses unencrypted HTTP:// and a fake sender domain.
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setEmailChoice("safe")}
                  className={`p-4 border-2 text-left cursor-pointer transition-all ${
                    emailChoice === "safe"
                      ? "bg-[#FFF1F2] border-[#E4002B] shadow-[3px_3px_0px_0px_#E4002B]"
                      : "bg-white border-slate-900 hover:bg-[#FAF8F5]"
                  }`}
                >
                  <div className="font-heading font-extrabold text-sm text-slate-950 flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-slate-700 shrink-0" />
                    <span>Trust &amp; Open Link</span>
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    Click the link and type my branch password.
                  </div>
                </button>
              </div>

              {emailChoice && (
                <div
                  className={`p-4 border-2 text-xs sm:text-sm font-medium flex items-start space-x-2.5 ${
                    emailChoice === "phish"
                      ? "bg-emerald-50 border-emerald-700 text-emerald-950"
                      : "bg-[#FFF1F2] border-[#E4002B] text-slate-950"
                  }`}
                >
                  {emailChoice === "phish" ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 text-[#E4002B] shrink-0 mt-0.5" />
                  )}
                  <span>
                    {emailChoice === "phish"
                      ? "Correct. Always verify HTTPS:// and never open links from unknown senders (Slide 35)."
                      : "Careful. That link uses http:// instead of https:// and comes from a fake .ru domain."}
                  </span>
                </div>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5">
              <div>
                <h2 className="font-heading font-extrabold text-base sm:text-lg text-slate-950">
                  Scenario C: You find an unknown USB drive plugged into the POS register, and the screen starts lagging.
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Following the <strong>Golden Rule: Hands Off (Slides 15 &amp; 17)</strong>, what is the right action?
                </p>
              </div>

              <div className="space-y-3">
                {[
                  {
                    id: "restart",
                    label: "Restart or power-cycle the POS register right away",
                    correct: false,
                    note: "Incorrect (Slide 17): DO NOT restart or power-cycle the register yourself.",
                  },
                  {
                    id: "unplug",
                    label: "Unplug the network and payment cables behind the register",
                    correct: false,
                    note: "Incorrect (Slide 17): DO NOT unplug network or payment cables.",
                  },
                  {
                    id: "report",
                    label: "Do not reboot or unplug cables; hand the USB to your Branch Manager and report to IT",
                    correct: true,
                    note: "Correct (Slides 15 & 17): Keep hands off register cables and power, never plug the USB into another device, and report immediately to your Branch Manager.",
                  },
                ].map((opt) => {
                  const picked = scenarioChoice === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setScenarioChoice(opt.id)}
                      className={`w-full p-4 border-2 text-left cursor-pointer transition-all ${
                        picked
                          ? opt.correct
                            ? "bg-emerald-50 border-emerald-700 shadow-[3px_3px_0px_0px_#047857]"
                            : "bg-[#FFF1F2] border-[#E4002B] shadow-[3px_3px_0px_0px_#E4002B]"
                          : "bg-[#FAF8F5] border-slate-900 hover:bg-white"
                      }`}
                    >
                      <div className="font-heading font-extrabold text-sm text-slate-950">
                        {opt.label}
                      </div>
                      {picked && (
                        <div className="text-xs text-slate-800 mt-2 pt-2 border-t border-stone-300 font-medium">
                          {opt.note}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quiz Navigation */}
          <div className="pt-4 border-t-2 border-slate-900 flex items-center justify-between">
            <button
              type="button"
              disabled={step === 1}
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              className="px-4 py-2 text-xs font-heading font-bold border border-slate-900 bg-white disabled:opacity-40 flex items-center space-x-1 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep((s) => Math.min(3, s + 1))}
                className="px-5 py-2.5 text-xs font-heading font-bold bg-[#E4002B] hover:bg-[#C10024] text-white border border-slate-950 shadow-[2px_2px_0px_0px_#111827] flex items-center space-x-1.5 cursor-pointer"
              >
                <span>Next Challenge</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <Link
                href="/certificate"
                className="px-5 py-2.5 text-xs font-heading font-bold bg-emerald-700 text-white border border-slate-950 shadow-[2px_2px_0px_0px_#111827] flex items-center space-x-1.5"
              >
                <Award className="w-4 h-4" />
                <span>View E-Certificate</span>
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
