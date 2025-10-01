import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkExtraArg} from "@lib/store";

interface FetchGetToken {
		name: string;
		birthdate: string;
}

interface RejectValue {
	error: string;
}

export function isErrorToken(data?: RejectValue | { token: string}): data is RejectValue {
	return !!(data && "error" in data);
}

export const fetchGetToken = createAsyncThunk< { token: string }, FetchGetToken, {
	rejectValue: RejectValue,
	extra: ThunkExtraArg
}>(
	'student/create-token',
	async (fetchData, {rejectWithValue, extra}) => {
		try {
			await extra.api.get('/sanctum/csrf-cookie');
			const response = await extra.api.post<{ data: { token: string } }>('/api/students/create/register-token', fetchData);
			const {data} = response.data;

			return data;
		} catch (_) {
			return rejectWithValue({
				error: "Не удалось создать токен [student/create-token]"
			})
		}
	}
);