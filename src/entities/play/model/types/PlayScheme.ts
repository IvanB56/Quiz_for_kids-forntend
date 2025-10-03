import {PLAY_MODE, PLAY_STATUS} from "@/shared/constants/PlayMode";

export interface GameLog {
	type: PLAY_MODE;
	status: PLAY_STATUS;
	answer_submitted: string;
	text_quiz: {
		question: string;
		answer: string;
		note: string;
		category: {
			slug: string;
			name: string;
			description: string;
		}
	}
}

export interface GameLogSchema {
	data?: GameLog[];
	isLoading: boolean;
	error?: string;
}

export interface PlaySettingsConfigure {
	minimum_categories: number,
	minimum_questions_per_month: number,
	maximum_questions_per_month: number
}

export interface PlaySettingsConfigureSchema {
	data?: PlaySettingsConfigure,
	isLoading: boolean;
	error?: string;
}

export type CurrentGame = QuizData | TextQuizData;

export interface SubmitGameSchema {
	data?: CurrentGame;
	isLoading: boolean;
	error?: string;
}

export interface PlaySchema {
	currentGame?: CurrentGame;
	isLoading: boolean;
	error?: {
		message: string;
	}
}

export interface QuizData {
	type: PLAY_MODE.QUIZ,
	status: PLAY_STATUS,
	option_submitted?: number,
	quiz: {
		question: string,
		options: string[]
	}
}

export interface TextQuizData {
	type: PLAY_MODE.TEXT_QUIZ,
	status: PLAY_STATUS,
	answer_submitted: string,
	text_quiz: {
		question: string,
		answer: string,
		note: string,
	}
}


export function isQuizData(quiz?: CurrentGame | TextQuizData): quiz is QuizData {
	return !!quiz && quiz.type === PLAY_MODE.QUIZ;
}

export function isTextQuizData(quiz?: QuizData | TextQuizData): quiz is TextQuizData {
	return !!quiz && quiz.type === PLAY_MODE.TEXT_QUIZ;
}

export function isError(data?: CurrentGame | {
	message: string;
}): data is {
	message: string;
} {
	return !!(data && 'message' in data);
}