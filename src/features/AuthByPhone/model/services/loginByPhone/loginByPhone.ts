import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

interface LoginByPhoneProps {
	phone: string;
	password: string
}

export const loginByPhone = createAsyncThunk<void, LoginByPhoneProps, { rejectValue: Array<string> }>(
	'login/loginByPhone',
	async(userData, thunkAPI) => {

		try {
			await axios.post('/api/user/sponsor/login', userData, {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				withCredentials: true,
				adapter: "fetch"
			});
		} catch (_) {
			return thunkAPI.rejectWithValue(['Произошла ошибка при запросе [Sponsor login]']);
		}

	}
);