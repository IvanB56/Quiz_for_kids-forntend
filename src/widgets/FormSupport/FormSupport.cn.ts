import {CN} from '@lib/ClassBem';

export function classes() {
	const BLOCK = CN('form-support');

	return {
		block: BLOCK(),
		elementForm: BLOCK('form'),
		elementSubmit: BLOCK('submit'),
		elementRegister: BLOCK('register'),
		elementField: BLOCK('field'),
		elementError: BLOCK('error'),
		elementLabel: BLOCK('label'),
		elementTextarea: BLOCK('textarea')
	};
}
