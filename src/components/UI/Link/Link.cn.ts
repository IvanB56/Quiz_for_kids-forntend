import {CN} from '@lib/ClassBem';
import type {ILink} from './Link.types';

export default function classes(cn: ILink['cn']) {
	const BLOCK = CN('link');
	const SIZE = (['text-big'].includes(cn?.size || '') && cn?.size) || '';
	const WEIGHT = (['font-normal', 'font-medium', 'font-semibold', 'font-bold'].includes(cn?.weight || '') && cn?.weight) || '';
	const COLOR = (['text-black'].includes(cn?.color || '') && cn?.color) || '';

	return {
		block: BLOCK(
			{
				['active']: cn?.active,
			},
			[SIZE, WEIGHT, COLOR, cn?.margin].join(' ').trim().replace('  ', ' ')
		),
	};
}
