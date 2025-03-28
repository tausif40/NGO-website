import {
	LayoutDashboard,
	Users,
	Settings,
	BarChart3,
	FileText,
	Calendar,
	ClipboardList,
	Building2,
	FolderKanban,
	Briefcase,
} from 'lucide-react';

export const roleBasedOptions = {
	admin: [
		{ name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
		{ name: 'Employees', href: '/admin/team', icon: Users },
		{ name: 'Recruitment', href: '/admin/projects', icon: Building2 },
		{ name: 'All Projects', href: '/admin/all-projects', icon: FolderKanban },
		{ name: 'All Users', href: '/admin/all-users', icon: Users },
		{ name: 'Reports', href: '/admin/analytics', icon: FileText },
		// { name: 'Settings', href: '/admin/settings', icon: Settings },
	],
	finance: [
		{ name: 'Dashboard', href: '/finance/dashboard', icon: LayoutDashboard },
		{ name: 'Employees', href: '/finance/team', icon: Users },
		{ name: 'Recruitment', href: '/finance/projects', icon: Building2 },
		{ name: 'Reports', href: '/finance/analytics', icon: FileText },
		{ name: 'Settings', href: '/finance/settings', icon: Settings },
	],
	hr: [
		{ name: 'Dashboard', href: '/hr/dashboard', icon: LayoutDashboard },
		{ name: 'Employees', href: '/hr/employees', icon: Users },
		{ name: 'Recruitment', href: '/hr/recruitment', icon: Building2 },
		{ name: 'Reports', href: '/hr/reports', icon: FileText },
		{ name: 'Settings', href: '/hr/settings', icon: Settings },
	],
	manager: [
		{ name: 'Dashboard', href: '/manager/dashboard', icon: LayoutDashboard },
		{ name: 'Team', href: '/manager/team', icon: Users },
		{ name: 'Projects', href: '/manager/projects', icon: Briefcase },
		{ name: 'Analytics', href: '/manager/analytics', icon: BarChart3 },
		{ name: 'Settings', href: '/manager/settings', icon: Settings },
	],
	employee: [
		{ name: 'Dashboard', href: '/employee/dashboard', icon: LayoutDashboard },
		{ name: 'Tasks', href: '/employee/tasks', icon: ClipboardList },
		{ name: 'Calendar', href: '/employee/calendar', icon: Calendar },
		{ name: 'Settings', href: '/employee/settings', icon: Settings },
	],
};