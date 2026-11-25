"use client";

import React from "react";
import { LmsHeader } from "@/components/layout/lms-header";

const BRANCH_RECORDS = [
  { code: "2438", name: "NBS SM North Edsa", region: "NCR - North", enrolled: 24, certified: 19, avgScore: "91%" },
  { code: "2448", name: "NBS SM Megamall", region: "NCR - Central", enrolled: 28, certified: 22, avgScore: "89%" },
  { code: "2445", name: "NBS Robinsons Ortigas", region: "NCR - East", enrolled: 16, certified: 14, avgScore: "93%" },
  { code: "2447", name: "NBS Shangrila", region: "NCR - Central", enrolled: 15, certified: 11, avgScore: "87%" },
  { code: "2211", name: "NBS SM Clark", region: "Region III - Central Luzon", enrolled: 18, certified: 15, avgScore: "90%" },
  { code: "HQ01", name: "NBS Head Office", region: "NCR - Mandaluyong", enrolled: 42, certified: 38, avgScore: "94%" },
];

export default function AdminPortalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <LmsHeader />

      <main className="max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 space-y-6">
        <div className="nbs-paper-card p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="nbs-slide-pill">ADMIN PORTAL</span>
            <h1 className="font-heading font-black text-xl sm:text-2xl text-slate-950 mt-1">
              Branch Training &amp; Certification Overview
            </h1>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-slate-600">Course:</span>
            <select className="text-xs font-bold border-2 border-slate-900 bg-white px-3 py-2">
              <option>Course 01: Cybersecurity Awareness Training</option>
              <option disabled>Course 02: Data Privacy Act (Coming Soon)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Total Trainees", val: "143", sub: "11 Branches + HQ" },
            { label: "Certified Staff", val: "119", sub: "83% Completed" },
            { label: "Quiz Pass Rate", val: "91%", sub: "Passing score ≥80%" },
            { label: "Pending Approvals", val: "4", sub: "New sign-ups" },
          ].map((kpi) => (
            <div key={kpi.label} className="nbs-paper-card p-4">
              <div className="text-xs font-bold uppercase text-slate-500">{kpi.label}</div>
              <div className="font-heading font-black text-2xl sm:text-3xl text-slate-950 mt-1">{kpi.val}</div>
              <div className="text-xs text-[#E4002B] font-bold mt-0.5">{kpi.sub}</div>
            </div>
          ))}
        </div>

        <div className="nbs-paper-card overflow-hidden">
          <div className="bg-slate-950 text-white px-5 py-3 flex items-center justify-between">
            <span className="font-heading font-bold text-xs uppercase tracking-wider">
              Branch Progress (Course 01: Cybersecurity)
            </span>
            <span className="text-xs font-mono text-stone-300">DB: nbs_lms</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#FAF8F5] border-b-2 border-slate-900 font-bold text-slate-700">
                  <th className="py-3 px-4">Code</th>
                  <th className="py-3 px-4">Branch Name</th>
                  <th className="py-3 px-4">Region</th>
                  <th className="py-3 px-4">Enrolled</th>
                  <th className="py-3 px-4">Certified</th>
                  <th className="py-3 px-4">Avg Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {BRANCH_RECORDS.map((b) => (
                  <tr key={b.code} className="hover:bg-[#FAF8F5]">
                    <td className="py-3 px-4 font-mono font-bold text-[#E4002B]">{b.code}</td>
                    <td className="py-3 px-4 font-bold text-slate-900">{b.name}</td>
                    <td className="py-3 px-4 text-slate-600">{b.region}</td>
                    <td className="py-3 px-4 font-mono">{b.enrolled}</td>
                    <td className="py-3 px-4 font-mono font-bold text-emerald-700">{b.certified}</td>
                    <td className="py-3 px-4 font-mono font-bold">{b.avgScore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
