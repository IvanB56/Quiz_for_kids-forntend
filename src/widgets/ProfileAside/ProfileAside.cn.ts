import {CN} from "@lib/ClassBem";

export function classes() {
	const BLOCK = CN('profile-aside');

	return {
		block: BLOCK(),
		elementInner: BLOCK('inner'),
		elementLink: BLOCK('link')
	}
}