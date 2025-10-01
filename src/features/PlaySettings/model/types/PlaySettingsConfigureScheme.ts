import {PLAY_MODE} from "@/shared/constants/PlayMode";

export interface PlaySettingsConfigure {
	budget: number;
	questions_quantity?: number;
	categories?: string[];
	mode?: PLAY_MODE;
}

export interface PlaySettingsConfigureScheme {
	data: PlaySettingsConfigure,
	userId: number
}