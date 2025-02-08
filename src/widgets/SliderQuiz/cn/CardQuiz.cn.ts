import {CN} from "@lib/ClassBem";
import {ICardQuiz} from "../types/CardQuiz.type";

export function classes(cn?: ICardQuiz['cn']) {
	const BLOCK = CN('card-quiz');

	return {
		block: BLOCK({}, [cn?.padding]),
		elementImageWrapper: BLOCK('image-wrapper'),
		elementComplexity: BLOCK('complexity')
	}
}
