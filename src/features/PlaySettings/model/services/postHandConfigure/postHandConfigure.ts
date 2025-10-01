import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkExtraArg} from "@lib/store";
import {PlaySettingsConfigure} from "../../types/PlaySettingsConfigureScheme";

interface RequestData {
	userId: number;
	data: PlaySettingsConfigure;
}

export const postHandConfigure = createAsyncThunk<void, RequestData, {rejectValue: string, extra: ThunkExtraArg}>(
	'play-settings/hand-configure',
	async ({userId, data}, {rejectWithValue, extra}) => {
		try {
			await extra.api.post(`/api/play-settings/user/${userId}/configure`, data);
		} catch (_) {
			rejectWithValue('Не удалось выполнить запрос [play-settings/hand-configure]');
		}
	}
)