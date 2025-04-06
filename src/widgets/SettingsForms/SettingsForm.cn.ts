import {CN} from '@lib/ClassBem';

export function classes() {
	const BLOCK = CN('settings-form');

	return {
		block: BLOCK(),
		elementForm: BLOCK('form'),
		elementSubmit: BLOCK('submit'),
		elementField: BLOCK('field'),
		elementLabel: BLOCK('label'),
		elementInput: BLOCK('input'),
	};
}
