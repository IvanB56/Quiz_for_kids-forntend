import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoginSchema} from "../types/loginSchema";
import {loginByPhone} from '../services/loginByPhone/loginByPhone';

const initialState: LoginSchema = {
	password: '',
	phone: '',
	isLoading: false,
};

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setUserPhone: (state, action: PayloadAction<string>) => {
			state.phone = action.payload;
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginByPhone.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(loginByPhone.fulfilled, (state) => {
				state.isLoading = false;
			})
			.addCase(loginByPhone.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
	}
});

export const {actions: loginActions} = loginSlice;
export const {reducer: loginReducer} = loginSlice;
