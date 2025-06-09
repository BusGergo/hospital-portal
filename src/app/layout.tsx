import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import {
	BriefcaseMedical,
	CalendarFold,
	LayoutDashboard,
	UserRoundPen,
} from 'lucide-react';

const nunito = Nunito({
	variable: '--font-nunito',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Lifeline',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${nunito.variable} antialiased`}>
				<div className="flex h-screen font-[family-name:var(--font-nunito)] bg-[var(--color-background)]">
					<aside className="w-55 bg-[var(--color-background)] text-white p-4 space-y-4">
						<h2 className="text-xl font-bold text-black">Lifeline</h2>
						<Input type="email" placeholder="Search" />
						<nav className="flex flex-col gap-1">
							<Link
								href="/dashboard"
								className="text-black flex gap-3 font-bold hover:bg-accent duration-200 p-3 rounded-xl"
							>
								<LayoutDashboard />
								Dashboard
							</Link>
							<Link
								href="/appointments"
								className="text-black flex gap-3 font-bold hover:bg-accent duration-200 p-3 rounded-xl"
							>
								<CalendarFold />
								Appointments
							</Link>
							<Link
								href="/doctors"
								className="text-black flex gap-3 font-bold hover:bg-accent duration-200 p-3 rounded-xl"
							>
								<BriefcaseMedical />
								Doctors
							</Link>
							<Link
								href="/profile"
								className="text-black flex gap-3 font-bold hover:bg-accent duration-200 p-3 rounded-xl"
							>
								<UserRoundPen />
								Profile
							</Link>
						</nav>
					</aside>

					<main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
						{children}
					</main>
				</div>
			</body>
		</html>
	);
}
