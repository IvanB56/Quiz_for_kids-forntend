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