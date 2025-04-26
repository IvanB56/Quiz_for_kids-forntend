import {CN} from "@/lib";

export function classes() {
	const BLOCK = CN('aside-link');

	return {
		block: BLOCK(),
		elementNested: BLOCK('nested'),
		elementNestedTitle: BLOCK('nested-title'),
		elementTitleText: BLOCK('title-text'),
		elementIcon: BLOCK('icon'),
		elementNestedLinks: BLOCK('nested-links'),
		elementHidden: BLOCK('hidden'),
	}
}