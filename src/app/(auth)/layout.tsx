import React from 'react';
import {ProfileChildProvider} from "@shared";
import {ProfileAside} from "@widgets";

export default async function AuthLayout({children}: { children: React.ReactNode }) {

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
		{name: 'Обратная связь и поддержка', href: '/profile/support'},
		{name: 'Настройки профиля', href: '/settings'},
	];

	return (
		<ProfileChildProvider>
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
