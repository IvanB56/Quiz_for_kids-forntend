import React, {PropsWithChildren} from 'react';
import {classes} from './WhiteCard.cn';
import './WhiteCard.scss';

export const WhiteCard = ({children, ...props}: PropsWithChildren) => {
	const styles = classes();

	return (
		<div className={styles.block} {...props}>
			{
				children
			}
		</div>
	);
};