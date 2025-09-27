import React from 'react';
import {ProfileAside} from "@widgets";
import '@assets/styles/child.scss'


export default async function AuthLayout({children}: { children: React.ReactNode }) {
	const pagesLink = [
		{name: 'Игровой договор', href: '/child/rules'},
		{name: 'Приветствие', href: '/child/greetings'},
		{name: 'Викторины', href: '/child/tasks'},
		{name: 'Задания', href: '/child/education'},
		{name: 'Академия', href: '/child/homework'},
		{name: 'Заработай реальные деньги', href: '/child/earnings'},
		// {name: 'Мой сейф', href: '/child/wallet'},
		{name: 'Мой сейф', href: '/child/wallet2'},
		{name: 'Настройки личного кабинета', href: '/child/settings'},
	];

	return (
		<main className="child-main">
			<div className="flex">
				<ProfileAside pagesLink={pagesLink}/>
				<div className={'flex flex-col w-full p-[60px] h-[100dvh] overflow-auto'}>
					{children}
				</div>
			</div>
		</main>
	);
}
