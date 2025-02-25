'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@components';
import logo from '@assets/images/logo.png';
import { classes } from './cn/HeaderGuest.cn';
import { TypeHeaderGuest } from './types/HeaderGuest.type';
import Link from 'next/link';
import { LogIn, Menu, UserRoundPlus } from 'lucide-react';
import './styles/HeaderGuest.scss';

export const HeaderGuest = (props: TypeHeaderGuest) => {
	const pathname = usePathname();
	const styles = classes(props.cn);
	const menus = [
		{ name: 'О нас', href: '/about' },
	];

	return (
		<header className={styles.block}>
			<div className={styles.elementContainer}>
				<Button asChild variant={'link'}>
					<Link href={'/'}>
						<Image src={logo} alt="A description of my image." width="150" />
					</Link>
				</Button>
				<nav className={styles.elementMenu}>
					{menus.map(({ href, name }) => (
						<Button asChild variant={'link'} key={href} className={'font-bold'}>
							<Link href={href} className={pathname === href ? 'opacity-50' : ''}>
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
					<Button variant={'link'} className={styles.elementBurger}>
						<Menu />
					</Button>
				</div>
			</div>
		</header>
	);
};
