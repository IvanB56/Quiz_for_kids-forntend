import {CN} from "@/lib";

export default function classes() {
	const BLOCK = CN('card-white');

	return {
		block: BLOCK(),
		elementImage: BLOCK('image'),
		elementButton: BLOCK('button')
	}
}