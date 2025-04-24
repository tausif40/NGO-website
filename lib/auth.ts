import { User } from "@/types/types";

export const users: User[] = [
	{
		id: "1",
		email: "admin@example.com",
		password: "password",
		role: "admin",
		name: "admin"
	},
	{
		id: "2",
		email: "projectmanager@example.com",
		password: "password",
		role: "manager",
		name: "Project Manager"
	},
	{
		id: "3",
		email: "hr@example.com",
		password: "password",
		role: "hr",
		name: "HR Admin"
	},
	{
		id: "4",
		email: "finance@example.com",
		password: "password",
		role: "finance",
		name: "finance Manager"
	},
	{
		id: "5",
		email: "employee@example.com",
		password: "password",
		role: "employee",
		name: "John Employee"
	}
];
