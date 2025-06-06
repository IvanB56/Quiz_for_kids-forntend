import {CN} from '@lib/ClassBem';

export function classes() {
	const BLOCK = CN('form-relatives');

	return {
		block: BLOCK(),
		elementForm: BLOCK('form'),
		elementSubmit: BLOCK('submit'),
		elementField: BLOCK('field'),
		elementInput: BLOCK('input'),
		elementError: BLOCK('error')
	};
}
