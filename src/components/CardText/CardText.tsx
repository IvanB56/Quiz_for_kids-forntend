import React from 'react';
import { Text } from '@/components';
import type {ICardText} from './CardText.types';
import classes from './CardText.cn';
import './CardText.scss';

export function CardText(props: ICardText) {
	const {
		data,
		cn,
	} = props;

	const { textItems } = data;
	const styles = classes(cn);

	return (
		<div className={styles.block}>
			<div className={styles.elementContainerCard}>
				<div className={styles.elementWrapperWallet}>
					{textItems && textItems.map((item, index) => (
						<Text key={index} data={{text: item.title, tag: 'p'}} cn={{ size: item.titleSize, color: item.titleColor, weight: item.titleWeight, margin: item.titleMargin}}/>
					))}
				</div>
			</div>

		</div>
	);
}
