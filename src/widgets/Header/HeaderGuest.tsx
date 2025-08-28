'use client';
import React, {useState} from 'react';
import {usePathname, useRouter} from 'next/navigation';
import Image from 'next/image';
import {Button, Heading, Modal} from '@components';
import logo from '@assets/images/logo.png';
import {classes} from './cn/HeaderGuest.cn';
import {TypeHeaderGuest} from './types/HeaderGuest.type';
import Link from 'next/link';
import {LogIn, LogOut, Menu, UserRoundPlus, X} from 'lucide-react';
import './styles/HeaderGuest.scss';
import {logout} from "@/shared/api";
import {FormLogin} from "@/widgets";

export const HeaderGuest = ({data, cn}: TypeHeaderGuest) => {
	const pathname = usePathname();
	const styles = classes(cn);
	const settingsMenu = [
		{name: 'Помощь', href: '/help'},
		{name: 'Профиль', href: '/profile'},
		{name: 'Настройки профиля', href: '/settings'}
	];
	const menus = data?.page === 'guest' ? [] : [...settingsMenu];
	const router = useRouter();

	const [isOpen, setIsOpen] = useState(false);

	const burgerHandler = () => {
		setIsOpen((prev) => !prev);
	};
	const logoutHandler = async () => {
		await logout();
		router.push('/');
	}

	const splitPath: Array<string> = pathname.split('/');

	return (
		<header className={styles.block}>
			<div className={styles.elementContainer}>
				<Button asChild variant={'link'}>
					<Link href={'/'}>
						<Image src={logo} alt="логотип" width="250"/>
					</Link>
				</Button>
				{menus?.length ? <nav className={`${styles.elementMenu} ${isOpen ? 'is-open' : ''}`}>
					{menus.map(({href, name}) => (
						<Button
							asChild
							variant={'link'}
							key={href}
							className={'font-bold mobile-link'}
							onClick={() => burgerHandler()}
						>
							<Link href={href} className={splitPath[1] === href.slice(1) ? 'opacity-50 is-active' : ''}>
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
				</nav> : null}
				<div className={styles.elementButtons}>
					{data?.page === 'guest' && (
						<>
							<Modal
								trigger={() => (
									<><LogIn/> Войти</>
								)}
								header={() => (
									<Heading data={{text: 'Войти', tag: 'h2'}} cn={{size: 'h2', align: 'text-center'}} />
								)}
								description={() => <FormLogin />}
								className={{
									trigger: styles.elementAuthButton
								}}
							/>
							<Modal
								trigger={() => (
									<><UserRoundPlus/> Зарегистрироваться</>
								)}
								className={{
									trigger: styles.elementAuthButton
								}}
							/>
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
