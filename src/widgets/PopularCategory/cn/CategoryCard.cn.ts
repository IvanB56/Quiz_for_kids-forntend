import {CN} from '@lib/ClassBem';
import type {TypeCategoryCard} from '../types/CategoryCard.types.ts';

export function classes(cn?: TypeCategoryCard['cn']) {
	const BLOCK = CN('category-card');

	return {
		block: BLOCK({}, [cn?.bgColor, cn?.border, cn?.boxShadow]),
	};
}
