import React from 'react';
import Image from "next/image";
import {CN} from "@/lib";
import { Button, CardBackground, Heading, Text } from '@components';

import './SectionEarnings.scss';

const block = CN('earnings');

export const SectionEarnings = () => {
	return (
		<section className={block()}>
			<div className={block('wrapper-content')}>
				<div className={'card-text card-text-1'}>
					<Heading data={{text: 'ЗАРПЛАТА ДЛЯ РЕБЕНКА', tag: 'h3'}} cn={{size: 'h3', color: 'text-brown', margin: 'mb-5 sm:mb-4'}} className={'card-text__heading'}/>
					<Text data={{text: 'Начните платить «зарплату» ребенку за развитие, а не финансировать «хотелки». Иначе ребенок вместо важных жизненных навыков освоит манипуляции.', tag: 'p'}} cn={{size: 'text-body-1', color: 'text-brown', weight: 'font-medium', margin: 'mb-4 sm:mb-6'}} className={'card-text__subtitle'}/>
					<ul className={'card-text__list'}>
						<li>Зарплатный метод — это революционный подход.</li>
						<li>Результат ДО и ПОСЛЕ уже через пару месяцев</li>
					</ul>
					<Text data={{text: 'Деньги, которые уходили на избалованность, теперь - инвестиции в многостороннее развитие', tag: 'p'}} cn={{size: 'text-body-1', weight: 'font-medium', margin: 'mb-4 sm:mb-6'}} className={'card-text__bottom'}/>
				</div>
				<CardBackground cn={{ variant: "first" }}
					data={{
						textData: "Чем отличается от «за оценки в школе»",
						imgSrc: "/images/index2/earnings/card-background-girl.webp",
						imgWidth: 620,
						imgHeight: 500
					}}
				/>
				<CardBackground cn={{ variant: "second" }}
					data={{
						textData: "Почему важна зарплата",
						imgSrc: "/images/index2/earnings/card-background-girls.webp",
						imgWidth: 332,
						imgHeight: 500
					}}
				/>
				<div className={'card-text card-text-2'}>
					<Heading data={{text: 'От потребительской модели к партнерским отношениям.\n', tag: 'h3'}} cn={{size: 'h3', color: 'text-brown', margin: 'mb-5 sm:mb-4'}} className={'card-text__heading'}/>
				</div>
				<CardBackground cn={{ variant: "third" }}
					data={{
						textData: "Почему устраняет, а не провоцирует меркантильность",
						imgSrc: "/images/index2/earnings/card-background-boy.webp",
						imgWidth: 332,
						imgHeight: 510
					}}
				/>
			</div>
			<Image src={"/images/index2/bg-gradient-earnings.png"} alt="" fill className={block('background')}/>
		</section>
	);
};
