import React from 'react';
import {redirect} from "next/navigation";
import {checkAuth} from "@/features/auth/checkAuth";
import {HeaderGuest, SettingsAside} from "@widgets";
import {Heading} from "@components";

export default async function SettingsLayout({children}: { children: React.ReactNode }) {
	const {statusText, status, error} = await checkAuth();

	if (status === 401 || statusText === 'Unauthorized') {
		redirect('/login');
	} else if (error?.status === 'error') {
		redirect('/404')
	}

	return (
		<>
			<HeaderGuest cn={{border: 'border-b-[1px]', padding: 'py-[20px]'}} data={{page: 'settings'}}/>
			<main className={'container'}>
				<Heading data={{tag: 'h1', text: 'Настройки профиля'}}/>
				<div className={'flex'}>
					<SettingsAside/>
					{children}
				</div>
			</main>
		</>
	);
}
