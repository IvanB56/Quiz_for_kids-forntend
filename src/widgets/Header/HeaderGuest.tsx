'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@components';
import logo from '@assets/images/logo.png';
import { classes } from './cn/HeaderGuest.cn';
import { TypeHeaderGuest } from './types/HeaderGuest.type';
import Link from 'next/link';
import { LogIn, Menu, UserRoundPlus, X } from 'lucide-react';
import './styles/HeaderGuest.scss';

export const HeaderGuest = (props: TypeHeaderGuest) => {
	const pathname = usePathname();
	const styles = classes(props.cn);
	const menus = [
		{ name: 'О нас', href: '/about' },
	];
	const [isOpen, setIsOpen] = useState(false);
	const burgerHandler = () => {
		setIsOpen(prev => !prev);
	}

	return (
		<header className={styles.block}>
			<div className={styles.elementContainer}>
				<Button asChild variant={'link'}>
					<Link href={'/'}>
						<Image src={logo} alt="логотип" width="250" />
					</Link>
				</Button>
				<nav className={`${styles.elementMenu} ${isOpen ? 'is-open' : ''}`}>
					{menus.map(({ href, name }) => (
						<Button asChild variant={'link'} key={href} className={'font-bold mobile-link'} onClick={() => burgerHandler()}>
							<Link href={href} className={pathname === href ? 'opacity-50 is-active' : ''}>
								{name}
							</Link>
						</Button>
					))}
				</nav>
				<div className={styles.elementButtons}>
					<Button asChild variant={'link'} className={styles.elementAuthButton}>
						<Link href={'/login'} className={pathname === '/login' ? 'opacity-50' : ''}>
							<LogIn /> Войти
						</Link>
					</Button>
					<Button asChild variant={'link'} className={styles.elementAuthButton}>
						<Link href={'/registration'} className={pathname === '/registration' ? 'opacity-50' : ''}>
							<UserRoundPlus /> Зарегистрироваться
						</Link>
					</Button>
					<Button variant={'link'} className={styles.elementBurger} onClick={() => burgerHandler()}>
						<Menu className={isOpen ? "hidden" : ''} />
						<X className={!isOpen ? 'hidden': ''} />
					</Button>
				</div>
			</div>
		</header>
	);
};
