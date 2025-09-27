import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RegistrationSchema} from "../types/registration";
import {registrationAPI} from "../services/Registration/Registration";

const initialState: RegistrationSchema = {
	isLoading: false,
	error: undefined,
	name: '',
	phone: '',
	password: '',
	password_confirmation: '',
	phone_verify_code: '',
	email: undefined
};

export const registrationSlice = createSlice({
	name: 'registration',
	initialState,
	reducers: {
		setName: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
		},
		setPhone: (state, action: PayloadAction<string>) => {
			state.phone = action.payload;
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload;
		},
		setPasswordConfirm: (state, action: PayloadAction<string>) => {
			state.password_confirmation = action.payload;
		},
		setEmail: (state, action: PayloadAction<string>) => {
			state.email = action.payload;
		},
		setVerifyCode: (state, action: PayloadAction<string>) => {
			state.phone_verify_code = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(registrationAPI.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(registrationAPI.fulfilled, (state) => {
				state.isLoading = false;
			})
			.addCase(registrationAPI.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
	}
});

export const {actions: registrationActions} = registrationSlice;
export const {reducer: registrationReducer} = registrationSlice;
