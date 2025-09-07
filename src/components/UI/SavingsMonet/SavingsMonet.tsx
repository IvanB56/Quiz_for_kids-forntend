import React from 'react';
import Image from 'next/image';
import piggyBankImg from '@assets/images/child/piggy-bank-with-coins.webp';
import { Heading, Text } from '@/components';
import type {ISavingsMonet} from './SavingsMonet.types';
import classes from './SavingsMonet.cn';
import './SavingsMonet.scss';

export function SavingsMonet(props: ISavingsMonet) {
	const {data, cn} = props;
	const {currentAmount, targetAmount, } = data;
	const styles = classes({...cn});

	return (
		<div className={styles.block}>
			<div className={styles.elementHeader}>
				<Heading className={styles.TextTitle} data={{text: 'Коплю на смартфон', tag: 'h3'}} cn={{size: 'h3', color: 'text-primary-blue'}}/>
				<Image src={piggyBankImg} alt="монета" width={146} height={159} />
			</div>

			<div className={styles.elementProgress}>
				<div className={styles.elementProgressBar}>
					<div
						className={styles.elementProgressFill}
						style={{width: `${currentAmount / targetAmount * 100}%`}}
					/>
				</div>
				<span className={styles.elementProgressPercent}>{(currentAmount / targetAmount * 100).toLocaleString()}%</span>
			</div>

			<div className={styles.elementAmounts}>
				<div className={styles.elementCurrentAmount}>
					<Text data={{text: 'Сейчас монет', tag: 'p'}} cn={{size: 'text-body-1', color: 'text-primary-blue', weight: 'font-semibold'}}/>
					<div className={styles.elementCurrentAmountCount}>
						<Heading data={{text: `${currentAmount.toLocaleString()}`, tag: 'h2'}} cn={{size: 'h2', color: 'text-primary-black'}}/>
					</div>
				</div>


				<svg width="95" height="79" viewBox="0 0 95 79" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M4 4L39.5721 39.2164L4 75.1443" stroke="#2B788B" strokeWidth="7" strokeLinecap="round"/>
					<path d="M29 4L64.5721 39.2164L29 75.1443" stroke="#2B788B" strokeWidth="7" strokeLinecap="round"/>
					<path d="M54 4L89.5721 39.2164L54 75.1443" stroke="#2B788B" strokeWidth="7" strokeLinecap="round"/>
				</svg>

				<div className={styles.elementTargetAmount}>
					<Text data={{text: 'Осталось монет', tag: 'p'}} cn={{size: 'text-body-1', color: 'text-primary-blue', weight: 'font-semibold'}}/>
					<div>
						<Heading data={{text: `${targetAmount.toLocaleString()}`, tag: 'h2'}} cn={{size: 'h2', color: 'text-primary-black'}}/>
					</div>
				</div>
			</div>
		</div>
	);
}
