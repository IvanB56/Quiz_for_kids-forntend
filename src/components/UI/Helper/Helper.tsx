import React, {PropsWithChildren} from 'react';
import './Helper.scss';


export const Helper = ({children}: PropsWithChildren) => {
	return (
		<div className="helper">
			{ children }
		</div>
	)
}