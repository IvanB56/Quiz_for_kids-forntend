'use client';
import React, {Dispatch, ReactNode, SetStateAction, useState} from 'react';
import classes from './CardWhite.cn';
import './CardWhite.scss';

type CardWhiteProps = {
	cardsRenderAction: (isActive: boolean, setIsActive: Dispatch<SetStateAction<boolean>>) => ReactNode;
	isActive?: boolean;
}

export const CardWhite = ({cardsRenderAction, isActive}: CardWhiteProps) => {
	const styles = classes();
	const [cardActive, setCardActive] = useState<boolean>(isActive || false)

	return (
		<div className={styles.block}>
			{ cardsRenderAction(cardActive, setCardActive) }
		</div>
	);
};