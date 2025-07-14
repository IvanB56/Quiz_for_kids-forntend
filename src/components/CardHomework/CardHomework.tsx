import {useClassName} from "@hooks";
import type {ICardHomework} from './CardHomework.types';
import classes from './CardHomework.cn';
import './CardHomework.scss';
import Image from 'next/image';
import coinImg from '@assets/images/child/image-homework.webp';
import React from 'react';
import { Button, Svg, Text } from '@components';

export function CardHomework(props: ICardHomework) {
	const { data = { complexity: '0' }, cn } = props;
	const { complexity } = data;
	const styles = classes({...cn});

	return (
		<div className={styles.block}>
			<div className={styles.elementBanner}>
				<div className={styles.elementBannerContent}>
					<Text data={{text: 'Домашнее задание', tag: 'p'}} cn={{size: 'text-body-1', color: 'text-primary-white', weight: 'font-normal'}}/>
				</div>
				<div className={styles.elementBannerImage}>
					<Image src={coinImg} alt=""/>
				</div>
			</div>

			<div className={styles.elementContentWrapper}>
				<div className={styles.elementRatingWrapper}>
					<Text data={{text: 'Название', tag: 'p'}} cn={{size: 'text-body-1'}}/>
					<div className={styles.elementComplexity}>
						<Svg name={'star'} className={Number(complexity) > 0 ? 'text-secondary-red' : 'text-grey-medium'} />
						<Svg name={'star'} className={Number(complexity) > 1 ? 'text-secondary-red' : 'text-grey-medium'} />
						<Svg name={'star'} className={Number(complexity) > 2 ? 'text-secondary-red' : 'text-grey-medium'} />
						<Svg name={'favorite'} className={'text-grey-medium ml-2'} />
					</div>
				</div>
				<Text data={{text: 'описание', tag: 'p'}} cn={{size: 'text-body-2', margin: 'mt-[35px] mb-[20px]'}}/>
				<Text data={{text: 'За выполнение домашнего задания ты получшь 300 монет.', tag: 'p'}} cn={{ size: 'text-body-3', color: 'text-primary-red', margin: 'mb-[10px]'}}/>
				<div className={styles.elementButtonsWrapper}>
					<Button className={styles.elementButtonPlug}/>
					<Button className={styles.elementButtonStart} type="button" variant="default">начать</Button>
				</div>
			</div>
		</div>
	);
}
