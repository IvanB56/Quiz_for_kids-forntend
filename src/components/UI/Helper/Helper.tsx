import React, {PropsWithChildren} from 'react';
import './Helper.scss';
import {useClassName} from "@hooks";

interface HelperProps extends PropsWithChildren {
	cn?: {
		width?: string
	}
}

export const Helper = ({children, cn}: HelperProps) => {
	const className = cn?.width ? `helper_${cn?.width}` : '';

	return (
		<div className={useClassName('helper', className)}>
			{children}
		</div>
	)
}