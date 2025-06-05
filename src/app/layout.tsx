import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lifeline",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased`}>
        <div className="flex h-screen font-[family-name:var(--font-nunito)] bg-[#1c4f46]">
          <aside className="w-50 bg-[#1c4f46] text-white p-4 space-y-4">
            <h2 className="text-xl font-bold">Lifeline</h2>
            <Input type="email" placeholder="Search" />
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
              <Link
                href="/logout"
                className="block hover:underline text-red-300"
              >
                Logout
              </Link>
            </nav>
          </aside>

          <main className="flex-1 bg-gray-50 p-6 overflow-y-auto rounded-xl m-2">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
