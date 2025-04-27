'use client';
import React, {MouseEvent, useLayoutEffect, useRef, useState} from 'react';
import {ChevronRight} from "lucide-react";
import {createPortal} from "react-dom";
import {usePathname} from "next/navigation";
import {cn} from '@utils';
import classes from './SettingsAside.cn';
import {ISettingsAside} from "./SettingsAside.types";
import {LinkUI as Link, Text} from '@components';
import './SettingsAside.scss';

export const SettingsAside = (props: ISettingsAside) => {
	const {pagesLink} = props.data;
	const styles = classes(props.cn);
	const asideRef = useRef<HTMLElement | null>(null);
	const iconRef = useRef<SVGSVGElement | null>(null);

	const path = usePathname();
	const [main, setMain] = useState<HTMLElement | null>(null);

	useLayoutEffect(() => {
		const el = document.querySelector('main') as HTMLElement;
		setMain(el);
	}, [])

	function asideVisibleHandler(e: MouseEvent) {
		const target = e.currentTarget as HTMLButtonElement;
		if (!asideRef?.current) return;
		if (window.innerWidth > 990) return;

		if (target && iconRef.current) {
			if (!asideRef.current.classList.contains('show')) {
				asideRef.current.classList.add('show');
				target.style.left = '320px';
				iconRef.current.style.rotate = '180deg';
			} else {
				asideRef.current.classList.remove('show');
				target.removeAttribute('style');
				iconRef.current.removeAttribute('style');
			}
		}
	}

	return (
		<aside className={styles.block} ref={asideRef}>
			<div className={styles.elementInner}>
				{
					pagesLink.map(({name, href}) => (
						<Link data={{href}} key={href} className={cn(styles.elementLink, {
							'is-active': path === href
						})}>
							<Text data={{text: name, tag: 'p'}}/>
						</Link>
					))
				}
			</div>
			{main && createPortal(
				<button className={styles.elementIcon} onClick={asideVisibleHandler}>
					<ChevronRight ref={iconRef}/>
				</button>,
				main
			)}
		</aside>
	);
};