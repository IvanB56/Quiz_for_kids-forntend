import {CN} from '@lib/ClassBem';

export function classes() {
	const BLOCK = CN('form-home-task');

	return {
		block: BLOCK(),
		elementForm: BLOCK('form'),
		elementSubmit: BLOCK('submit'),
		elementRegister: BLOCK('register'),
		elementInput: BLOCK('input'),
		elementTextarea: BLOCK('textarea'),
		elementLabel: BLOCK('label'),
		elementError: BLOCK('error')
	};
}
