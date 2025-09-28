import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkExtraArg} from "@lib/store";

interface LoginByPhoneProps {
	phone: string;
	password: string
}

export interface RejectValue {
	message: string,
	errors?: Record<keyof LoginByPhoneProps, string[]>
}

export const loginByPhone = createAsyncThunk<void, LoginByPhoneProps, { rejectValue: RejectValue, extra: ThunkExtraArg }>(
	'login/loginByPhone',
	async(userData, {rejectWithValue, extra}) => {
		try {
			await extra.api.get('/sanctum/csrf-cookie');
			await extra.api.post('/api/user/sponsor/login', userData);

			extra?.navigate?.refresh();
		} catch (_) {
			rejectWithValue({message: 'Произошла ошибка при запросе [Sponsor login]'});
		}

	}
);