import React from 'react';
import Image from "next/image";
import coinImg from "@assets/images/child/coin.webp";
import {CN} from '@/lib';
import {useSelector} from "react-redux";
import {getBalanceSelector} from "../../model/selectors/getBalanceSelector";

import './CoinsBalance.scss';

const block = CN('balance')

export const CoinsBalance = () => {
	const balance = useSelector(getBalanceSelector);

	return (
		<div className={block()}>
			<Image className={block('coin')} src={coinImg} alt=""/>
			<span className={block('total')}>{balance.toFixed(2)}</span>
		</div>
	);
};