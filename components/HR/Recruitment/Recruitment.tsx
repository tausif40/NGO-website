'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Recruitment() {
	return (
		<div className="space-y-8">
			<div>
				<h2 className="text-3xl font-bold tracking-tight">Recruitment</h2>
				<p className="text-muted-foreground">
					Manage job postings and applications
				</p>
			</div>
			<Card>
				<CardHeader>
					<CardTitle>Active Job Postings</CardTitle>
				</CardHeader>
				<CardContent>
					Job postings will be implemented here
				</CardContent>
			</Card>
		</div>
	);
}