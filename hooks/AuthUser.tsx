"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { User } from '@/lib/auth';

export function AuthUser() {
	const router = useRouter();
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const userStr = localStorage.getItem('user');
		if (userStr) {
			setUser(JSON.parse(userStr));
		}
	}, [router]);

	return user;
}
