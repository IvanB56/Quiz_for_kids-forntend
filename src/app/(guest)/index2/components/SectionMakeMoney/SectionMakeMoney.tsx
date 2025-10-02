import React from 'react';
import Image from "next/image";
import {CN} from "@/lib";
import { Heading, Text } from '@components';

import './SectionMakeMoney.scss';

const block = CN('make-money');

export const SectionMakeMoney = () => {
	return (
		<section className={block()}>
			<div className={block('wrapper-content')}>
				<div className={block('wrapper-image')}>
					<Image src={"/images/index2/make-money/img-make-money.webp"} alt="" width={686} height={926} className={block('image')}/>
				</div>
				<div className={block('wrapper-text')}>
					<Heading data={{text: 'КАК ЗАРАБОТАТЬ ВАМ И РЕБЕНКУ', tag: 'h2'}} cn={{size: 'h2'}} className={block('heading')}/>
					<Text className={block('description')} data={{text: 'Заработать реальные деньги - зайти в ЛК, раздел «Партнерская программа», получить реферальную ссылку и просто поделиться ею со знакомыми мамами или в классном чате; ', tag: 'p'}} cn={{size: 'text-body-1', weight: 'font-medium'}}/>
				</div>
			</div>
			<Image src={"/images/index2/bg-gradient-make-money.png"} alt="" fill className={block('background')}/>
		</section>
	);
};
