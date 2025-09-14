import {CN} from '@lib/ClassBem';
import type { IRange } from './Range.types';

export default function classes(cn: IRange['cn']) {
	const BLOCK = CN('range');

	return {
		block: BLOCK(
			{},
			[cn?.margin]
		),
		elementWrapperLabel: BLOCK('wrapper-label'),
		elementWrapperRange: BLOCK('wrapper-range'),
		elementContainerScale: BLOCK('container-scale'),
		elementScale: BLOCK('scale'),
		elementScaleFilled: BLOCK('scale-filled'),
		elementPoint: BLOCK('point'),
	};
}
