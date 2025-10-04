import React from 'react';
import '@assets/styles/child.scss'
import {AppSidebar, SidebarInset, SidebarProvider, SidebarTrigger} from '@components';
import {getUser} from "@features";
import {UserLoaderModule} from "@lib/components/UserLoaderModule/UserLoaderModule";
import {getBalance} from "@/features/server-api/coins/getBalance";
import CoinsBalanceLoaderModule from "@lib/components/CoinsBalanceLoaderModule/CoinsBalanceLoaderModule";
import Image from "next/image";


export default async function AuthLayout({children}: { children: React.ReactNode }) {
	const {user} = await getUser();
	const {balance} = await getBalance();

	const pagesLink = {
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
						title: "Приветствие",
						url: "/child/greetings",
						icon: 'Meh'
					},
					{
						title: "Викторины",
						url: "/child/game",
						icon: 'BookCheck'
					},
					{
						title: "Задания",
						url: "/child/education",
						icon: 'NotebookPen'
					},
					{
						title: "Академия",
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
						url: "/child/safe",
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
		<SidebarProvider>
			<CoinsBalanceLoaderModule balance={balance}>
				<UserLoaderModule user={user}>
					<AppSidebar {...pagesLink}/>
					<SidebarInset className="bg-cyan-light">
						<SidebarTrigger
							className="[&_svg]:size-6 [&_svg]:rotate-180 absolute bg-sidebar !rounded-l-none left-0 min-md:hidden"/>
						<div className="flex flex-1 flex-col gap-4 p-10 max-md:p-8 bg-cyan-light h-full overflow-auto [&>*:not(img)]:relative">
							<Image src={'/images/child/bg-child.webp'} alt="" fill className="object-cover opacity-80" />
							{children}
						</div>
					</SidebarInset>
				</UserLoaderModule>
			</CoinsBalanceLoaderModule>
		</SidebarProvider>
	);
}
