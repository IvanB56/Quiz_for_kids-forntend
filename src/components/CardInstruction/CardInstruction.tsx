import Image from 'next/image';
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
			<div className={styles.elementWrapperImage}>
				<Image className={styles.elementImage} src={data.image} alt=""/>
			</div>
			<div className={styles.elementWrapperContent}>
				<Text data={{text: data.text, tag: 'p'}} cn={{size: 'text-body-2', color: 'text-black', weight: 'font-semibold'}}/>
			</div>
		</div>
	);
}
