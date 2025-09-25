import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkExtraArg} from "@lib/store";
import axios from "axios";

interface LoginByPhoneProps {
	phone: string;
	password: string
}

export const loginByPhone = createAsyncThunk<LoginByPhoneProps, void, { rejectValue: Array<string>, extra: ThunkExtraArg }>(
	'login/loginByPhone',
	async(userData, {rejectWithValue, extra}) => {

		try {
			const xsrf = await axios.get('http://localhost/sanctum/csrf-cookie');
			await extra.api.post('/api/user/sponsor/login', userData, {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				withCredentials: true,
				adapter: "fetch"
			});
		} catch (_) {
			rejectWithValue(['Произошла ошибка при запросе [Sponsor login]']);
		}

	}
);