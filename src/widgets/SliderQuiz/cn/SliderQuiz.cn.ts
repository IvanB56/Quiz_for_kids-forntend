import {CN} from "@lib/ClassBem";
import {ISliderQuiz} from "../types/SliderQuiz.type";

export function classes(cn: ISliderQuiz['cn']) {
	const BLOCK = CN('slider-quiz');

	return {
		block: BLOCK({}, [cn?.background, cn?.padding])
	}
}
