import React from 'react';
import {HeaderGuest} from '@widgets';
import {redirect} from 'next/navigation';
import {checkAuth} from "@/features/auth/checkAuth";
import {Text} from "@components";


export default async function GuestLayout({children}: { children: React.ReactNode }) {
	const {statusText, status, error} = await checkAuth();


	if (status === 200 || statusText === 'OK') {
		redirect('/profile');
	// } else if (error?.status === 'error') {
	// 	redirect('/404')
	}

	return (
		<>
			{error?.status === 'error' && (<Text data={{text: JSON.stringify(error), tag: 'p'}} cn={{color: 'text-primary-grey'}}  />)}
			<HeaderGuest data={{page: 'guest'}} cn={{border: 'border-b-[1px]', padding: 'py-[20px]'}}/>
			<main>{children}</main>
		</>
	);
}
