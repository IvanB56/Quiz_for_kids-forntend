"use client";

import * as React from "react";

import {NavMain, NavUser, Sidebar, SidebarContent, SidebarFooter, SidebarRail, SidebarTrigger} from "@components";
import {useSelector} from "react-redux";
import {getUserAuthData, User} from "@/entities/user";

type Props = {
  user?: User;
  navMain: {
    title: string;
    items: {
      title: string;
      url: string;
      icon: string;
      isActive?: boolean;
      disabled?: boolean;
    }[]
  }[]
} & React.ComponentProps<typeof Sidebar>

export function AppSidebar({ navMain, ...props }: Props) {
  const user = useSelector(getUserAuthData);

  if (!user) {
    return null;
  }

  return (
    <Sidebar collapsible="icon" className="relative" {...props}>
      <SidebarTrigger className="[&_svg]:size-6 absolute right-0 translate-x-full bg-sidebar !rounded-l-none md:hidden" />
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarContent>
        {
          navMain.map((item, index) => (
            <NavMain data={item} key={index} />
          ))
        }
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
