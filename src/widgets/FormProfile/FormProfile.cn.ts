import {CN} from "@/lib";

export function classes() {
	const BLOCK = CN('form-profile');

	return {
		block: BLOCK(),
		elementButton: BLOCK('button')
	}
}