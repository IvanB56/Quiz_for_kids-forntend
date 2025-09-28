import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkExtraArg} from "@lib/store";

interface VerifyProps {
	phone: string;
	password: string;
	password_confirmation: string;
	email?:string;
	name: string;
}

interface RejectValue {
	"message": string,
	"errors"?: Record<keyof VerifyProps, string[]>
}

export const fetchVerifyCode = createAsyncThunk<void, VerifyProps, { rejectValue: RejectValue, extra: ThunkExtraArg }>(
	'sponsor/verify-phone',
	async (userData, {extra, rejectWithValue}) => {
		try {
			await extra.api.get('/sanctum/csrf-cookie');
			await extra.api.post('/api/user/sponsor/verify-phone', userData);
		} catch (_) {
			return rejectWithValue({message: 'Произошла ошибка при запросе [Sponsor registration]'});
		}
	}
);