"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BookOpen,
  ShieldCheck,
  Award,
  LayoutGrid,
  Shield,
  Globe,
  User,
  LogOut,
} from "lucide-react";

export interface LmsSessionUser {
  name: string;
  email: string;
  branchCode: string;
  branchName: string;
  role: "trainee" | "branch_admin" | "super_admin";
}

const SESSION_KEY = "nbs_lms_session_user";

const DEFAULT_TRAINEE: LmsSessionUser = {
  name: "Maria Santos",
  email: "maria.santos@nbs.com.ph",
  branchCode: "2438",
  branchName: "NBS SM North Edsa",
  role: "trainee",
};

export function getSessionUser(): LmsSessionUser {
  if (typeof window === "undefined") return DEFAULT_TRAINEE;
  try {
    const raw = window.localStorage.getItem(SESSION_KEY);
    if (!raw) return DEFAULT_TRAINEE;
    return JSON.parse(raw) as LmsSessionUser;
  } catch {
    return DEFAULT_TRAINEE;
  }
}

export function setSessionUser(user: LmsSessionUser) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    window.dispatchEvent(new Event("nbs_lms_session_changed"));
  }
}

export function LmsHeader({
  lang = "en",
  onToggleLang,
}: {
  staffTrack?: "branch_cashier" | "hq_office";
  onToggleTrack?: () => void;
  lang?: "en" | "tl";
  onToggleLang?: () => void;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<LmsSessionUser>(DEFAULT_TRAINEE);

  useEffect(() => {
    setUser(getSessionUser());
    const onChange = () => setUser(getSessionUser());
    window.addEventListener("nbs_lms_session_changed", onChange);
    return () => window.removeEventListener("nbs_lms_session_changed", onChange);
  }, []);

  const isAdmin = user.role === "branch_admin" || user.role === "super_admin";

  // Trainee navigation (Only shows Admin Portal if signed in as an Admin, just like NBS-Projects!)
  const navItems = [
    { href: "/", label: "Courses", icon: LayoutGrid },
    {
      href: "/courses/cybersecurity-awareness",
      label: "Lessons",
      icon: BookOpen,
    },
    {
      href: "/quiz",
      label: "Interactive Quiz",
      icon: ShieldCheck,
    },
    {
      href: "/certificate",
      label: "E-Certificate",
      icon: Award,
    },
  ];

  const handleSignOut = () => {
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Tactile NBS Logo + Nav */}
        <div className="flex items-center space-x-4 lg:space-x-6">
          <Link href="/" className="flex items-center space-x-3 shrink-0">
            <div className="bg-[#E4002B] text-white px-2.5 py-1 font-heading font-black text-lg tracking-tighter border border-slate-950 shadow-[2px_2px_0px_0px_#111827]">
              NBS
            </div>
            <div>
              <div className="font-heading font-extrabold text-slate-950 text-sm sm:text-base tracking-tight leading-none">
                Training Academy
              </div>
              <div className="text-[11px] font-medium text-slate-500 mt-0.5 hidden sm:block">
                Employee Learning Portal
              </div>
            </div>
          </Link>

          <div className="h-6 w-px bg-stone-300 hidden lg:block" />

          <nav className="hidden lg:flex items-center space-x-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 text-xs font-bold flex items-center space-x-1.5 border transition-all ${
                    isActive
                      ? "bg-[#FFF1F2] text-[#E4002B] border-[#E4002B] shadow-[2px_2px_0px_0px_#E4002B]"
                      : "border-transparent text-slate-700 hover:text-slate-950 hover:bg-stone-100"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}

            {isAdmin && (
              <Link
                href="/admin"
                className={`px-3 py-1.5 text-xs font-bold flex items-center space-x-1.5 border transition-all ${
                  pathname.startsWith("/admin")
                    ? "bg-slate-950 text-white border-slate-950"
                    : "bg-stone-100 text-slate-900 border-slate-900 hover:bg-stone-200"
                }`}
              >
                <Shield className="w-3.5 h-3.5 text-[#E4002B] shrink-0" />
                <span>Admin Portal</span>
              </Link>
            )}
          </nav>
        </div>

        {/* Right: Language Toggle, User Info & Sign Out */}
        <div className="flex items-center space-x-2.5 shrink-0">
          {onToggleLang && (
            <button
              type="button"
              onClick={onToggleLang}
              className="px-2.5 py-1.5 text-xs font-bold border border-slate-900 bg-white hover:bg-stone-100 text-slate-800 flex items-center space-x-1.5 shadow-[2px_2px_0px_0px_#111827] cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-[#E4002B]" />
              <span>{lang === "tl" ? "Tagalog" : "English"}</span>
            </button>
          )}

          <div className="hidden md:flex items-center space-x-2.5 pl-3 border-l border-stone-300">
            <div className="text-right">
              <div className="text-xs font-bold text-slate-900 leading-tight flex items-center justify-end space-x-1.5">
                <span>{user.name}</span>
                {isAdmin && (
                  <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 bg-slate-900 text-white">
                    ADMIN
                  </span>
                )}
              </div>
              <div className="text-[11px] text-slate-500 leading-tight">
                {user.branchCode} • {user.branchName}
              </div>
            </div>
            <div className="w-8 h-8 border border-slate-900 bg-[#FAF8F5] flex items-center justify-center text-slate-800">
              <User className="w-4 h-4" />
            </div>
          </div>

          <button
            type="button"
            onClick={handleSignOut}
            className="px-2.5 py-1.5 text-xs font-bold border border-slate-900 bg-white hover:bg-stone-100 text-slate-800 flex items-center space-x-1 cursor-pointer"
            title="Switch Account / Sign Out"
          >
            <LogOut className="w-3.5 h-3.5 text-slate-700" />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="lg:hidden flex items-center overflow-x-auto border-t border-stone-200 px-3 py-1.5 gap-1.5 bg-[#FAF8F5]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`px-2.5 py-1 text-xs font-bold whitespace-nowrap flex items-center space-x-1 border ${
                isActive
                  ? "bg-[#FFF1F2] text-[#E4002B] border-[#E4002B]"
                  : "bg-white border-stone-300 text-slate-700"
              }`}
            >
              <Icon className="w-3 h-3 shrink-0" />
              <span>{item.label}</span>
            </Link>
          );
        })}
        {isAdmin && (
          <Link
            href="/admin"
            className="px-2.5 py-1 text-xs font-bold whitespace-nowrap flex items-center space-x-1 border bg-slate-900 text-white border-slate-900"
          >
            <Shield className="w-3 h-3 text-[#E4002B]" />
            <span>Admin Portal</span>
          </Link>
        )}
      </div>
    </header>
  );
}
