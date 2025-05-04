import React, {PropsWithChildren} from 'react';
import {useClassName} from "@hooks";
import './SectionWhite.scss';

interface ISectionWhite extends PropsWithChildren {
	className?: string;
}

export const SectionWhite = ({children, className}: ISectionWhite) => {
	return (
		<section className={useClassName('section-white', className)}>
			{children}
		</section>
	);
};