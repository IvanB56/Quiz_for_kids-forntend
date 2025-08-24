import {CN} from "@/lib";

export function classes() {
	const BLOCK = CN('banner-animate');

	return {
		block: BLOCK(),
		texts: BLOCK('texts'),
		text: BLOCK('text'),
		image: BLOCK('image'),
		badge: BLOCK('badge'),
		description: BLOCK('description'),
	}
}