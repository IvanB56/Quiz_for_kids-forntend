'use client';
import React, {PropsWithChildren} from 'react';
import classes from '../CardAnswers/CardAnswers.cn';
import '../CardAnswers/CardAnswers.scss';
import { Text } from '@components';

interface CardAnswersProps extends PropsWithChildren {
	textData?: {
		text?: string;
		tag?: string;
	};
}

export const CardAnswers = ({children, textData }: CardAnswersProps) => {
	const styles = classes();

	return (
		<div className={styles.block}>
			{children}
			<div className={styles.elementAnswer}>
				<div className={styles.elementWrapperText}>
					<Text data={{ text: textData?.text || '', tag: textData?.tag || 'p' }}/>
				</div>
			</div>
		</div>
	);
};
