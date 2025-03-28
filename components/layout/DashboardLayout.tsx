'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from '@/components/Navbar/sidebar';
import { Navbar } from '@/components/Navbar/navbar';
import { User } from '@/types/types';

export default function RoleLayout({ children, }: { children: React.ReactNode }) {
	const router = useRouter();
	const [user, setUser] = useState<User | null>(null);
	const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

	useEffect(() => {
		const userStr = localStorage.getItem('user');
		if (!userStr) {
			router.push('/auth/login');
		} else {
			setUser(JSON.parse(userStr));
		}
	}, [router]);

	if (!user) return null;

	return (
		<div className="flex h-screen">
			<Sidebar role={user.role} collapsed={sidebarCollapsed} />
			<div className="flex-1 flex flex-col">
				<Navbar
					role={user.role}
					name={user.name}
					onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
				/>
				<main className="flex-1 overflow-y-auto bg-gray-50 p-8">
					{children}
				</main>
			</div>
		</div>
	);
}