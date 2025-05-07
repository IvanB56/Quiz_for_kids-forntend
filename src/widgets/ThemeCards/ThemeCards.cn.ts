import {CN} from "@/lib";

export function classes() {
	const BLOCK = CN('theme-cards');

	return {
		block: BLOCK(),
		elementCardImage: BLOCK('card-image'),
		elementCardButton: BLOCK('card-button')
	}
}