import React from 'react';
import {redirect} from 'next/navigation';
import {checkAuth} from "@/features/auth/checkAuth";
import {Text} from "@components";

export default async function AuthLayout({children}: { children: React.ReactNode }) {
	const {statusText, status, error} = await checkAuth();

	if (status === 401 || statusText === 'Unauthorized') {
		redirect('/login');
	}

	return (
		<section>
			{error?.status === 'error' && (<Text data={{text: JSON.stringify(error), tag: 'p'}} cn={{color: 'text-primary-grey'}}/>)}
			{children}
		</section>
	);
}
