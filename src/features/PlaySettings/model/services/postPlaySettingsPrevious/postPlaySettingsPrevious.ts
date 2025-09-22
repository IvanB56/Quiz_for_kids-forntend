import {createAsyncThunk} from "@reduxjs/toolkit";
import {PlaySettingsConfigureScheme} from "@/features/PlaySettings/model/types/PlaySettingsConfigureScheme";
import {ThunkExtraArg} from "@lib/store";

export const fetchPostPlaySettingsPrevious = createAsyncThunk<
	{ message: string },
	PlaySettingsConfigureScheme,
	{ rejectValue: { message: string }, extra: ThunkExtraArg }
>(
	'play-settings/configure-from-previous',
	async ({userId, data}, {rejectWithValue, extra}) => {
		try {
			const result = await extra.api.post<{
				message: string
			}>(`/api/play-settings/user/${userId}/configure-from-previous`, data);
			return result.data;
		} catch (_) {
			return rejectWithValue({
				message: 'Произошла ошибка в запросе \'play-settings/configure-from-previous\''
			})
		}
	}
);