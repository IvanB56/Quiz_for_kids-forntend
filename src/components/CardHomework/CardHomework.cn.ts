import {CN} from '@lib/ClassBem';
import type { ICardHomework } from './CardHomework.types';

export default function classes(cn: ICardHomework['cn']) {
	const BLOCK = CN('card-homework');

	return {
		block: BLOCK(
			{},
			[cn?.margin]
		),
		elementBanner: BLOCK('banner'),
		elementBannerContent: BLOCK('banner-content'),
		elementBannerImage: BLOCK('banner-image'),
		elementContentWrapper: BLOCK('content-wrapper'),
		elementRatingWrapper: BLOCK('rating-wrapper'),
		elementButtonsWrapper: BLOCK('buttons-wrapper'),
		elementButtonStart: BLOCK('button-start'),
		elementButtonPlug: BLOCK('button-plug'),
		elementComplexity: BLOCK('complexity'),
	};
}
