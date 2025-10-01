import {createAsyncThunk} from "@reduxjs/toolkit";
import {PlaySettingsConfigure} from "../../types/PlayScheme";
import {ThunkExtraArg} from "@lib/store";
import {PlaySettingsConfigureActions} from "../../slice/playSettingsConfigureSlice";

export const fetchPlaySettingsConfigure = createAsyncThunk<void, void, {
	rejectValue: string,
	extra: ThunkExtraArg
}>(
	'play/configure',
	async (_, {rejectWithValue, extra, dispatch}) => {
		try {
			const response = await extra.api.get<PlaySettingsConfigure>('/api/play-settings/configure-requirements');
			dispatch(PlaySettingsConfigureActions.setData(response.data));
		} catch (_) {
			rejectWithValue('Не удалось выполнить запрос [play/configure]');
		}
	}
)