export type UserRole = "admin" | "manager" | "hr" | "finance" | "employee";

export interface User {
	email: string;
	password: string;
	role: UserRole;
	name: string;
}

export interface SidebarProps {
	role: UserRole;
	collapsed: boolean;
}

export interface Users {
	id: string
	name: string
	email: string
	role: UserRole
	image?: string
}