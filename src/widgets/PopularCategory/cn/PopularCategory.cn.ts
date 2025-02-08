import {CN} from '@lib/ClassBem';
import type {TypePopularCategory} from '../types/PopularCategory.types.ts';

export function classes(cn: TypePopularCategory['cn']) {
	const BLOCK = CN('popular-category');
	return {
		block: BLOCK({}, [cn?.padding]),
		elementCardsWrapper: BLOCK('cards-wrapper'),
	};
}
