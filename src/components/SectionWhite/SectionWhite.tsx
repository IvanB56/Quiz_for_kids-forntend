import React, {PropsWithChildren} from 'react';
import './SectionWhite.scss';

interface ISectionWhite extends PropsWithChildren {
	className?: string;
	overflow?: 'overflow-hidden' | 'overflow-visible' | 'overflow-auto';
}

export const SectionWhite = ({children, className, overflow = 'overflow-auto'}: ISectionWhite) => {
	let classes = `section-white ${overflow}`;
	if (className) classes+= ` ${className}`;

	return (
		<section className={classes}>
			{children}
		</section>
	);
};