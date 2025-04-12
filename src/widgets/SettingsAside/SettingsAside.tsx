'use client';
import React, {useLayoutEffect, useState} from 'react';
import {createPortal} from "react-dom";
import {usePathname} from "next/navigation";
import {cn} from '@utils';
import classes from './SettingsAside.cn';
import {ISettingsAside} from "./SettingsAside.types";
import {LinkUI as Link, Text} from '@components';
import './SettingsAside.scss';

export const SettingsAside = (props: ISettingsAside) => {
	const styles = classes(props.cn);

	const pagesLink = [
		{name: 'Профиль', href: '/settings/profile'},
		{name: 'Изменить email', href: '/settings/email'},
		{name: 'Сменить пароль', href: '/settings/password'},
		{name: 'Настройки уведомлений', href: '/settings/notifications'},
		{name: 'Мои дети', href: '/settings/child'},
	];

	const path = usePathname();
	const [main, setMain] = useState<HTMLElement | null>(null);
	console.log(main)

	useLayoutEffect(() => {
		const el = document.querySelector('main') as HTMLElement;
		setMain(el);
	}, [])

	return (
		<aside className={styles.block}>
			{
				pagesLink.map(({name, href}) => (
					<Link data={{href}} key={href} className={cn(styles.elementLink, {
						'is-active': path === href
					})}>
						<Text data={{text: name, tag: 'p'}}/>
					</Link>
				))
			}
			{main && createPortal(
				<p>This child is placed in the document body.</p>,
				main
			)}
		</aside>
	);
};