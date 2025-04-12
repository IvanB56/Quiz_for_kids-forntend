import { CN } from '@lib/ClassBem';

export function classes() {
	const BLOCK = CN('registration');

	return {
		block: BLOCK(),
		elementForm: BLOCK('form'),
		elementLogin: BLOCK('login'),
		elementSubmit: BLOCK('submit'),
	};
}
