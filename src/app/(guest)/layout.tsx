import React from 'react';
import { HeaderGuest } from '@widgets';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { API_URL } from '@/shared/constants';

const { API_URL: urlServer } = process.env;

export default async function GuestLayout({ children }: { children: React.ReactNode }) {
	const cookie = (await cookies()).getAll();

	try {
		const resp: Response = await fetch(`${urlServer}/api/auth-check`, {
			credentials: 'include',
			headers: {
				Origin: API_URL,
				Accept: 'application/json',
				Cookie: cookie.reduce((acc, item) => (acc += `${item.name}=${item.value};`), ''),
			},
		});

		if (resp.status === 200 || resp.statusText === 'OK') {
			redirect('/profile');
		}
	} catch (err) {
		console.log('error fetch [Guest layout]', err);
	}
	return (
		<>
			<HeaderGuest cn={{ border: 'border-b-[1px]', padding: 'py-[20px]' }} />
			{children}
		</>
	);
}
