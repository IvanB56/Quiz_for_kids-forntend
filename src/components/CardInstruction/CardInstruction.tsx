import Image from 'next/image';
import coinImg from '@assets/images/child/image-homework.webp';
import React from 'react';
import { Svg, Text } from '@components';
import type { ICardInstraction } from './CardInstruction.types';
import classes from './CardInstruction.cn';
import './CardInstraction.scss';

export function CardInstruction(props: ICardInstraction) {
	const { data, cn } = props;
	const styles = classes({...cn});

	return (
		<div className={styles.block}>
			<div className={styles.elementWrapperContent}>
				<Text data={{text: 'Домашнее задание', tag: 'p'}} cn={{size: 'text-body-1', color: 'text-black', weight: 'font-semibold'}}/>
			</div>
			<div className={styles.elementWrapperImage}>
				<Image src={coinImg} alt=""/>
			</div>
		</div>
	);
}
