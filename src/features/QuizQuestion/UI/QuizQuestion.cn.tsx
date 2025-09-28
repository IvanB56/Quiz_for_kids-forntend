import {CN} from "@/lib";

export default function classes() {
	const BLOCK = CN('quiz-questions');

	return {
		block: BLOCK(),
		elementQuizContainer: BLOCK('quiz-container'),
		elementScoreContainer: BLOCK('score-container'),
		elementScorePlus: BLOCK('score-plus'),
		elementScoreMinus: BLOCK('score-minus'),
		elementQuestion: BLOCK('question'),
		elementOptionsContainer: BLOCK('options-container'),
		elementOptionButton: BLOCK('option-button'),
		elementTimerContainer: BLOCK('timer-container'),
		elementTimer: BLOCK('timer'),
		elementInput: BLOCK('input'),
	}
}
