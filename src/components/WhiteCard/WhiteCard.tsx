import React, {PropsWithChildren} from 'react';
import {classes} from './WhiteCard.cn';
import './WhiteCard.scss';
import {useClassName} from "@hooks";

type WhiteCardProps = {
	className?: string;
} & PropsWithChildren;

export const WhiteCard = ({children, className, ...props}: WhiteCardProps) => {
	const styles = classes();

	return (
		<div className={useClassName(styles.block, className)} {...props}>
			{
				children
			}
		</div>
	);
};