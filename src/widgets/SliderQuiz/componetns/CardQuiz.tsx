import React from 'react';
import Image from 'next/image';
import { Button, Svg, Text } from '@components';
import slideImg from '@assets/images/slider-quiz/imge-slide.png';
import { ICardQuiz } from '../types/CardQuiz.type';
import { classes } from '../cn/CardQuiz.cn';
import '../styles/CardQuiz.scss';

export const CardQuiz = (props: ICardQuiz) => {
	const { data, cn } = props;
	const { complexity, topText } = data;
	const styles = classes(cn);

	return (
		<div className={styles.block}>
			<div className={styles.elementImageWrapper}>
				<Image
					src={slideImg}
					alt={'Картинка для слайда'}
					sizes={'(max-width: 768px) 150px, 200px'}
				/>
			</div>
			<div className={styles.elementComplexity}>
				<Svg name={'star'} className={Number(complexity) > 0 ? 'text-secondary-red' : 'text-grey-medium'} />
				<Svg name={'star'} className={Number(complexity) > 1 ? 'text-secondary-red' : 'text-grey-medium'} />
				<Svg name={'star'} className={Number(complexity) > 2 ? 'text-secondary-red' : 'text-grey-medium'} />
				<Svg name={'favorite'} className={'text-grey-medium ml-2'} />
			</div>
			<Text data={{ text: topText, tag: 'p' }} cn={{ weight: 'font-bold', margin: 'mt-7 mb-3' }} />
			<Button className={'mt-6 self-center'}>Начать</Button>
		</div>
	);
};
