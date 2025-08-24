import React, {PropsWithChildren, ReactNode} from 'react';
import './SectionGrid.scss';
import {CN} from "@/lib";
import {useClassName} from "@hooks";

type SectionGridProps = {
	rows: number | 'auto';
	cols: number | 'auto';
	gap?: string | number | { min: number; max: number };
	className?: string;
	classNameBody?: string;
	title?: () => ReactNode;
	subtitle?: () => ReactNode;
} & PropsWithChildren;

const block = CN('section-grid');

export const SectionGrid = ({rows, cols, gap, subtitle, title, className, classNameBody, children}: SectionGridProps) => {
	const gapStyle = typeof gap !== 'object' ? `${gap}px` : `fluid(${gap.max}, ${gap.min})`;

	return (
		<section className={useClassName(block(), className, 'container')}>
			{title?.()}
			{subtitle?.()}
			<div className={useClassName(block('body'), classNameBody)} style={{
				gridTemplateColumns: cols === 'auto' ? 'auto' : `repeat(${cols}, 1fr)`,
				gridTemplateRows: rows === 'auto' ? 'auto' : `repeat(${rows}, 1fr)`,
				gap: gapStyle
			}}>
				{children}
			</div>
		</section>
	);
};