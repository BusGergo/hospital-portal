import Link from "next/link";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen font-[family-name:var(--font-nunito)] bg-[#1c4f46]">
      <aside className="w-50 bg-[#1c4f46] text-white p-4 space-y-4">
        <h2 className="text-xl font-bold">Lifeline</h2>
        <nav className="space-y-2">
          <Link href="/dashboard" className="block hover:underline">
            Dashboard
          </Link>
          <Link href="/appointments" className="block hover:underline">
            Appointments
          </Link>
          <Link href="/doctors" className="block hover:underline">
            Doctors
          </Link>
          <Link href="/profile" className="block hover:underline">
            Profile
          </Link>
          <Link href="/logout" className="block hover:underline text-red-300">
            Logout
          </Link>
        </nav>
      </aside>

      <main className="flex-1 bg-gray-50 p-6 overflow-y-auto rounded-xl m-2">
        {children}
      </main>
    </div>
  );
}
