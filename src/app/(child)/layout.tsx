import React from 'react';
import {ProfileChildProvider} from "@shared";
import {ProfileAside} from "@widgets";
import '@assets/styles/child.scss'
import { AppSidebar, SidebarInset, SidebarProvider, SidebarTrigger } from '@components';


export default async function AuthLayout({children}: { children: React.ReactNode }) {
	{/*const pagesLink = [*/}
	{/*	{name: 'Игровой договор', href: '/child/rules'},*/}
	// 	{name: 'Вопросы от Алины. Приветствие', href: '/child/greetings'},
	// 	{name: 'Вопросы от Алины', href: '/child/tasks'},
	// 	{name: 'Задания от Алины', href: '/child/education'},

	// 	{name: 'Обучение от Алины', href: '/child/homework'},
	// 	{name: 'Заработай реальные деньги', href: '/child/earnings'},
	// 	{name: 'Мой сейф', href: '/child/wallet'},
	// 	{name: 'Мой сейф 2', href: '/child/wallet2'},
	// 	{name: 'Настройки личного кабинета', href: '/child/settings'},
	// ];

	const pagesLink = {
		user: {
			name: "Ivan",
			email: "admin@admin.com",
			avatar: "/avatars/shadcn.jpg",
		},
		navMain: [
			{
				title: "Приложение",
				items: [
					{
						title: "Игровой договор",
						url: "/child/rules",
						icon: 'ReceiptText',
						isActive: true,
					},
					{
						title: "Вопросы от Алины. Приветствие",
						url: "/child/greetings",
						icon: 'Meh'
					},
					{
						title: "Вопросы от Алины",
						url: "/child/tasks",
						icon: 'BookCheck'
					},
					{
						title: "Задания от Алины",
						url: "/child/education",
						icon: 'NotebookPen'
					},
					{
						title: "Обучение от Алины",
						url: "/child/homework",
						icon: 'GraduationCap'
					},
					{
						title: "Заработай реальные деньги",
						url: "/child/earnings",
						icon: 'Banknote'
					},
					{
						title: "Мой сейф",
						url: "/child/wallet",
						icon: 'PiggyBank'
					},
					{
						title: "Мой сейф 2",
						url: "/child/wallet2",
						icon: 'PiggyBank'
					},
					{
						title: "Настройки личного кабинета",
						url: "/child/settings",
						icon: 'SettingsIcon'
					},
				]
			},
		]
	}

	return (
		<ProfileChildProvider>
			<SidebarProvider>
				<AppSidebar {...pagesLink}/>
				<SidebarInset className="bg-cyan-light">
					<SidebarTrigger
						className="[&_svg]:size-6 [&_svg]:rotate-180 absolute bg-sidebar !rounded-l-none left-0 min-md:hidden"/>
					<div className="flex flex-1 flex-col gap-4 p-10 max-md:p-8 bg-cyan-light h-full overflow-auto">
						{children}
					</div>
				</SidebarInset>
			</SidebarProvider>
		</ProfileChildProvider>
	);
}
