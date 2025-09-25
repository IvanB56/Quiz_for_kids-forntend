import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkExtraArg} from "@lib/store";
import {playSettingsActions} from "@/features/PlaySettings/model/slice/PlaySettingsSlice/PlaySettingsSlice";

export const fetchCanPrevious = createAsyncThunk<void, number | string, {
	rejectValue: Array<string>,
	extra: ThunkExtraArg
}>(
	'play-settings/can-play-previous',
	async (userId, {rejectWithValue, extra, dispatch}) => {

		try {
			const response = await extra.api.get<{ can: boolean }>(`/api/play-settings/user/${userId}/can-configure-from-previous`);

			const {can} = response.data;

			dispatch(playSettingsActions.canPrevious(can));
		} catch (_) {
			rejectWithValue(['Произошла ошибка при запросе [play-settings current]']);
		}

	}
);