import React from 'react';
import {ProfileChildProvider} from "@shared";
import {ProfileAside} from "@widgets";
import '@assets/styles/child.scss'


export default async function AuthLayout({children}: { children: React.ReactNode }) {
	const pagesLink = [
		{name: 'Игровой договор', href: '/child/rules'},
		{name: 'Вопросы от Алины. Приветствие', href: '/child/greetings'},
		{name: 'Вопросы от Алины', href: '/child/tasks'},
		{name: 'Задания от Алины', href: '/child/education'},
		{name: 'Обучение от Алины', href: '/child/homework'},
		{name: 'Заработай реальные деньги', href: '/child/earnings'},
		{name: 'Мой сейф', href: '/child/wallet'},
		{name: 'Мой сейф 2', href: '/child/wallet2'},
		{name: 'Настройки личного кабинета', href: '/child/settings'},
	];

	return (
		<ProfileChildProvider>
			<main className="child-main">
				<div className="flex">
					<ProfileAside pagesLink={pagesLink}/>
					<div className={'flex flex-col w-full p-[1.875rem] sm:p-[3.75rem] h-[100dvh] overflow-auto'}>
						{children}
					</div>
				</div>
			</main>
		</ProfileChildProvider>
	);
}
