import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkExtraArg} from "@lib/store";

interface LoginByPhoneProps {
	phone: string;
	password: string
}

export interface RejectValue {
	message: string;
	status: string;
}

export const loginByPhone = createAsyncThunk<void, LoginByPhoneProps, { rejectValue: RejectValue, extra: ThunkExtraArg }>(
	'login/loginByPhone',
	async(userData, {rejectWithValue, extra}) => {
		try {
			// await extra.api.get('/sanctum/csrf-cookie');
			const response = await extra.api.post('/api/user/sponsor/login', userData);

			if ('message' in response.data) {
				const {message} = response.data;
				return rejectWithValue({message, status: 'invalid'});
			}

			extra?.navigate?.refresh();
		} catch (_) {
			return rejectWithValue({message: 'Произошла ошибка при запросе [login/loginByPhone]', status: 'serverError'});
		}
	}
);