import React from 'react';
import {useClassName} from "@hooks";
import {classes} from "./Button.cn";
import {IButton} from "./Button.type";
import './Button.scss';

export const Button = (props: IButton) => {
	const {data, className, children, cn} = props;
	const styles = classes(cn);
	const TAG = data?.href ? 'a' : 'button';

	return (
		<TAG className={useClassName(styles.block, className)} href={data?.href}>
			{children && children}
			{!children && data.text}
		</TAG>
	)
};
