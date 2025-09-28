'use client';
import React, {PropsWithChildren} from 'react';
import classes from './CardBackground.cn';
import './CardBackground.scss';
import { Text } from '@components';
import Image from 'next/image';

interface CardAnswersProps extends PropsWithChildren {
	textData: string;
	imgSrc: string;
	imgWidth: number;
	imgHeight: number;
}

export const CardBackground = ({ textData, imgSrc, imgWidth, imgHeight }: CardAnswersProps) => {
	const styles = classes();

	return (
		<div className={styles.block}>
			<div className={styles.elementBackground}>
				<Image src={imgSrc} alt="" width={imgWidth} height={imgHeight} className={styles.elementImage}/>
			</div>
			<div className={styles.elementContent}>
				<Text data={{text: textData || '', tag: 'p'}} cn={{size: 'text-body-1', color: 'text-brown', weight: 'font-medium'}} className={styles.elementDescription}/>
			</div>
		</div>
	);
};
