import React from 'react';
import { Button, Input, Text } from '@/components';
import type {ICardWallet} from './CardWallet.types';
import classes from './CardWallet.cn';
import './CardWallet.scss';

export function CardWallet(props: ICardWallet) {
	const {
		data,
		cn,
	} = props;

	const { earningsItems, buttonDescription, textRequest } = data;
	const styles = classes(cn);

	return (
		<div className={styles.block}>
			<div className={styles.elementContainerCard}>
				<div className={styles.elementWrapperWallet}>
					{earningsItems && earningsItems.map((item, index) => (
						<div key={index}>
							<Text data={{text: item.title, tag: 'p'}} cn={{ size: item.titleSize, color: 'text-primary-blue', weight: 'font-semibold'}}/>

							{item.valueDailyEarnings !== undefined && (
								<div className={styles.elementWrapperDailyEarnings}>
									<div className="flex flex-col items-center">
										<p className={styles.elementDailyEarnings}>{item.valueDailyEarnings}</p>
									</div>
								</div>
							)}

							{item.valueTotalWallet !== undefined && (
								<div className={styles.elementWrapperTotalWallet}>
									<div className="flex flex-col items-center">
										<p className={styles.elementTotalWallet}>{item.valueTotalWallet}</p>
									</div>
								</div>
							)}

							{item.valueInput !== undefined && (
								<div className={styles.elementWrapperTotalWallet}>
									<div className="flex flex-col items-center">
										<Input className={styles.elementInput} type={'number'} defaultValue={item.valueInput} />
									</div>
								</div>
							)}
						</div>
					))}
				</div>
				{buttonDescription && (
					<Button className="mx-auto mt-[35] block" type="button">{buttonDescription}</Button>
				)}
			</div>

			{textRequest && (
				<div className={styles.elementWrapperTextRequest}>
					<Text data={{ text: textRequest, tag: 'p' }} cn={{size: 'text-body-1', color: 'text-primary-white', weight: 'font-semibold'}} />
				</div>
			)}

		</div>
	);
}
