'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Projects() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <p className="text-muted-foreground">
          Manage and monitor project progress
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Active Projects</CardTitle>
        </CardHeader>
        <CardContent>
          Project list will be implemented here
        </CardContent>
      </Card>
    </div>
  );
}