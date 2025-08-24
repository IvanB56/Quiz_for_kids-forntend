import React from 'react';
import {redirect} from 'next/navigation';
import {checkAuth} from "@/features/auth/checkAuth";

export default async function GuestLayout({children}: { children: React.ReactNode }) {
	const {statusText, status} = await checkAuth();


	if (status === 200 || statusText === 'OK') {
		redirect('/profile');
	}

	return (
		<>
			<main className={"index-page"}>{children}</main>
		</>
	);
}
