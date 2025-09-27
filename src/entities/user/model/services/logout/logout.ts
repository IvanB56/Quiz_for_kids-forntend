import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkExtraArg} from "@lib/store";

export const logout = createAsyncThunk<void, void, { rejectValue: string, extra: ThunkExtraArg }>(
	'user/logout',
	async (_, {rejectWithValue, extra}) => {
		try {
			await extra.api.post('/api/user/logout', {});
			extra?.navigate?.push('/');
		} catch (_) {
			return rejectWithValue('Не удалось получить пользователя [user/logout]');
		}

	}
)