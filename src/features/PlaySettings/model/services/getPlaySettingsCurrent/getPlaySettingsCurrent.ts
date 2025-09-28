import {createAsyncThunk} from "@reduxjs/toolkit";
import {PlaySettingsCurrent} from "@/features/PlaySettings/model/types/PlaySettingsScheme";
import {ThunkExtraArg} from "@lib/store";

export const fetchPlaySettingsCurrent = createAsyncThunk<PlaySettingsCurrent, number, { rejectValue: Array<string>, extra: ThunkExtraArg }>(
	'play-settings/current',
	async(userId, {rejectWithValue, extra}) => {

		try {
			const response = await extra.api.get<{data: PlaySettingsCurrent}>(`/api/play-settings/user/${userId}/active`);

			const {data} = response.data;
			return data;
		} catch (_) {
			return rejectWithValue(['Произошла ошибка при запросе [play-settings current]']);
		}

	}
);