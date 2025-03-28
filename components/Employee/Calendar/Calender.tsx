'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Calendar() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Calendar</h2>
        <p className="text-muted-foreground">
          Manage your schedule and events
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Your Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          Calendar will be implemented here
        </CardContent>
      </Card>
    </div>
  );
}