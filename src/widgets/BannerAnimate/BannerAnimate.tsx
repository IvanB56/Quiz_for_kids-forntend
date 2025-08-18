'use client';
import React, {useRef} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {Text} from "@components";
import {useClassName} from "@hooks";
import {classes} from './BannerAnimate.cn';

import {Great_Vibes} from 'next/font/google';
import './BannerAnimate.scss';

gsap.registerPlugin(useGSAP);


const GreatVibes = Great_Vibes({
	weight: ['400'],
	subsets: ['cyrillic'],
	variable: '--font-great-vibes',
});

export const BannerAnimate = () => {
	const ref = useRef(null);
	const styles= classes();
	const number = 1623422;
	const locRu = number.toLocaleString('ru-RU');

	useGSAP(() => {
		gsap.set(".animate", {y: 0, opacity: 1});
		gsap.set(".text-animate", {opacity: 0});
		gsap.set(`.${styles.badge}`, {opacity: 1, bottom: 0});
		gsap.from(".animate", {
			y: 260,
			opacity: 0,
			duration: 2,
			stagger: .1,
			delay: 2,
			ease: 'power1.in',
			force3D: true,
		});
		gsap.from(".text-animate", {
			opacity: 1,
			duration: 2.5,
			ease: 'power1.in',
			force3D: true,
			onStart() {
				document.body.style.overflow = 'hidden';
			}
		});
		gsap.from(`.${styles.badge}`, {
			opacity: 0,
			bottom: -260,
			duration: 2,
			stagger: .1,
			delay: 3.5,
			onComplete() {
				document.body.style.overflow = '';
			}
		});
	}, {scope: ref});

	return (
		<section className={useClassName(GreatVibes.variable, styles.block)} ref={ref}>
			<img src={'images/index-new/bottom.png'} alt={'banner'} className={styles.image}/>
			<img src={'images/index-new/middle.png'} alt={'banner'} className={useClassName(styles.image, 'animate')}/>
			<img src={'images/index-new/top.png'} alt={'banner'} className={useClassName(styles.image, 'animate')}/>
			<div className={useClassName(styles.texts, 'text-animate')}>
				<Text data={{text: 'Привет родители', tag: 'p'}} className={styles.text}/>
			</div>
			<div className={styles.badge}>
				<img src={'images/index-new/logo-big.png'} alt="logo" />
				<Text data={{text: `С нами уже ${locRu} пользователей`, tag: 'p'}} className={styles.description} />
			</div>
		</section>
	);
};