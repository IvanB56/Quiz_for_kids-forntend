import React, {PropsWithChildren} from 'react';
import './SectionWhite.scss';

interface ISectionWhite extends PropsWithChildren {
	className?: string;
	overflow?: 'overflow-hidden' | 'overflow-visible' | 'overflow-auto';
	position?: 'relative' | 'absolute' | 'static';
}

export const SectionWhite = ({children, className, position, overflow = 'overflow-auto'}: ISectionWhite) => {
	let classes = `section-white ${overflow} ${position || ''}`;
	if (className) classes+= ` ${className}`;

	return (
		<section className={classes}>
			{children}
		</section>
	);
};