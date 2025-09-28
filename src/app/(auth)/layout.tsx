import React from 'react';
import {AppSidebar, SidebarInset, SidebarProvider, SidebarTrigger} from "@components";
import {getUser} from "@features";
import {UserLoaderModule} from "@lib/components/UserLoaderModule/UserLoaderModule";
import {getStudents} from "@/features/auth/getStudents";
import {StudentLoaderModule} from "@lib/components/StudentLoaderModule/StudentLoaderModule/StudentLoaderModule";

export default async function AuthLayout({children}: { children: React.ReactNode }) {
	const pagesLink = {
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
						icon: 'NewspaperIcon',
						disabled: true
					},
					{
						title: "Магазин возможностей",
						url: "/profile/shop",
						icon: 'ShoppingBasketIcon',
						disabled: true
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
						disabled: true
					},
					{
						title: "Игровой договор с ребенком",
						url: "/profile/contract",
						icon: 'ReceiptText',
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
						disabled: true
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
						disabled: true
					},
				]
			}
		]
	}
	const {user} = await getUser();
	const {students} = await getStudents();

	return (
		<SidebarProvider>
			<UserLoaderModule user={user}>
				<StudentLoaderModule students={students?.data}>
					<AppSidebar {...pagesLink}/>
					<SidebarInset className="bg-cyan-light">
						<SidebarTrigger
							className="[&_svg]:size-6 [&_svg]:rotate-180 absolute bg-sidebar !rounded-l-none left-0 min-md:hidden"/>
						<div className="flex flex-1 flex-col gap-4 p-10 max-md:p-0 max-md:pt-10 bg-cyan-light overflow-auto h-full">
							{children}
						</div>
					</SidebarInset>
				</StudentLoaderModule>
			</UserLoaderModule>
		</SidebarProvider>
	);
}
