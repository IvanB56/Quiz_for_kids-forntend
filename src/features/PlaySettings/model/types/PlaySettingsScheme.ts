import {PLAY_MODE} from "@/shared/constants/PlayMode";

export interface PlaySettingsCurrent {
	active: boolean,
	mode: PLAY_MODE,
	budget: number,
	questions_quantity: number,
	categories: {
		slug: string;
		name: string;
		description: string;
	}[]
}

export interface PlaySettingsCurrentScheme {
	data?: PlaySettingsCurrent;
	isLoading: boolean;
	error?: string[];
}