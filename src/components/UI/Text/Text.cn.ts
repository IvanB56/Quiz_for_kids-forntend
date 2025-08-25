import type {IText} from './Text.types';

export default function classes(cn: IText['cn']) {
	const COLOR = (['text-primary-grey', 'text-black', 'text-primary-white', 'text-primary-red', 'text-primary-blue'].includes(cn?.color || '') && cn?.color) || '';
	const SIZE =
		(['text-body-1', 'text-body-2', 'text-body-3', 'text-body-4', 'text-body-5'].includes(cn?.size || '') &&
			cn?.size) ||
		'text-body-2';
	const WEIGHT =
		(['font-normal', 'font-medium', 'font-semibold', 'font-bold'].includes(cn?.weight || '') && cn?.weight) || '';
	const WRAP = (['text-balance', 'text-wrap', 'text-nowrap', 'text-pretty'].includes(cn?.textWrap || '') && cn?.textWrap) || '';

	return {
		block: [COLOR, SIZE, WEIGHT, WRAP, cn?.margin].join(' ').trim().replace('  ', ' '),
	};
}
