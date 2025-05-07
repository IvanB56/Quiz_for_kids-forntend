import React, {ReactNode} from 'react';
import classes from './CardWhite.cn';
import './CardWhite.scss';

type CardWhiteProps = {
	cardsRender: () => ReactNode;
}

export const CardWhite = ({cardsRender}: CardWhiteProps) => {
	const styles = classes();

	return (
		<div className={styles.block}>
			{ cardsRender() }
		</div>
	);
};