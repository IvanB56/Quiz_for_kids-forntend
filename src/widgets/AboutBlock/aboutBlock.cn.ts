import { CN } from '@/lib';

export function classes(cn?: { direction?: 'reverse' }) {
	const BLOCK = CN('about-block');
	return {
		block: BLOCK({
			[`${cn?.direction}`]: ['reverse'].includes(cn?.direction || ''),
		}),
		elementTextWrapper: BLOCK('text-wrapper'),
		elementImageWrapper: BLOCK('image-wrapper'),
	};
}
