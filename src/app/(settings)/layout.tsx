import React from 'react';
import {HeaderGuest, SettingsAside} from "@widgets";
import {Heading, Text} from "@components";
import {redirect} from 'next/navigation';
import {checkAuth} from "@/features/auth/checkAuth";
import '../../assets/styles/settings.styles.scss';

export default async function SettingsLayout({children}: { children: React.ReactNode }) {
	const {statusText, status, error} = await checkAuth();

	if (status === 401 || statusText === 'Unauthorized') {
		redirect('/login');
	// } else if (error?.status === 'error') {
	// 	redirect('/404')
	}

	return (
		<>
			{error?.status === 'error' && (<Text data={{text: JSON.stringify(error), tag: 'p'}} cn={{color: 'text-primary-grey'}}  />)}
			<HeaderGuest cn={{border: 'border-b-[1px]', padding: 'py-[20px]'}} data={{page: 'settings'}}/>
			<main className={'container bg-cyan-light'}>
				<Heading data={{tag: 'h1', text: 'Настройки профиля'}} cn={{margin: 'mt-14 max-xl:mt-8'}}/>
				<div className={'flex gap-16 max-xl:gap-8 mt-14 max-xl:mt-8'}>
					<SettingsAside/>
					{children}
				</div>
			</main>
		</>
	);
}
