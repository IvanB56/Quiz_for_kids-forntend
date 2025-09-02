import React from 'react';
import {ProfileChildProvider} from "@shared";
import {ProfileAside} from "@widgets";
import '@assets/styles/child.scss'


export default async function AuthLayout({children}: { children: React.ReactNode }) {
	const pagesLink = [
		{name: 'Правила', href: '/child/rules'},
		{name: 'Вопросы от Алины', href: '/child/questions'},
		{name: 'Задания от Алины', href: '/child/tasks'},
		{name: 'Обучение от Алины', href: '/child/education'},
		{name: 'Заработай реальные деньги', href: '/child/earnings'},
		{name: 'Мой кошелек', href: '/child/wallet'},
		{name: 'Настройки личного кабинета', href: '/child/settings'},
	];

	return (
		<ProfileChildProvider>
			<main className="child-main">
				<div className="flex">
					<ProfileAside pagesLink={pagesLink}/>
					<div className={'flex flex-col w-full p-[60px] h-[100dvh] overflow-auto'}>
						{children}
					</div>
				</div>
			</main>
		</ProfileChildProvider>
	);
}
