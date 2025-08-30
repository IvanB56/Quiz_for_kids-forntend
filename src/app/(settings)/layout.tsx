import React from 'react';
import {HeaderGuest, SettingsAside} from "@widgets";
import {Heading} from "@components";
import '@assets/styles/settings.styles.scss';
import ProfileSettingsProvider from "@/shared/providers/ProfileSettingsProvider";

export default async function SettingsLayout({children}: { children: React.ReactNode }) {
	const pagesLink = [
		{name: 'Профиль', href: '/settings/profile'},
		{name: 'Изменить email', href: '/settings/email'},
		{name: 'Сменить пароль', href: '/settings/password'},
		// {name: 'Настройки уведомлений', href: '/settings/notifications'},
		{name: 'Мои дети', href: '/settings/child'},
	];

	return (
		<ProfileSettingsProvider>
			<HeaderGuest cn={{border: 'border-b-[1px]', padding: 'py-[20px]'}} data={{page: 'settings'}}/>
			<main className={'container bg-cyan-light'}>
				<Heading data={{tag: 'h1', text: 'Настройки профиля'}} cn={{margin: 'mt-14 max-xl:mt-8'}}/>
				<div className={'flex gap-16 max-xl:gap-8 mt-14 max-xl:mt-8'}>
					<SettingsAside data={{pagesLink}}/>
					{children}
				</div>
			</main>
		</ProfileSettingsProvider>
	);
}
