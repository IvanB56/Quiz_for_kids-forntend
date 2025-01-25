import React from 'react';
import Image from "next/image";
import {Button, Svg, Text} from "@components";
import slideImg from "@assets/images/slider-quiz/imge-slide.png";
import {ICardQuiz} from "../types/CardQuiz.type";
import {classes} from "../cn/CardQuiz.cn";
import '../styles/CardQuiz.scss';

export const CardQuiz = (props: ICardQuiz) => {
	const {data, cn} = props;
	const {complexity, topText, text} = data;
	const styles = classes(cn);

	return (
		<div className={styles.block}>
			<div className={styles.elementImageWrapper}>
				<Image src={slideImg} alt={'Картинка для слайда'} width={200} height={200}/>
			</div>
			<div className={styles.elementComplexity}>
				<Svg name={'star'} className={Number(complexity) > 0 ? 'text-secondary-red' : 'text-grey-medium'}/>
				<Svg name={'star'} className={Number(complexity) > 1 ? 'text-secondary-red' : 'text-grey-medium'}/>
				<Svg name={'star'} className={Number(complexity) > 2 ? 'text-secondary-red' : 'text-grey-medium'}/>
				<Svg name={'favorite'} className={'text-grey-medium ml-2'}/>
			</div>
			<Text data={{text: topText, tag: 'p'}} cn={{weight: 'font-bold', margin: 'mt-7 mb-3'}}/>
			<hr/>
			<Text data={{text: text, tag: 'p'}} cn={{weight: 'font-bold', color: 'text-primary-grey', margin: 'mt-3'}}/>
			<Button
				data={{text: 'Подробнее'}}
				cn={{background: 'bg-button-primary', color: 'text-white', margin: 'mt-10', width: 'w-fit'}}
				className={'self-end'}
			/>
		</div>
	);
};
