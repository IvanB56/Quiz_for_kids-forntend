import type {ICoinsTotal} from './CoinsTotal.types';
import classes from './CoinsTotal.cn';
import './CoinsTotal.scss';
import Image from 'next/image';
import coinImg from '@assets/images/child/coin.webp';
import React from 'react';

export function CoinsTotal(props: ICoinsTotal) {
	const {cn} = props;
	const styles = classes({...cn});

	return (
		<div className={styles.block}>
			<Image src={coinImg} alt=""/>
			<span className={styles.elementTotal}>00.00</span>
		</div>
	);
}
