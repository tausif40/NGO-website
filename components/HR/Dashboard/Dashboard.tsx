'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, ArrowUpRight, ClipboardList, Building2 } from 'lucide-react';

const stats = [
	{
		title: 'Total Employees',
		value: '234',
		change: '+12.5%',
		icon: Users,
	},
	{
		title: 'Open Positions',
		value: '15',
		change: '+5.2%',
		icon: Building2,
	},
	{
		title: 'Applications',
		value: '432',
		change: '+18.3%',
		icon: ClipboardList,
	},
];

export default function HRDashboard() {
	return (
		<div className="space-y-8">
			{/* <div>
				<h2 className="text-3xl font-bold tracking-tight">HR Dashboard</h2>
				<p className="text-muted-foreground">
					Monitor employee statistics and recruitment metrics
				</p>
			</div> */}

			<div className="grid gap-4 md:grid-cols-3">
				{stats.map((stat) => {
					const Icon = stat.icon;
					return (
						<Card key={stat.title}>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">
									{stat.title}
								</CardTitle>
								<Icon className="h-4 w-4 text-muted-foreground" />
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">{stat.value}</div>
								<div className="flex items-center text-sm text-green-600">
									{stat.change}
									<ArrowUpRight className="ml-1 h-4 w-4" />
								</div>
							</CardContent>
						</Card>
					);
				})}
			</div>
		</div>
	);
}