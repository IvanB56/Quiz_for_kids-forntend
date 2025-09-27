import React, {PropsWithChildren} from 'react';
import {CN} from "@/lib";
import {useClassName} from "@hooks";

import './Helper.scss';

interface HelperProps extends PropsWithChildren {
	cn?: {
		width?: 'full',
		color?: 'light-brown',
		shadow?: boolean,
		padding?: 'p-homework',
	},
	className?: string
}
const block = CN('helper');

export const Helper = ({children, cn, className}: HelperProps) => {

	return (
		<div className={useClassName(block({
			[`${cn?.width}`]: cn?.width === 'full',
			[`${cn?.color}`]: cn?.color === 'light-brown',
			[`${cn?.padding}`]: cn?.padding === 'p-homework',
			shadow: !!cn?.shadow
		}), className)}>
			{children}
		</div>
	)
}
