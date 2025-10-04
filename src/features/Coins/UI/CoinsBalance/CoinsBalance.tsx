'use client';
import React from 'react';
import Image from "next/image";
import coinImg from "@assets/images/child/coin.webp";
import {CN} from '@/lib';
import {useSelector} from "react-redux";
import {getBalanceSelector} from "../../model/selectors/getBalanceSelector";
import {Text, WhiteCard} from "@components";

import './CoinsBalance.scss';

const block = CN('balance')

export const CoinsBalance = () => {
	const balance = useSelector(getBalanceSelector);

	return (
		<WhiteCard className={block()}>
			<div className={block('image')}>
				<Image className={block('coin')} width={60} height={60} src={coinImg} alt=""/>
			</div>
			<div className={block('text')}>
				<Text data={{text: String(balance), tag: 'p'}} className={block('total')} />
			</div>
		</WhiteCard>
	);
};