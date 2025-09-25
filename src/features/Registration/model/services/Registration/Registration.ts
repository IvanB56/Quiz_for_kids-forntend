import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkExtraArg} from "@lib/store";

interface RegistrationProps {
	phone: string;
	password: string;
	password_confirmation: string;
	email?:string
}

export const registrationAPI = createAsyncThunk<void, RegistrationProps, { rejectValue: Array<string>, extra: ThunkExtraArg }>(
	'sponsor/registration',
	async (userData, {extra, rejectWithValue}) => {
		try {
			await extra.api.post('/user/sponsor/register', userData);
		} catch (_) {
			return rejectWithValue(['Произошла ошибка при запросе [Sponsor registration]']);
		}
	}
);