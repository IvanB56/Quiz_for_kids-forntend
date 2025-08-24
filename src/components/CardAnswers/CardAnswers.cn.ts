import {CN} from "@/lib";

export default function classes() {
	const BLOCK = CN('card-answers');

	return {
		block: BLOCK(),
		elementAnswer: BLOCK('answer'),
		elementWrapperText: BLOCK('wrapper-text'),
	}
}
