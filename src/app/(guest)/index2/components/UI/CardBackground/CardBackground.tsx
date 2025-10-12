'use client';
import React from 'react';
import classes from './CardBackground.cn';
import type {ICardBackground} from './CardBackground.types';
import { Text } from '@components';
import Image from 'next/image';
import { useClassName } from '@hooks';

import './CardBackground.scss';

export const CardBackground = (props: ICardBackground) => {
	const { data, cn, className, onArrowClick } = props;
	const styles = classes({ ...cn });

	const getArrowSrc = () => {
		if (data.arrowSrc) return data.arrowSrc;

		switch (cn?.variant) {
			case 'how':
				return '/images/index2/earnings/arrow-bega.svg';
			case 'effects':
				return '/images/index2/earnings/arrow-light-brown.svg';
			default:
				return '/images/index2/earnings/arrow-brown.svg';
		}
	};

	return (
		<div className={useClassName(styles.block, className)}>
			<div className={styles.elementBackground}>
				{/* Используем picture для адаптивных изображений */}
				<picture className={styles.elementPicture}>
					{data.imgSrcMobile && (
						<source
							media="(max-width: 768px)"
							srcSet={data.imgSrcMobile}
						/>
					)}
					<Image
						src={data.imgSrc}
						alt=""
						width={data.imgWidth}
						height={data.imgHeight}
						className={styles.elementImage}
					/>
				</picture>
				<button
					className={styles.elementArrow}
					onClick={onArrowClick}
					type="button"
					aria-label="Перейти"
				>
					<Image
						src={getArrowSrc()}
						alt=""
						width={70}
						height={70}
					/>
				</button>
			</div>
			<div className={styles.elementContent}>
				<Text data={{text: data.textData || '', tag: 'p'}} cn={{size: 'text-body-1', color: 'text-brown', weight: 'font-medium'}} className={styles.elementDescription}/>
			</div>
		</div>
	);
};
