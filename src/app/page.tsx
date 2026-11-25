"use client";

import React, { useState } from "react";
import Link from "next/link";
import { StationeryHeaderPattern } from "@/components/brand/stationery-pattern";
import { LMS_COURSES } from "@/data/courses";
import {
  BookOpen,
  ShieldCheck,
  Award,
  ArrowRight,
  LogIn,
  Video,
  CheckCircle2,
  Lock,
  Building2,
  Briefcase,
  Clock,
  FileText,
} from "lucide-react";

export default function LandingPage() {
  const [selectedRoleTab, setSelectedRoleTab] = useState<"branch" | "hq">(
    "branch"
  );
  const activeCourse = LMS_COURSES[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-slate-900">
      {/* Editorial Top Header */}
      <header className="sticky top-0 z-50 bg-white border-b-2 border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-[#E4002B] text-white px-2.5 py-1 font-heading font-black text-lg tracking-tighter border border-slate-950 shadow-[2px_2px_0px_0px_#111827]">
              NBS
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-heading font-extrabold text-slate-950 text-sm sm:text-base tracking-tight">
                Academy Library
              </span>
              <span className="hidden sm:inline-block text-xs font-mono px-2 py-0.5 bg-[#FAF8F5] border border-stone-300 text-slate-600">
                STAFF HANDBOOK &amp; LMS
              </span>
            </div>
          </Link>

          <div className="flex items-center space-x-2.5">
            <Link
              href="/login"
              className="px-3.5 py-1.5 text-xs font-heading font-bold border-2 border-slate-900 bg-white hover:bg-stone-100 text-slate-900 flex items-center space-x-1.5 transition-all"
            >
              <LogIn className="w-3.5 h-3.5 text-[#E4002B]" />
              <span>Sign In</span>
            </Link>
            <Link
              href="/dashboard"
              className="px-4 py-1.5 text-xs font-heading font-bold bg-[#E4002B] hover:bg-[#C10024] text-white border-2 border-slate-950 shadow-[2px_2px_0px_0px_#111827] flex items-center space-x-1.5 transition-all"
            >
              <span>Open My Courses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Editorial Publication Masthead */}
      <section className="bg-white border-b-2 border-slate-900">
        <StationeryHeaderPattern className="h-20 sm:h-24 w-full" />

        <div className="max-w-5xl mx-auto px-4 sm:px-8 pt-6 pb-10 text-center space-y-5">
          <div className="inline-flex items-center space-x-2 border border-slate-900 bg-[#FAF8F5] px-3 py-1 text-xs font-mono font-bold">
            <span className="w-2 h-2 bg-[#E4002B] inline-block" />
            <span>NATIONAL BOOK STORE • STAFF LEARNING EDITION</span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-none">
            The NBS Staff Learning <br className="hidden sm:inline" />
            &amp; Certification Library
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Bite-sized video chapters, plain Taglish and English field guides, and interactive workplace challenges built for every National Book Store branch and head-office team.
          </p>

          {/* Editorial Index Strip */}
          <div className="pt-2 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 border-2 border-slate-900 bg-[#FAF8F5] shadow-[4px_4px_0px_0px_#111827] divide-y sm:divide-y-0 sm:divide-x divide-slate-900 text-left">
            <div className="p-3.5">
              <div className="text-[10px] font-mono uppercase text-slate-500">
                Active Curriculum
              </div>
              <div className="font-heading font-black text-sm text-slate-950 mt-0.5">
                Cybersecurity 101
              </div>
            </div>
            <div className="p-3.5">
              <div className="text-[10px] font-mono uppercase text-slate-500">
                Format
              </div>
              <div className="font-heading font-black text-sm text-slate-950 mt-0.5">
                Video + Taglish Guide
              </div>
            </div>
            <div className="p-3.5">
              <div className="text-[10px] font-mono uppercase text-slate-500">
                Assessment
              </div>
              <div className="font-heading font-black text-sm text-[#E4002B] mt-0.5">
                Interactive Scenarios
              </div>
            </div>
            <div className="p-3.5">
              <div className="text-[10px] font-mono uppercase text-slate-500">
                Credential
              </div>
              <div className="font-heading font-black text-sm text-slate-950 mt-0.5">
                QR E-Certificate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Course Handbook Spread (Book / Syllabus Table of Contents Layout) */}
      <section className="py-12 sm:py-16 border-b-2 border-slate-900 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="nbs-slide-pill">FEATURED COURSE HANDBOOK</span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-950 mt-2">
                {activeCourse.title}
              </h2>
            </div>
            <Link
              href="/dashboard"
              className="px-5 py-2.5 bg-[#E4002B] hover:bg-[#C10024] text-white font-heading font-bold text-xs uppercase tracking-wider border-2 border-slate-950 shadow-[3px_3px_0px_0px_#111827] inline-flex items-center space-x-2 self-start sm:self-auto"
            >
              <span>Start Course 01</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Open Book / Dual-Page Spread */}
          <div className="nbs-paper-card grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
            {/* Left Page: Part I (Core Retail & Staff Security) */}
            <div className="lg:col-span-6 p-6 sm:p-8 border-b-2 lg:border-b-0 lg:border-r-2 border-slate-900 bg-white flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-stone-300 pb-3">
                  <span className="font-mono text-xs font-bold uppercase text-[#E4002B]">
                    PART I • SLIDES 4-18
                  </span>
                  <span className="font-mono text-xs text-slate-500">
                    Chapters 01 - 04
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-black text-lg sm:text-xl text-slate-950">
                    Core Retail &amp; Staff Security
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Practical security rules for cash registers, card machines, and daily branch operations.
                  </p>
                </div>

                <div className="divide-y divide-stone-200 border-t border-b border-stone-200">
                  {activeCourse.chapters.slice(0, 4).map((ch, idx) => (
                    <Link
                      key={ch.id}
                      href={`/courses/cybersecurity-awareness?chapter=${idx}`}
                      className="py-3 flex items-center justify-between gap-3 group hover:bg-[#FAF8F5] px-2 -mx-2 transition-colors"
                    >
                      <div className="flex items-center space-x-3 min-w-0">
                        <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#FAF8F5] border border-slate-900 text-[#E4002B] shrink-0">
                          {ch.number}
                        </span>
                        <div className="min-w-0">
                          <div className="font-heading font-bold text-xs sm:text-sm text-slate-950 group-hover:text-[#E4002B] truncate">
                            {ch.title}
                          </div>
                          <div className="text-[11px] text-slate-500 truncate">
                            {ch.titleTl}
                          </div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 shrink-0">
                        {ch.slideRange}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] border border-stone-300 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">
                  Includes video lessons &amp; PCI DSS counter checks
                </span>
                <Link
                  href="/courses/cybersecurity-awareness?chapter=0"
                  className="font-bold text-[#E4002B] hover:underline shrink-0"
                >
                  Read Ch 01
                </Link>
              </div>
            </div>

            {/* Right Page: Part II (Threat Intelligence & Technical Depth) */}
            <div className="lg:col-span-6 p-6 sm:p-8 bg-[#FAF8F5] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-stone-300 pb-3">
                  <span className="font-mono text-xs font-bold uppercase text-slate-900">
                    PART II • SLIDES 19-38
                  </span>
                  <span className="font-mono text-xs text-slate-500">
                    Chapters 05 - 08
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-black text-lg sm:text-xl text-slate-950">
                    Threat Intelligence &amp; Technical Depth
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Recognizing phishing, smishing, vishing, threat actors, DDoS, and the 8 signs of malware.
                  </p>
                </div>

                <div className="divide-y divide-stone-200 border-t border-b border-stone-200">
                  {activeCourse.chapters.slice(4, 8).map((ch, idx) => (
                    <Link
                      key={ch.id}
                      href={`/courses/cybersecurity-awareness?chapter=${idx + 4}`}
                      className="py-3 flex items-center justify-between gap-3 group hover:bg-white px-2 -mx-2 transition-colors"
                    >
                      <div className="flex items-center space-x-3 min-w-0">
                        <span className="font-mono text-xs font-bold px-2 py-0.5 bg-white border border-slate-900 text-slate-900 shrink-0">
                          {ch.number}
                        </span>
                        <div className="min-w-0">
                          <div className="font-heading font-bold text-xs sm:text-sm text-slate-950 group-hover:text-[#E4002B] truncate">
                            {ch.title}
                          </div>
                          <div className="text-[11px] text-slate-500 truncate">
                            {ch.titleTl}
                          </div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 shrink-0">
                        {ch.slideRange}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-3.5 bg-white border border-stone-300 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">
                  Ends with the Interactive Scenario Quiz &amp; E-Certificate
                </span>
                <Link
                  href="/quiz"
                  className="font-bold text-[#E4002B] hover:underline shrink-0"
                >
                  Try Quiz
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Role TrackSwitcher Section (Unique to the LMS) */}
      <section className="py-12 sm:py-16 bg-white border-b-2 border-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="nbs-slide-pill">TAILORED FOR YOUR WORKPLACE</span>
              <h2 className="font-heading font-black text-2xl text-slate-950 mt-2">
                What You Will Learn Based on Your Role
              </h2>
            </div>

            {/* Role Toggle Tabs */}
            <div className="inline-flex border-2 border-slate-900 bg-[#FAF8F5] shadow-[3px_3px_0px_0px_#111827] self-start">
              <button
                type="button"
                onClick={() => setSelectedRoleTab("branch")}
                className={`px-4 py-2 text-xs font-heading font-bold flex items-center space-x-1.5 cursor-pointer ${
                  selectedRoleTab === "branch"
                    ? "bg-[#E4002B] text-white"
                    : "text-slate-800 hover:bg-white"
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Branch &amp; Cashier Staff</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedRoleTab("hq")}
                className={`px-4 py-2 text-xs font-heading font-bold flex items-center space-x-1.5 cursor-pointer ${
                  selectedRoleTab === "hq"
                    ? "bg-[#E4002B] text-white"
                    : "text-slate-800 hover:bg-white"
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>HQ &amp; Office Staff</span>
              </button>
            </div>
          </div>

          {selectedRoleTab === "branch" ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="nbs-paper-card p-5 space-y-2">
                <div className="text-[11px] font-mono font-bold text-[#E4002B]">
                  01 • PAYMENT COUNTERS
                </div>
                <h3 className="font-heading font-extrabold text-sm text-slate-950">
                  PCI DSS &amp; Clean Counter Rules
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Never write customer card numbers or CVV codes on sticky notes, keep personal phones off the counter, and verify POS terminal serial numbers every morning.
                </p>
              </div>
              <div className="nbs-paper-card p-5 space-y-2">
                <div className="text-[11px] font-mono font-bold text-[#E4002B]">
                  02 • CARD READERS
                </div>
                <h3 className="font-heading font-extrabold text-sm text-slate-950">
                  Spotting Skimmers &amp; Fake Technicians
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Detect loose card slots, broken tamper seals, unknown USB flash drives, and unverified visitors claiming to be bank or IT technicians.
                </p>
              </div>
              <div className="nbs-paper-card p-5 space-y-2">
                <div className="text-[11px] font-mono font-bold text-[#E4002B]">
                  03 • GOLDEN RULE
                </div>
                <h3 className="font-heading font-extrabold text-sm text-slate-950">
                  Hands-Off Escalation to Branch Manager
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Never reboot or unplug a suspicious register yourself. Stop transactions on that terminal and report immediately to your Branch Manager under our Zero Blame policy.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="nbs-paper-card p-5 space-y-2">
                <div className="text-[11px] font-mono font-bold text-[#E4002B]">
                  01 • ACCOUNT PROTECTION
                </div>
                <h3 className="font-heading font-extrabold text-sm text-slate-950">
                  Unique Passwords &amp; MFA
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Protect ERP, inventory, and HR databases using separate complex passwords and Multi-Factor Authentication (OTP) on every corporate system.
                </p>
              </div>
              <div className="nbs-paper-card p-5 space-y-2">
                <div className="text-[11px] font-mono font-bold text-[#E4002B]">
                  02 • EMAIL &amp; BROWSER SAFETY
                </div>
                <h3 className="font-heading font-extrabold text-sm text-slate-950">
                  Phishing Guard &amp; HTTPS Verification
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Inspect sender domains, avoid unknown email attachments, and verify that websites use encrypted HTTPS:// instead of HTTP:// before logging in.
                </p>
              </div>
              <div className="nbs-paper-card p-5 space-y-2">
                <div className="text-[11px] font-mono font-bold text-[#E4002B]">
                  03 • WORKSTATION HEALTH
                </div>
                <h3 className="font-heading font-extrabold text-sm text-slate-950">
                  Spotting the 8 Malware Warning Signs
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Recognize unexpected pop-ups, disabled antivirus software, new browser toolbars, and abnormal idle network traffic, and escalate directly to IT Helpdesk via Viber or Email.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Course Bookshelf (Multi-Course Library) */}
      <section className="py-12 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-5">
          <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2">
            <h2 className="font-heading font-black text-lg sm:text-xl text-slate-950 uppercase">
              NBS Academy Course Shelf
            </h2>
            <span className="text-xs font-mono text-slate-600">
              Volume 2027 • Multi-Course Catalog
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {LMS_COURSES.map((course, idx) => {
              const isLive = course.status === "active";
              return (
                <div
                  key={course.slug}
                  className={`p-5 flex flex-col justify-between ${
                    isLive
                      ? "nbs-paper-card"
                      : "bg-white/70 border-2 border-dashed border-stone-300"
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#FAF8F5] border border-slate-900">
                        VOL 0{idx + 1} • {course.code}
                      </span>
                      {isLive ? (
                        <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-600">
                          OPEN
                        </span>
                      ) : (
                        <span className="text-[11px] font-mono text-slate-500 flex items-center space-x-1">
                          <Lock className="w-3 h-3" />
                          <span>UPCOMING</span>
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading font-extrabold text-base text-slate-950">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {course.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-stone-200 flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-500">
                      ~{course.estimatedMinutes} mins
                    </span>
                    {isLive ? (
                      <Link
                        href="/dashboard"
                        className="font-heading font-bold text-[#E4002B] hover:underline flex items-center space-x-1"
                      >
                        <span>Open Handbook</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <span className="font-mono text-slate-400">
                        In Preparation
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-white border-t-2 border-slate-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-3">
          <div className="flex items-center space-x-2">
            <span className="bg-[#E4002B] text-white px-2 py-0.5 font-heading font-black text-xs">
              NBS
            </span>
            <span className="font-bold text-slate-900">
              National Book Store Academy Library
            </span>
          </div>
          <div className="font-mono text-[11px] text-slate-500">
            Employee Learning &amp; Certification System
          </div>
        </div>
      </footer>
    </div>
  );
}
