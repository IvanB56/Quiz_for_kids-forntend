import {CN} from "@/lib";

export default function classes() {
	const BLOCK = CN('card-background');

	return {
		block: BLOCK(),
		elementBackground: BLOCK('background'),
		elementImage: BLOCK('image'),
		elementContent: BLOCK('content'),
		elementDescription: BLOCK('description'),
	}
}
