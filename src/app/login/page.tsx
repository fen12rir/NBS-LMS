"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { setSessionUser } from "@/components/layout/lms-header";
import { StationeryHeaderPattern } from "@/components/brand/stationery-pattern";
import { LogIn, Shield, Building2, Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleTraineeLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setSessionUser({
      name: "Maria Santos",
      email: email || "maria.santos@nbs.com.ph",
      branchCode: "2438",
      branchName: "NBS SM North Edsa",
      role: "trainee",
    });
    router.push("/dashboard");
  };

  const handleAdminLogin = () => {
    setSessionUser({
      name: "NBS System Admin",
      email: "admin@nbs.com.ph",
      branchCode: "HQ01",
      branchName: "NBS Head Office",
      role: "super_admin",
    });
    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col justify-between">
      <div className="bg-slate-950 text-stone-200 py-2 px-4 text-center text-xs font-mono">
        National Book Store • Training Academy LMS
      </div>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md nbs-paper-card overflow-hidden">
          <StationeryHeaderPattern className="h-20 w-full bg-white border-b-2 border-slate-900" />

          <div className="p-6 sm:p-8 space-y-5">
            <div className="flex items-center space-x-3 pb-4 border-b border-stone-200">
              <div className="bg-[#E4002B] text-white px-2.5 py-1 font-heading font-black text-xl tracking-tighter border border-slate-950 shadow-[2px_2px_0px_0px_#111827]">
                NBS
              </div>
              <div>
                <h1 className="font-heading font-black text-lg text-slate-950">
                  Staff Sign In
                </h1>
                <p className="text-xs text-slate-500">
                  Employee Learning &amp; Certification Portal
                </p>
              </div>
            </div>

            <form onSubmit={handleTraineeLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. maria.santos@nbs.com.ph"
                    className="w-full pl-9 pr-3 py-2 text-xs border-2 border-slate-900 bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3 py-2 text-xs border-2 border-slate-900 bg-white focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#E4002B] hover:bg-[#C10024] text-white font-heading font-bold text-xs uppercase border border-slate-950 shadow-[2px_2px_0px_0px_#111827] flex items-center justify-center space-x-2 cursor-pointer"
              >
                <LogIn className="w-4 h-4" />
                <span>Sign In to Learning Portal</span>
              </button>
            </form>

            {/* Role Switcher */}
            <div className="pt-4 border-t border-stone-200 space-y-2.5">
              <div className="text-[11px] font-mono uppercase text-center text-slate-500 font-bold">
                Quick Portal Access
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => handleTraineeLogin()}
                  className="py-2 px-3 bg-white hover:bg-stone-100 text-slate-900 border-2 border-slate-900 text-xs font-bold flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <Building2 className="w-3.5 h-3.5 text-[#E4002B]" />
                  <span>Trainee View</span>
                </button>
                <button
                  type="button"
                  onClick={handleAdminLogin}
                  className="py-2 px-3 bg-slate-950 hover:bg-slate-800 text-white border-2 border-slate-950 text-xs font-bold flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <Shield className="w-3.5 h-3.5 text-[#E4002B]" />
                  <span>Admin Portal</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-stone-300 py-3 text-center text-xs text-slate-500">
        National Book Store, Inc. • Employee Learning Management System
      </footer>
    </div>
  );
}
