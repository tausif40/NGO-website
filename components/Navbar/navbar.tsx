'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { UserRole } from '@/types/types';
import { AttendanceButton } from '../Common/Attendance/AttendanceButton';
import { users } from '@/lib/auth';
import { User } from '@/types/types';

interface NavbarProps {
  role: UserRole;
  name: string;
  onToggleSidebar: () => void;
}

export function Navbar({ name, onToggleSidebar }: NavbarProps) {
  const [mounted, setMounted] = useState(false);
  const [role, setRole] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser !== null) {
      const userObject: User = JSON.parse(storedUser);
      setRole(userObject.role)
    }
  }, [])

  useEffect(() => {
    setMounted(true);
  }, []); 

  if (!mounted) return null;
  const currentUser = users[0];

  return (
    <div className="border-b bg-white">
      <div className="flex h-16 items-center px-4">
        <Button variant="ghost" size="icon" onClick={onToggleSidebar}>
          <Menu className="h-5 w-5" />
        </Button>
        <div className="ml-auto flex items-center gap-8 mr-4">
          {role !== 'admin' && <AttendanceButton user={currentUser} />}
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