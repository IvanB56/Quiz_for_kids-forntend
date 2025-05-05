'use client';
import React, {useState} from 'react';
import {usePathname} from 'next/navigation';
import Image from 'next/image';
import {Button} from '@components';
import logo from '@assets/images/logo.png';
import {classes} from './cn/HeaderGuest.cn';
import {TypeHeaderGuest} from './types/HeaderGuest.type';
import Link from 'next/link';
import {LogIn, LogOut, Menu, UserRoundPlus, X} from 'lucide-react';
import './styles/HeaderGuest.scss';

export const HeaderGuest = ({data, cn}: TypeHeaderGuest) => {
	const pathname = usePathname();
	const styles = classes(cn);
	const settingsMenu = [
		{name: 'Помощь', href: '/help'}
	];
	const guestMenu = [
		{name: 'Главная', href: '/'},
		{name: 'О нас', href: '/about'},
	];
	const menus = data?.page === 'guest' ? [...guestMenu] : [...settingsMenu];

	const [isOpen, setIsOpen] = useState(false);

	const burgerHandler = () => {
		setIsOpen((prev) => !prev);
	};
	const logoutHandler = () => {
		console.log('logout')
	}

	return (
		<header className={styles.block}>
			<div className={styles.elementContainer}>
				<Button asChild variant={'link'}>
					<Link href={'/'}>
						<Image src={logo} alt="логотип" width="250"/>
					</Link>
				</Button>
				<nav className={`${styles.elementMenu} ${isOpen ? 'is-open' : ''}`}>
					{menus.map(({href, name}) => (
						<Button
							asChild
							variant={'link'}
							key={href}
							className={'font-bold mobile-link'}
							onClick={() => burgerHandler()}
						>
							<Link href={href} className={pathname === href ? 'opacity-50 is-active' : ''}>
								{name}
							</Link>
						</Button>
					))}
					<div className={'lg:hidden max-lg:contents'}>
						<Button
							asChild
							variant={'link'}
							key={'/login'}
							className={'font-bold mobile-link'}
							onClick={() => burgerHandler()}
						>
							<Link href={'/login'} className={pathname === '/login' ? 'opacity-50 is-active' : ''}>
								Войти
							</Link>
						</Button>
						<Button
							asChild
							variant={'link'}
							key={'/registration'}
							className={'font-bold mobile-link'}
							onClick={() => burgerHandler()}
						>
							<Link href={'/registration'} className={pathname === '/registration' ? 'opacity-50 is-active' : ''}>
								Зарегистрироваться
							</Link>
						</Button>
					</div>
				</nav>
				<div className={styles.elementButtons}>
					{data?.page === 'guest' && (
						<>
							<Button asChild variant={'link'} className={styles.elementAuthButton}>
								<Link href={'/login'} className={pathname === '/login' ? 'opacity-50' : ''}>
									<LogIn/> Войти
								</Link>
							</Button>
							<Button asChild variant={'link'} className={styles.elementAuthButton}>
								<Link href={'/registration'} className={pathname === '/registration' ? 'opacity-50' : ''}>
									<UserRoundPlus/> Зарегистрироваться
								</Link>
							</Button>
						</>
					)}
					{data?.page === 'settings' && (
						<Button variant={'link'} className={styles.elementAuthButton} onClick={() => logoutHandler()}>
							<LogOut/> Выйти
						</Button>
					)}
					<Button variant={'link'} className={styles.elementBurger} onClick={() => burgerHandler()}>
						<Menu className={isOpen ? 'hidden' : ''}/>
						<X className={!isOpen ? 'hidden' : ''}/>
					</Button>
				</div>
			</div>
		</header>
	);
};
