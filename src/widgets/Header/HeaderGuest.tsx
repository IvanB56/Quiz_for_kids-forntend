'use client';
import React from 'react';
import {usePathname} from "next/navigation";
import Image from 'next/image';
import {LinkUI} from "@components";
import logo from '@assets/images/logo.png';
import {classes} from "./cn/HeaderGuest.cn";
import {TypeHeaderGuest} from "./types/HeaderGuest.type";
import './styles/HeaderGuest.scss';

export const HeaderGuest = (props: TypeHeaderGuest) => {
	const pathname = usePathname();
	const styles = classes(props.cn);
	const activeClass = 'bg-blue-400 text-white bg-blue-100';
	const menus = [
		{name: 'Викторины', href: '/quiz'},
		{name: 'Профиль', href: '/profile'},
		{name: 'Монеты', href: '/coins'},
		{name: 'О нас', href: '/about'}
	];

	return (
		<header className={styles.block}>
			<div className={styles.elementContainer}>
				<LinkUI data={{href: '/'}}>
					<Image src={logo} alt="A description of my image." width="150"/>
				</LinkUI>
				<nav className={styles.elementMenu}>
					{menus.map(({href, name}) => (
						<LinkUI
							data={{text: name, href}}
							cn={{color: 'text-black', margin: 'mx-[1rem]', weight: 'font-bold', active: pathname === href}}
							key={href}
						/>
					))}
				</nav>
				<div className={styles.elementButtons}>
					<LinkUI
						data={{text: 'Войти', href: '/login'}}
						className={`link header__link px-4 py-2 rounded-lg ${pathname === '/login' ? activeClass : ''}`}
					/>
					<LinkUI
						data={{text: 'Зарегистрироваться', href: '/registration'}}
						className={`link header__link px-4 py-2 rounded-lg ${pathname === '/registration' ? activeClass : ''}`}
					/>
				</div>
			</div>
		</header>
	);
};
