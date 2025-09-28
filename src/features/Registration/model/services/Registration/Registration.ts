import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkExtraArg} from "@lib/store";

interface RegistrationProps {
	phone: string;
	password: string;
	password_confirmation: string;
	email?:string;
	phone_verify_code: string;
	name: string;
}

export const registrationAPI = createAsyncThunk<void, RegistrationProps, { rejectValue: Array<string>, extra: ThunkExtraArg }>(
	'sponsor/registration',
	async (userData, {extra, rejectWithValue}) => {
		try {
			await extra.api.get('/sanctum/csrf-cookie');
			await extra.api.post('/api/user/sponsor/register', userData);
			extra?.navigate?.push('/profile/rules');
		} catch (_) {
			return rejectWithValue(['Произошла ошибка при запросе [Sponsor registration]']);
		}
	}
);