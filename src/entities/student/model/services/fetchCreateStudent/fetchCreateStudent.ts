import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkExtraArg} from "@lib/store";

interface FetchCreateStudent {
	token: string;
	login: string;
	password: string;
	password_confirmation: string;
}

interface RejectValue {
	message: string;
	errors?: Record<Partial<keyof FetchCreateStudent>, string[]>
}

export const fetchCreateStudent = createAsyncThunk<void, FetchCreateStudent, {rejectValue: RejectValue, extra: ThunkExtraArg}>(
	'student/create',
	async (data, {rejectWithValue, extra}) => {
		try {
			await extra.api.post<[]>('/api/user/student/register', data);
		} catch (_) {
			return rejectWithValue({
				message: "Не удалось создать профиль ребенка [student/create]"
			})
		}
	}
);