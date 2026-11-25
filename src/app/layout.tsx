import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NBS Academy LMS - Staff Training & Certification Portal",
  description:
    "National Book Store Multi-Course Learning Management System featuring Cybersecurity Awareness Training, Interactive Scenario Quizzes, and Verified E-Certificates.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-slate-900">
        {children}
      </body>
    </html>
  );
}
