import React, {PropsWithChildren} from 'react';
import {CN} from "@/lib";
import {useClassName} from "@hooks";

import './Helper.scss';

interface HelperProps extends PropsWithChildren {
	cn?: {
		width?: 'full',
		color?: 'light-brown',
		shadow?: boolean
	},
	className?: string
}
const block = CN('helper');

export const Helper = ({children, cn, className}: HelperProps) => {

	return (
		<div className={useClassName(block({
			[`${cn?.width}`]: cn?.width === 'full',
			[`${cn?.color}`]: cn?.color === 'light-brown',
			shadow: !!cn?.shadow
		}), className)}>
			{children}
		</div>
	)
}