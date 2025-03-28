'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Team() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Team Management</h2>
        <p className="text-muted-foreground">
          Manage your team members and their assignments
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
        </CardHeader>
        <CardContent>
          Team member list will be implemented here
        </CardContent>
      </Card>
    </div>
  );
}