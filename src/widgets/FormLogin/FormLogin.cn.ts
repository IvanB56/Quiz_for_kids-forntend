import { CN } from '@lib/ClassBem';

export function classes() {
	const BLOCK = CN('login');

	return {
		block: BLOCK(),
		elementForm: BLOCK('form'),
		elementSubmit: BLOCK('submit'),
		elementRegister: BLOCK('register'),
	};
}
