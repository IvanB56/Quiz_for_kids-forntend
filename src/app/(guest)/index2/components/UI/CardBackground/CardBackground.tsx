'use client';
import React from 'react';
import classes from './CardBackground.cn';
import type {ICardBackground} from './CardBackground.types';
import './CardBackground.scss';
import { Text } from '@components';
import Image from 'next/image';
import { useClassName } from '@hooks';

export const CardBackground = (props: ICardBackground) => {
	const { data, cn, className } = props;
	const styles = classes({ ...cn });

	return (
		<div className={useClassName(styles.block, className)}>
			<div className={styles.elementBackground}>
				<Image src={data.imgSrc} alt="" width={data.imgWidth} height={data.imgHeight} className={styles.elementImage}/>
			</div>
			<div className={styles.elementContent}>
				<Text data={{text: data.textData || '', tag: 'p'}} cn={{size: 'text-body-1', color: 'text-brown', weight: 'font-medium'}} className={styles.elementDescription}/>
			</div>
		</div>
	);
};
