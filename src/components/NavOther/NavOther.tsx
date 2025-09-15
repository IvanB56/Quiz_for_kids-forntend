"use client"

import {type LucideIcon,} from "lucide-react"
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/UI/sidebar";
import {LinkUI, Text} from "@components";
import React from "react";

type Props = {
	other: {
		name: string
		url: string
		icon: LucideIcon
	}[]
}

export function NavOther({other}: Props) {
	return (
		<SidebarGroup className="group-data-[collapsible=icon]:hidden">
			<SidebarGroupLabel><Text data={{text: 'Прочее', tag: 'p'}} cn={{size: 'text-body-3'}}/></SidebarGroupLabel>
			<SidebarMenu>
				{other.map((item) => (
					<SidebarMenuItem key={item.name}>
						<SidebarMenuButton asChild size={"lg"}>
							<LinkUI data={{href: item.url}}>
								<item.icon/>
								<Text data={{text: item.name, tag: 'p'}}/>
							</LinkUI>
						</SidebarMenuButton>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	)
}
