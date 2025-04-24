'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/utils';
import { LogOut } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { roleBasedOptions } from './sidebarRoles';
import { SidebarProps } from '@/types/types';

export function Sidebar({ role, collapsed }: SidebarProps) {
  const pathname = usePathname();
  const sidebarItems = roleBasedOptions[role];

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/auth/login';
  };

  return (
    <TooltipProvider>
      <div className={cn(
        "flex h-screen flex-col justify-between border-r bg-gray-50/40 transition-all duration-300",
        collapsed ? "w-20" : "w-64"
      )}>
        <div className="px-4 py-6">
          {collapsed ? (
            <div className="flex items-center gap-2 px-2">
              <h2 className="text-lg font-semibold capitalize">NGO</h2>
            </div>
          ) : (
            <div className="flex items-center gap-2 px-2">
              <h2 className="text-lg font-semibold capitalize">{role} Dashboard</h2>
            </div>
          )}
          <nav className="mt-3 pt-3 flex flex-1 flex-col border-t">
            <ul role="list" className="flex flex-1 flex-col gap-1">
              {sidebarItems?.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-900",
                            pathname === item.href
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          )}
                        >
                          <Icon className="h-5 w-5 shrink-0" />
                          {!collapsed && item.name}
                        </Link>
                      </TooltipTrigger>
                      {collapsed && (
                        <TooltipContent side="right">
                          {item.name}
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="mt-auto border-t p-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={handleLogout}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50",
                  collapsed && "justify-center"
                )}
              >
                <LogOut className="h-5 w-5" />
                {!collapsed && "Logout"}
              </button>
            </TooltipTrigger>
            {collapsed && (
              <TooltipContent side="right">
                Logout
              </TooltipContent>
            )}
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}