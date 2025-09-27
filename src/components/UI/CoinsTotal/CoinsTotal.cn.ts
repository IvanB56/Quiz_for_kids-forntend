import {CN} from '@lib/ClassBem';
import type { ICoinsTotal } from './CoinsTotal.types';

export default function classes(cn: ICoinsTotal['cn']) {
	const BLOCK = CN('coins-total');

	return {
		block: BLOCK(
			{},
			[cn?.margin]
		),
		elementCoin: BLOCK('coin'),
		elementTotal: BLOCK('total'),
	};
}
