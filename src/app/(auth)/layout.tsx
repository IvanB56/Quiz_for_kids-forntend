import React from 'react';
import {redirect} from 'next/navigation';
import {checkAuth} from "@/features/auth/checkAuth";

export default async function AuthLayout({children}: { children: React.ReactNode }) {
	const {statusText, status, error} = await checkAuth();

	if (status === 401 || statusText === 'Unauthorized' || error) {
		redirect('/login');
	}

	return <section>{children}</section>;
}
