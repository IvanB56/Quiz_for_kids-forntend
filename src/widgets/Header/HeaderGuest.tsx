'use client';
import React, {useEffect, useState} from 'react';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import Image from 'next/image';
import {Button, Heading, Modal} from '@components';
import logo from '@assets/images/logo.png';
import {classes} from './cn/HeaderGuest.cn';
import {TypeHeaderGuest} from './types/HeaderGuest.type';
import Link from 'next/link';
import {LogIn, LogOut, Menu, UserRoundPlus, X} from 'lucide-react';
import {logout} from "@/shared/api";
import {FormLogin, FormRegistration} from "@/widgets";

import './styles/HeaderGuest.scss';

export const HeaderGuest = ({data, cn}: TypeHeaderGuest) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const styles = classes(cn);
	const settingsMenu = [
		{name: 'Помощь', href: '/help'},
		{name: 'Профиль', href: '/profile'},
		{name: 'Настройки профиля', href: '/settings'}
	];
	const menus = data?.page === 'guest' ? [] : [...settingsMenu];
	const router = useRouter();

	const [isOpen, setIsOpen] = useState(false);
	const [modalOpen, setModalOpen] = React.useState(false);

	const burgerHandler = () => {
		setIsOpen((prev) => !prev);
	};
	const logoutHandler = async () => {
		await logout();
		router.push('/');
	}

	const splitPath: Array<string> = pathname.split('/');

	useEffect(() => {
		if (searchParams.has('login')) setModalOpen(true);
		router.push('/');
	}, [router, searchParams]);

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
								open={modalOpen}
								onOpenChange={setModalOpen}
								trigger={() => (
									<><LogIn/> Войти</>
								)}
								header={() => (
									<Heading data={{text: 'Войти', tag: 'h3'}} cn={{size: 'h3', align: 'text-center'}}
									         className={styles.modalHeading}/>
								)}
								description={() => <FormLogin/>}
								className={{
									trigger: styles.elementAuthButton
								}}
							/>
							<Modal
								trigger={() => (
									<><UserRoundPlus/> Зарегистрироваться</>
								)}
								description={() => <FormRegistration/>}
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
