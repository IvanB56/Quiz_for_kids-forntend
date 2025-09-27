import type {ICoinsTotal} from './CoinsTotal.types';
import Image from 'next/image';
import coinImg from '@assets/images/child/coin.webp';
import React from 'react';
import classes from './CoinsTotal.cn';
import './CoinsTotal.scss';

export function CoinsTotal(props: ICoinsTotal) {
	const {cn, value} = props;
	const styles = classes({...cn});

	return (
		<div className={styles.block}>
			<Image src={coinImg} alt=""/>
			<span className={styles.elementTotal}>{value.toFixed(2)}</span>
		</div>
	);
}
