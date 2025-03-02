import { CN } from '@/lib';
import { IProps } from "./types/index";

export function classes(cn?: IProps['cn']) {
	const BLOCK = CN('about-block');
	return {
		block: BLOCK({
			[`${cn?.direction}`]: ['reverse'].includes(cn?.direction || ''),
		}, [cn?.margin, cn?.padding]),
		elementTextWrapper: BLOCK('text-wrapper'),
		elementImageWrapper: BLOCK('image-wrapper'),
	};
}
