"use client"
import { useUserStore } from "@/lib/store/useUserStore";
import Link from "next/link";

export default function DashboardLayout({ children }) {

  const role = useUserStore((state) => state.role);


  const sidebarItems = {
    student: [
      { label: "Study Materials", href: "/dashboard/study-materials" },
      { label: "Mock AI Interview", href: "/dashboard/mock-ai" },
      { label: "Alumni Community", href: "/dashboard/alumni" },
      { label: "Resume Samples", href: "/dashboard/resume-samples" },
      { label: "Request Letter Format", href: "/dashboard/request-letter" },
    ],
    teacher: [
      { label: "Student List", href: "/dashboard/student-list" },
      { label: "Markup Report", href: "/dashboard/markup-report" },
    ],
  };

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 p-4 bg-neutral-900">
        {sidebarItems[role].map((item => (
          <Link
            key={item.href}
            href={item.href} 
            className="block p-2 hover:bg-neutral-800 rounded"
            >
            {item.label}
          </Link>
        )))}
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
