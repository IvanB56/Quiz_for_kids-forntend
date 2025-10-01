import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StudentRegistrationSchema} from '../types/studentRegistrationSchema';

const initialState: StudentRegistrationSchema = {
	isLoading: false,
	error: undefined,
	login: '',
	password: '',
	password_confirmation: '',
	token: ''
};

export const studentRegistrationSlice = createSlice({
	name: 'registration/student',
	initialState,
	reducers: {
		setLogin: (state, action: PayloadAction<string>) => {
			state.login = action.payload;
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload;
		},
		setPasswordConfirm: (state, action: PayloadAction<string>) => {
			state.password_confirmation = action.payload;
		},
		setToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		}
	}
});

export const {actions: studentRegistrationActions} = studentRegistrationSlice;
export const {reducer: studentRegistrationReducer} = studentRegistrationSlice;
