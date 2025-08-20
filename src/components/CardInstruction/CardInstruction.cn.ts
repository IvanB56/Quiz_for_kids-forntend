import {CN} from '@lib/ClassBem';
import type { ICardInstraction } from './CardInstruction.types';

export default function classes(cn: ICardInstraction['cn']) {
	const BLOCK = CN('card-instruction');

	return {
		block: BLOCK(
			{},
			[cn?.margin]
		),
		elementWrapperContent: BLOCK('wrapper-content'),
		elementWrapperImage: BLOCK('wrapper-image'),
	};
}
