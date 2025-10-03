import React from 'react';
import {Heading, Text} from "@components";
import {classes} from './BannerStatic.cn';

import './BannerStatic.scss';
import {CN} from "@/lib";

const block = CN('banner-static');

export const BannerStatic = () => {
	const styles = classes();
	const dataBannerStatic = {
		checks: [
			{
				svg: 'green',
				text: 'Перевернет представление о воспитании детей'
			},
			{
				svg: 'green',
				text: 'Откорректирует «запущенные случаи»'
			},
			{
				svg: 'green',
				text: 'Укрепит доверие между взрослыми и детьми'
			},
			{
				svg: 'green',
				text: 'Дополнит любую модель воспитания'
			},
			{
				svg: 'gray',
				text: 'Создавали несколько десятков профессиональных специалистов'
			},
			{
				svg: 'gray',
				text: 'Настройка один раз в месяц за 15 минут'
			},
			{
				svg: 'gray',
				text: 'Для всех детей в семье от 6 до 14 лет'
			},
		]
	}

	return (
		<section className={block()}>
			<div className={block('background')}>
				<img src={'images/index2/banner-static/banner-main.webp'} alt={'banner'} className={styles.image}/>
			</div>
			<div className={block('content')}>
				<Heading data={{text: 'Воспитание Зарплатой – революционный метод', tag: 'h1'}} cn={{size: 'h1', margin: 'mb-2 sm:mb-9'}} className={styles.heading}/>
				<Text data={{text: 'Эффект, как если бы вы наняли 10 репетиторов и гувернантку/няню', tag: 'p'}} cn={{ size: 'text-body-1', color: 'text-brown', weight: 'font-semibold', margin: 'mb-2 sm:mb-3'}} className={styles.subtitle} />
				{dataBannerStatic.checks.map((item, idx) => (
					<div className={block('wrapper-check')} key={idx}>
						<svg className={block('svg-check', [item.svg])} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" >
							<path d="M41.6663 13.8889L18.7497 36.8056L8.33301 26.3889" stroke="var(--color-check, #1A921A)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
						<Text data={{text: item.text, tag: 'p'}} cn={{ size: 'text-body-1', color: 'text-brown', weight: 'font-medium'}} />
					</div>
				))}
			</div>
			<div className={styles.badge}>
				<div className={styles.wrapperQuote}>
					<Text data={{text: '«Если не удается победить интернет, то его нужно возглавить»', tag: 'p'}} cn={{ margin: 'mb-2 sm:mb-6'}} className={styles.description}/>
					<Text data={{text: 'Умный хорёк', tag: 'p'}} cn={{align: 'text-right'}} className={styles.description}/>
				</div>
			</div>
		</section>
	);
};
