import {CN} from '@lib/ClassBem';
import type { ISavingsMonet } from './SavingsMonet.types';

export default function classes(cn: ISavingsMonet['cn']) {
	const BLOCK = CN('savings-monet');

	return {
		block: BLOCK({},[cn?.margin]),
		TextTitle: BLOCK('text-title'),
		elementHeader: BLOCK('header'),
		elementProgress: BLOCK('progress'),
		elementProgressBar: BLOCK('progress-bar'),
		elementProgressFill: BLOCK('progress-fill'),
		elementProgressPercent: BLOCK('progress-percent'),
		elementAmounts: BLOCK('amounts'),
		elementCurrentAmount: BLOCK('current-amount'),
		elementCurrentAmountCount: BLOCK('current-amount-count'),
		elementTargetAmount: BLOCK('target-amount'),
	};
}
