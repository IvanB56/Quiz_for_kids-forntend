import React from 'react';
import {useClassName} from '@hooks';
import classes from './Text.cn';
import type {IText} from './Text.types.ts';
import './Text.scss';

export function Text(props: IText) {
	const {data, children, cn, className, ref} = props;
	const styles = classes({...cn});
	const TEXT = children ? {} : {dangerouslySetInnerHTML: {__html: `${data?.text}`}};

	return React.createElement(
		data.tag,
		{
			className: useClassName(styles.block, className),
			ref,
			...TEXT,
		},
		children
	);
}
