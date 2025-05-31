import React from 'react';
import {redirect} from "next/navigation";
import {ProfileChildProvider} from "@shared";
import {checkAuth} from "@/features/auth/checkAuth";
import {ProfileAside} from "@widgets";
import {Text} from '@components';

export default async function AuthLayout({children}: { children: React.ReactNode }) {
	const {statusText, status, error} = await checkAuth();

	const pagesLink = [
		{name: 'Правила пользования', href: '/profile/rules'},
		{name: 'Добавить ребенка', href: '/settings/child'},
		{name: 'Добавить родственников', href: '/profile/relatives'},
		{name: 'Игровой договор с ребенком', href: '/profile/contract'},
		{
			name: 'Настройка приложение ребенка МонетикУМ',
			nested: [
				{name: 'Настроить сложность', href: '/profile/adjust-difficulty'},
				{name: 'Настроить темы викторин', href: '/profile/themes'},
				{name: 'Настроить задания по дому', href: '/profile/home-task'},
			]
		},
		{name: 'Статистика ребенка', href: '/profile/statistic'},
		{name: 'Реальный заработок ребенка и родителя', href: '/profile/earnings'},
		{
			name: 'Полезное для родителей',
			nested: [
				{name: 'Планирование детского бюджета', href: '/profile/budget'},
				{name: 'Словарь детского сленга', href: '/profile/slang'},
				{name: ' Подобрать психолога, репетитора', href: '/profile/mentors'},
			]
		},
		{name: 'Новости и обновления', href: '/profile/news'},
		{name: 'Магазин возможностей', href: '/profile/shop'},
		{name: 'Настройки профиля', href: '/settings'},
	];

	if (status === 401 || statusText === 'Unauthorized') {
		redirect('/login');
	}

	return (
		<ProfileChildProvider>
			{error?.status === 'error' && (
				<Text data={{text: JSON.stringify(error), tag: 'p'}} cn={{color: 'text-primary-grey'}}/>)}
			<main className={'bg-cyan-light'}>
				<div className={'flex'}>
					<ProfileAside pagesLink={pagesLink}/>
					<div className={'flex flex-col w-full gap-[60px] p-[60px] h-[100dvh] overflow-auto'}>
						{children}
					</div>
				</div>
			</main>
		</ProfileChildProvider>
	);
}
