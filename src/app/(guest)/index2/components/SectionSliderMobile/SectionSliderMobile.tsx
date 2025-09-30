import React from 'react';
import Image from "next/image";
import {CN} from "@/lib";
import { Button, CardBackground, Heading } from '@components';

import './SectionSliderMobile.scss';

const block = CN('slider-mobile');

export const SectionSliderMobile = () => {
	return (
		<section className={block()}>
			<div className={block('wrapper-content')}>
				<Heading data={{text: 'ПРИМЕРЫ ПОЛОЖИТЕЛЬНЫХ ЭФФЕКТОВ', tag: 'h3'}} cn={{size: 'h3', margin: 'mb-7 sm:mb-11'}} className={block('heading')}/>
				<div className={block('wrapper-cards')}>
					<CardBackground cn={{variant: 'effects'}}
						data={{
							textData: "Как ребенок начинает ценить вашу заботу и труд",
							imgSrc: "/images/index2/slider-mobile/card-background-1.png",
							imgWidth: 499,
							imgHeight: 332
						}}
					/>
					<CardBackground cn={{variant: 'effects'}}
						data={{
							textData: "Воспитание ответственности с первого шага",
							imgSrc: "/images/index2/slider-mobile/card-background-2.png",
							imgWidth: 499,
							imgHeight: 332
						}}
					/>
					<CardBackground cn={{variant: 'effects'}}
						data={{
							textData: "Как приучить к осмысленным тратам",
							imgSrc: "/images/index2/slider-mobile/card-background-3.png",
							imgWidth: 499,
							imgHeight: 332
						}}
					/>
					<CardBackground cn={{variant: 'effects'}}
						data={{
							textData: "Как объединить всю семью",
							imgSrc: "/images/index2/slider-mobile/card-background-4.png",
							imgWidth: 499,
							imgHeight: 332
						}}
					/>
					<CardBackground cn={{variant: 'effects'}}
						data={{
							textData: "Повод для конструктивного диалога с ребенком",
							imgSrc: "/images/index2/slider-mobile/card-background-5.png",
							imgWidth: 499,
							imgHeight: 332
						}}
					/>
					<CardBackground cn={{variant: 'effects'}}
						data={{
							textData: "Захочет зарабатывать сам",
							imgSrc: "/images/index2/slider-mobile/card-background-6.png",
							imgWidth: 499,
							imgHeight: 332
						}}
					/>
					<CardBackground cn={{variant: 'effects'}}
						data={{
							textData: "Как настроить ребенка пользоваться платформой",
							imgSrc: "/images/index2/slider-mobile/card-background-7.png",
							imgWidth: 499,
							imgHeight: 332
						}}
					/>
				</div>

			</div>
			<Image src={"/images/index2/bg-gradient-slider-mobile.png"} alt="" fill className={block('background')}/>
		</section>
	);
};
