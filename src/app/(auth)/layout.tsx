import React from 'react';
import {AppSidebar, SidebarInset, SidebarProvider, SidebarTrigger} from "@components";

export default async function AuthLayout({children}: { children: React.ReactNode }) {
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
		<SidebarProvider>
			<AppSidebar {...pagesLink}/>
			<SidebarInset className="bg-cyan-light">
				<SidebarTrigger
					className="[&_svg]:size-6 [&_svg]:rotate-180 absolute bg-sidebar !rounded-l-none left-0 min-md:hidden"/>
				<div className="flex flex-1 flex-col gap-4 p-10 max-md:p-0 max-md:pt-10 bg-cyan-light overflow-auto h-full">
					{children}
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
