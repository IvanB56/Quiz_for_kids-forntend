import React, {memo, MouseEvent, PropsWithChildren} from 'react';
import {classes} from './WhiteCard.cn';
import {useClassName} from "@hooks";

import './WhiteCard.scss';

type WhiteCardProps = {
	className?: string;
	on?: {
		onClick?: () => void;
		onMouseEnter?: (event: MouseEvent<HTMLDivElement>) => void
	}
} & PropsWithChildren;

export const WhiteCard = memo(function WhiteCard({children, className, on, ...props}: WhiteCardProps) {
	const styles = classes();

	return (
		<div className={useClassName(styles.block, className)} {...props} onMouseEnter={on?.onMouseEnter}>
			{
				children
			}
		</div>
	);
});