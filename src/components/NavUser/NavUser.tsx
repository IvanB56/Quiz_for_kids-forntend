"use client"

import {BadgeCheck, Bell, ChevronsUpDown, LogOut, Sparkles,} from "lucide-react";

import {
	Avatar,
	AvatarFallback,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	Text,
	useSidebar
} from "@components";
import {logout, User} from "@/entities/user";
import {useAppDispatch} from "@hooks";
import {useRouter} from 'next/navigation';
import {ProfileType} from "@/shared/constants/ProfilesType";

type Props = {
	user: User
}

export function NavUser({user}: Props) {
	const {isMobile} = useSidebar()
	const dispatch = useAppDispatch();
	const router = useRouter();

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							<Avatar className="h-10 w-10 rounded-lg">
								{/*<AvatarImage src={user.avatar} alt={user.name} />*/}
								<AvatarFallback className="rounded-lg">
									<Text data={{text: 'IB', tag: 'span'}} cn={{size: 'text-body-1', weight: 'font-semibold'}}/>
								</AvatarFallback>
							</Avatar>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<Text data={{text: user.name, tag: 'span'}} cn={{size: 'text-body-3', weight: 'font-semibold'}}/>
								<Text data={{text: user.email, tag: 'span'}} cn={{size: 'text-body-3', weight: 'font-semibold'}}/>
							</div>
							<ChevronsUpDown className="ml-auto size-4"/>
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
						side={isMobile ? "bottom" : "right"}
						align="end"
						sideOffset={4}
					>
						<DropdownMenuLabel className="p-0 font-normal">
							<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
								<Avatar className="h-10 w-10 rounded-lg">
									{/*<AvatarImage src={user.avatar} alt={user.name} />*/}
									<AvatarFallback className="rounded-lg"><Text data={{text: 'IB', tag: 'span'}}/></AvatarFallback>
								</Avatar>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<Text data={{text: user.name, tag: 'span'}} cn={{size: 'text-body-3'}}/>
									<Text data={{text: user.email, tag: 'span'}} cn={{size: 'text-body-3'}}/>
								</div>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator/>
						{
							user.type === ProfileType.SPONSOR && (
								<>
									<DropdownMenuGroup>
										<DropdownMenuItem onSelect={() => router.push('/profile/tariffs')}>
											<Sparkles/> <Text data={{text: 'Улучшить тариф', tag: 'span'}}/>
										</DropdownMenuItem>
									</DropdownMenuGroup>
									<DropdownMenuSeparator/>
								</>
							)
						}
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<BadgeCheck/> <Text data={{text: 'Аккаунт', tag: 'span'}}/>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Bell/> <Text data={{text: 'Уведомления', tag: 'span'}}/>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator/>
						<DropdownMenuItem onSelect={() => {
							dispatch(logout());
						}}>
							<LogOut/> <Text data={{text: 'Выйти', tag: 'span'}}/>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	)
}
