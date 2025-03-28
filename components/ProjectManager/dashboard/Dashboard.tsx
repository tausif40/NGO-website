'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, DollarSign, ArrowUpRight, Briefcase } from 'lucide-react';

const stats = [
  {
    title: 'Active Projects',
    value: '12',
    change: '+8.1%',
    icon: Briefcase,
  },
  {
    title: 'Team Members',
    value: '24',
    change: '+15.2%',
    icon: Users,
  },
  {
    title: 'Project Revenue',
    value: '$45,231',
    change: '+20.1%',
    icon: DollarSign,
  },
];

export default function ManagerDashboard() {
  return (
    <div className="space-y-8">
      {/* <div>
        <h2 className="text-3xl font-bold tracking-tight">Manager Dashboard</h2>
        <p className="text-muted-foreground">
          Track your team's performance and project metrics
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