import React from 'react';
import { useClassName } from '@hooks';
import type { IHeading } from './Heading.types.ts';
import classes from './Heading.cn';
import './Heading.scss';

export function Heading(props: IHeading) {
	const { data, children, cn, className } = props;
	const styles = classes({ ...cn });
	const TAG = data.tag;
	
	return (
		<TAG className={useClassName(styles.block, className)}>
			{children ? children : data.text}
		</TAG>
	);
}
