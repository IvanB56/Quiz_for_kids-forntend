import {CN} from '@lib/ClassBem';
import type { ICheckboxWithLabel } from './CheckboxWithLabel.types';

export default function classes(cn: ICheckboxWithLabel['cn']) {
	const BLOCK = CN('checkbox-with-label');

	return {
		block: BLOCK(
			{},
			[cn?.margin]
		),
		elementBox: BLOCK('box'),
		elementLabel: BLOCK('label'),
	};
}
