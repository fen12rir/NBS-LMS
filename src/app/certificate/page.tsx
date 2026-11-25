"use client";

import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { LmsHeader, getSessionUser } from "@/components/layout/lms-header";
import { StationeryHeaderPattern } from "@/components/brand/stationery-pattern";
import { QRCodeSVG } from "qrcode.react";
import { Download } from "lucide-react";

export default function CertificatePage() {
  const certificateId = "NBS-CYBER-2027-2438-0089";
  const certRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const user = getSessionUser();

  const handleDownloadPdf = async () => {
    if (!certRef.current) return;
    setIsDownloading(true);
    try {
      const canvas = await html2canvas(certRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const ratio = canvas.width / canvas.height;
      const imgWidth = Math.min(pageWidth - 16, (pageHeight - 16) * ratio);
      const imgHeight = imgWidth / ratio;
      const x = (pageWidth - imgWidth) / 2;
      const y = (pageHeight - imgHeight) / 2;
      pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
      pdf.save(`NBS-Cybersecurity-Certificate-${user.branchCode}.pdf`);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <LmsHeader />

      <main className="max-w-4xl w-full mx-auto px-4 sm:px-8 py-8 space-y-6">
        <div className="nbs-paper-card p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="nbs-slide-pill">OFFICIAL E-CERTIFICATE</span>
            <h1 className="font-heading font-black text-xl text-slate-950 mt-1">
              Course Completion Certificate
            </h1>
            <p className="text-xs text-slate-600">
              Official National Book Store completion certificate with verification QR code.
            </p>
          </div>
          <button
            type="button"
            onClick={handleDownloadPdf}
            disabled={isDownloading}
            className="px-4 py-2.5 bg-[#E4002B] hover:bg-[#C10024] disabled:opacity-60 text-white font-heading font-bold text-xs uppercase border border-slate-950 shadow-[2px_2px_0px_0px_#111827] flex items-center space-x-2 shrink-0 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>
              {isDownloading ? "Generating PDF..." : "Download PDF"}
            </span>
          </button>
        </div>

        {/* Certificate with Slide 1 Vector Red Stationery Line-Art Header */}
        <div
          ref={certRef}
          className="bg-white border-4 border-[#E4002B] p-2 shadow-[6px_6px_0px_0px_#111827]"
        >
          <div className="border-2 border-slate-900 bg-white pb-10 overflow-hidden">
            <StationeryHeaderPattern className="h-24 sm:h-28 w-full" />

            <div className="px-6 sm:px-12 pt-6 text-center space-y-5">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-slate-500">
                  NATIONAL BOOK STORE • TRAINING ACADEMY
                </div>
                <h2 className="font-heading font-black text-2xl sm:text-4xl text-slate-950 mt-1">
                  CERTIFICATE OF COMPLETION
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600">
                This certifies that
              </p>

              <div>
                <div className="font-heading font-black text-2xl sm:text-4xl text-[#8B0000] border-b-2 border-slate-900 inline-block px-8 pb-1 uppercase">
                  {user.name}
                </div>
                <div className="text-xs font-mono text-slate-500 mt-1.5">
                  Branch {user.branchCode} • {user.branchName}
                </div>
              </div>

              <div className="max-w-lg mx-auto bg-[#FAF8F5] border-2 border-slate-900 p-4 shadow-[3px_3px_0px_0px_#E4002B]">
                <div className="text-[10px] font-mono uppercase text-slate-500">
                  HAS COMPLETED THE COURSE
                </div>
                <div className="font-heading font-black text-base sm:text-xl text-slate-950 mt-0.5">
                  CYBERSECURITY AWARENESS TRAINING
                </div>
                <div className="text-xs text-slate-600 mt-0.5">
                  PCI DSS Card Security • Retail Threat Detection • Incident Escalation
                </div>
              </div>

              <div className="pt-5 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-left border-t border-stone-300">
                <div className="space-y-1 text-xs font-mono">
                  <div>
                    <span className="text-slate-400">CERTIFICATE ID:</span>{" "}
                    <strong className="text-slate-900">{certificateId}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400">DATE ISSUED:</span>{" "}
                    <strong className="text-slate-900">January 10, 2027</strong>
                  </div>
                </div>

                <div className="bg-[#FAF8F5] p-2 border border-slate-900">
                  <QRCodeSVG value={certificateId} size={64} level="M" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
