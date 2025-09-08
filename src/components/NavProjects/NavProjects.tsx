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
	child: {
		name: string
		url: string
		icon: LucideIcon
	}[]
}

export function NavProjects({child}: Props) {
	return (
		<SidebarGroup className="group-data-[collapsible=icon]:hidden">
			<SidebarGroupLabel><Text data={{text: 'Дети', tag: 'p'}} cn={{size: 'text-body-3'}}/></SidebarGroupLabel>
			<SidebarMenu>
				{child.map((item) => (
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
