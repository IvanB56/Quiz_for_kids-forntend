'use client';
import React, {PropsWithChildren} from 'react';
import classes from './CardAnswers.cn';
import './CardAnswers.scss';
import { Text } from '@components';

type AllowedTags = 'div' | 'p' | 'span' | 'b' | 'i' | 'strong' | 'em' | 'u' | 's';

interface CardAnswersProps extends PropsWithChildren {
	textData?: {
		text?: string;
		tag?: AllowedTags;
	};
}

export const CardAnswers = ({children, textData }: CardAnswersProps) => {
	const styles = classes();

	return (
		<div className={styles.block}>
			{children}
			<div className={styles.elementAnswer}>
				<div className={styles.elementWrapperText}>
					<Text data={{ text: textData?.text || '', tag: (textData?.tag as AllowedTags) || 'p' }}/>
				</div>
			</div>
		</div>
	);
};
