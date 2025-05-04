import {CN} from "@/lib";

export default function classes() {
	const BLOCK = CN('select');

	return {
		block: BLOCK(),
		elementIcon: BLOCK('icon'),
		elementOptions: BLOCK('options'),
		elementOption: BLOCK('option')
	}
}