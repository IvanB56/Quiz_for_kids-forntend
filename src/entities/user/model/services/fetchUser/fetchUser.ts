import {createAsyncThunk} from "@reduxjs/toolkit";
import {User} from "../../types/user";
import {ThunkExtraArg} from "@lib/store";
import {userActions} from "@/entities/user";

export const fetchUser = createAsyncThunk<User, void, { rejectValue: string, extra: ThunkExtraArg }>(
	'user/get-user',
	async (_, {rejectWithValue, extra, dispatch}) => {
		try {
			const response = await extra.api.get<User>('/api/user');

			dispatch(userActions.setAuthData(response.data));

			return response.data
		} catch (_) {
			return rejectWithValue('Не удалось получить пользователя [user/get-user]');
		}

	}
)