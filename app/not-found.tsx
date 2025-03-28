"use client"

import { useRouter } from 'next/navigation';
import React from 'react'

function NotFound() {
	const router = useRouter();

	const handelBack = () => {
		router.back();
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-4 text-center">
			<h1 className="text-6xl font-bold mb-4">404</h1>
			<p className="text-xl mb-6">{"Sorry, the page you're looking for doesn't exist."}</p>
			<p className="text-blue-500 hover:underline cursor-pointer" onClick={handelBack}>Go back</p>
		</div>
	)
}

export default NotFound