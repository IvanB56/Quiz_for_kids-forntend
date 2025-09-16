import React from 'react';
import {ProfileChildProvider} from "@shared";
import {AppSidebar, SidebarInset, SidebarProvider, SidebarTrigger} from "@components";

export default function AuthLayout({children}: { children: React.ReactNode }) {

	// const pagesLink = [
	// +	{name: 'Правила пользования', href: '/profile/rules'},
	// +	{name: 'Добавить ребенка', href: '/settings/child'},
	// +	{name: 'Добавить родственников', href: '/profile/relatives'},
	// +	{name: 'Настройки МонетикУМ', href: '/profile/budget'},
	// +	{name: 'Выплатить зарплату ребенку', href: '/profile/zp'},
	// +	{name: 'Психологическое тестирование', href: '/profile/test'},
	// +	{name: 'Игровой договор с ребенком', href: '/profile/contract'},
	// +	{name: 'Статистика ребенка', href: '/profile/statistic'},
	// +	{name: 'Реферальная программа', href: '/profile/earnings'},
	// +	{name: 'Словарь детского сленга', href: '/profile/slang'},
	// +	{name: 'Подобрать психолога, репетитора', href: '/profile/mentors'},
	// +	{name: 'Магазин возможностей', href: '/profile/shop'},
	// +	{name: 'Новости и обновления', href: '/profile/news'},
	// +	{name: 'Обратная связь и поддержка', href: '/profile/support'},
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
						title: "Правила пользования",
						url: "/profile/rules",
						icon: 'FileText',
						isActive: true,
					},
					{
						title: "Настройки МонетикУМ",
						url: "/profile/budget",
						icon: 'SettingsIcon'
					},
					{
						title: "Новости и обновления",
						url: "/profile/news",
						icon: 'NewspaperIcon'
					},
					{
						title: "Магазин возможностей",
						url: "/profile/shop",
						icon: 'ShoppingBasketIcon'
					},
					{
						title: "Обратная связь и поддержка",
						url: "/profile/support",
						icon: 'MessagesSquare'
					},
				]
			},
			{
				title: "Дети",
				items: [
					{
						title: "Мои дети",
						url: "/profile/child",
						icon: 'UserPlus',
					},
					{
						title: "Родственники",
						url: "/profile/relatives",
						icon: 'Users',
					},
					{
						title: "Выплатить зарплату ребенку",
						url: "/profile/salary",
						icon: 'Coins',
					},
					{
						title: "Психологическое тестирование",
						url: "/profile/test",
						icon: 'BookCheck',
					},
					{
						title: "Игровой договор с ребенком",
						url: "/profile/contract",
						icon: 'ReceiptText',
					},
					{
						title: "Статистика ребенка",
						url: "/profile/statistic",
						icon: 'ChartNoAxesCombined',
					},
				]
			},
			{
				title: 'Прочее',
				items: [
					{
						title: "Реферальная программа",
						url: "/profile/earnings",
						icon: 'Blocks',
					},
					{
						title: "Словарь детского сленга",
						url: "/profile/slang",
						icon: 'Languages',
					},
					{
						title: "Подобрать психолога, репетитора",
						url: "/profile/mentors",
						icon: 'GraduationCap',
					},
				]
			}
		]
	}

	return (
		<ProfileChildProvider>
			<SidebarProvider>
				<AppSidebar {...pagesLink}/>
				<SidebarInset className="bg-cyan-light">
					<SidebarTrigger
						className="[&_svg]:size-6 [&_svg]:rotate-180 absolute bg-sidebar !rounded-l-none left-0 min-md:hidden"/>
					<div className="flex flex-1 flex-col gap-4 p-10 max-md:p-8 bg-cyan-light">
						{children}
					</div>
				</SidebarInset>
			</SidebarProvider>
		</ProfileChildProvider>
	);
}
