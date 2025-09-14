"use client";

import * as React from "react";
import {
  Blocks,
  BookCheck,
  ChartNoAxesCombined,
  Coins,
  FileText,
  GraduationCap,
  Languages,
  MessagesSquare,
  NewspaperIcon,
  ReceiptText,
  SettingsIcon,
  ShoppingBasketIcon,
  UserPlus,
  Users
} from "lucide-react"

import {NavMain, NavUser, Sidebar, SidebarContent, SidebarFooter, SidebarRail, SidebarTrigger} from "@components";

const data = {
  user: {
    name: "Ivan",
    email: "admin@admin.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: {
    title: "Приложение",
    items: [
      {
        title: "Правила пользования",
        url: "/profile/rules",
        icon: FileText,
        isActive: true,
      },
      {
        title: "Настройки МонетикУМ",
        url: "/profile/budget",
        icon: SettingsIcon
      },
      {
        title: "Новости и обновления",
        url: "/profile/news",
        icon: NewspaperIcon
      },
      {
        title: "Магазин возможностей",
        url: "/profile/shop",
        icon: ShoppingBasketIcon
      },
      {
        title: "Обратная связь и поддержка",
        url: "/profile/support",
        icon: MessagesSquare
      },
    ]
  },
  child: {
    title: "Дети",
    items: [
      {
        title: "Мои дети",
        url: "/profile/child",
        icon: UserPlus,
      },
      {
        title: "Родственники",
        url: "/profile/relatives",
        icon: Users,
      },
      {
        title: "Выплатить зарплату ребенку",
        url: "/profile/salary",
        icon: Coins,
      },
      {
        title: "Психологическое тестирование",
        url: "/profile/test",
        icon: BookCheck,
      },
      {
        title: "Игровой договор с ребенком",
        url: "/profile/contract",
        icon: ReceiptText,
      },
      {
        title: "Статистика ребенка",
        url: "/profile/statistic",
        icon: ChartNoAxesCombined,
      },
    ]
  },
  other: {
    title: 'Прочее',
    items: [
      {
        title: "Реферальная программа",
        url: "/profile/earnings",
        icon: Blocks,
      },
      {
        title: "Словарь детского сленга",
        url: "/profile/slang",
        icon: Languages,
      },
      {
        title: "Подобрать психолога, репетитора",
        url: "/profile/mentors",
        icon: GraduationCap,
      },
    ]
  }
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" className="relative" {...props}>
      <SidebarTrigger className="[&_svg]:size-6 absolute right-0 translate-x-full bg-sidebar !rounded-l-none md:hidden" />
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarContent>
        <NavMain data={data.navMain} />
        <NavMain data={data.child} />
        <NavMain data={data.other} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
