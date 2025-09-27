import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkExtraArg} from "@lib/store";

interface FetchGetToken {
		name: string;
		birthdate: string;
}

interface RejectValue {
	message: string;
	errors?: Record<Partial<keyof FetchGetToken>, string[]>
}

export const fetchGetToken = createAsyncThunk<string, FetchGetToken, {
	rejectValue: RejectValue,
	extra: ThunkExtraArg
}>(
	'student/create-token',
	async (fetchData, {rejectWithValue, extra}) => {
		try {
			await extra.api.get('/sanctum/csrf-cookie');
			const response = await extra.api.post<{ data: { token: string } }>('/api/students/create/register-token', fetchData);
			const {data} = response.data;

			return data.token
		} catch (_) {
			return rejectWithValue({
				message: "Не удалось создать токен [student/create-token]"
			})
		}
	}
);