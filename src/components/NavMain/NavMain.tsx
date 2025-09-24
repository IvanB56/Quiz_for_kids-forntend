"use client";

import {
	LinkUI,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	Text
} from "@components";
import React, {useMemo} from "react";

import './NavMain.scss';
import {usePathname} from "next/navigation";
import {LucideIcon} from "@/components/LucidIcon/LucidIcon";

type Props = {
	data: {
		title: string
		items: {
			title: string
			url: string
			icon?: string
			isActive?: boolean
			disabled?: boolean
		}[]
	}
}

const itemChange = (items: Props['data']['items'], pathname: string) => {
	return items.map((item) => {
		item.isActive = item.url === pathname;
		return item;
	});
}

export function NavMain({data}: Props) {
	const {title, items} = data;
	const pathname = usePathname();

	const itemsMemo = useMemo<Props['data']['items']>(() => itemChange(items, pathname), [items, pathname]);

	return (
		<SidebarGroup>
			<SidebarGroupLabel>
				<Text data={{text: title, tag: 'p'}} cn={{size: 'text-body-3'}}/>
			</SidebarGroupLabel>
			<SidebarMenu>
				{itemsMemo.map((item) => (
					<SidebarMenuItem key={item.title}>
						<SidebarMenuButton tooltip={item.title} size={"lg"} isActive={item.isActive}
						                   className={item.isActive ? 'isActive' : ''}>
							{item.icon && <LucideIcon iconName={item.icon} />}
							<LinkUI data={{href: item.url}} disabled={item.disabled}>
								<Text data={{text: item.title, tag: 'p'}}/>
							</LinkUI>
						</SidebarMenuButton>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	)
}
