'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';

export default function Finance({
	children,
}: {
	children: React.ReactNode;
}) {
	return <DashboardLayout>{children}</DashboardLayout>;
}