import React from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { API_URL } from '@/shared/constants';

const { API_URL: urlServer } = process.env;

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
	const cookie = (await cookies()).getAll();

	const resp: Response = await fetch(`${urlServer}/api/auth-check`, {
		credentials: 'include',
		headers: {
			Origin: API_URL,
			Accept: 'application/json',
			Cookie: cookie.reduce((acc, item) => (acc += `${item.name}=${item.value};`), ''),
		},
	});

	if (resp.status === 401 || resp.statusText === 'Unauthorized') {
		redirect('/login');
	}

	return <section>{children}</section>;
}
