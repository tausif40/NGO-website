export type UserRole = "admin" | "manager" | "hr" | "finance" | "employee";

export interface User {
	id: string
	name: string;
	email: string;
	password: string;
	role: UserRole;
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