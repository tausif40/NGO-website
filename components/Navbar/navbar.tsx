'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { UserRole } from '@/types/types';
import { AttendanceButton } from '../Common/Attendance/AttendanceButton';
import { users } from '@/lib/auth';

interface NavbarProps {
  role: UserRole;
  name: string;
  onToggleSidebar: () => void;
}

export function Navbar({ role, name, onToggleSidebar }: NavbarProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="border-b bg-white">
      <div className="flex h-16 items-center px-4">
        <Button variant="ghost" size="icon" onClick={onToggleSidebar}>
          <Menu className="h-5 w-5" />
        </Button>
        <div className="ml-auto flex items-center gap-8 mr-4">
          <AttendanceButton user={users} />
          {/* <div className="text-sm">
            <span className="text-muted-foreground">Logged in as: </span>
            <span className="font-medium capitalize">{role}</span>
          </div> */}
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
            {name[0].toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
}