'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Employees() {
	return (
		<div className="space-y-8">
			<div>
				<h2 className="text-3xl font-bold tracking-tight">Employee Management</h2>
				<p className="text-muted-foreground">
					{"Manage your organization's workforce"}
				</p>
			</div>
			<Card>
				<CardHeader>
					<CardTitle>Employee Directory</CardTitle>
				</CardHeader>
				<CardContent>
					Employee list will be implemented here
				</CardContent>
			</Card>
		</div>
	);
}