'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Tasks() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Task Management</h2>
        <p className="text-muted-foreground">
          View and manage your assigned tasks
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Your Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          Task list will be implemented here
        </CardContent>
      </Card>
    </div>
  );
}