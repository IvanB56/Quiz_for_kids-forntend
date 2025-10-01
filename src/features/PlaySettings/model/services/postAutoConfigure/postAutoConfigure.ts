import {createAsyncThunk} from "@reduxjs/toolkit";
import {PlaySettingsConfigureScheme} from "@/features/PlaySettings/model/types/PlaySettingsConfigureScheme";
import {ThunkExtraArg} from "@lib/store";

export const fetchPostAutoConfigure = createAsyncThunk<
	{ message: string },
	PlaySettingsConfigureScheme,
	{ rejectValue: { message: string }, extra: ThunkExtraArg }
>(
	'play-settings/auto-configure',
	async ({userId, data}, {rejectWithValue, extra}) => {
		try {
			const result = await extra.api.post<{
				message: string
			}>(`/api/play-settings/user/${userId}/auto-configure`, data);
			return result.data;
		} catch (_) {
			return rejectWithValue({
				message: 'Произошла ошибка в запросе \'play-settings/auto-configure\''
			})
		}
	}
);