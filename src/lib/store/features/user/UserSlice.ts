import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {API_URL} from "@/shared/constants";

export interface UserState {
	loading: boolean;
	error: string | undefined;
	data: {
		id: number,
		email: string,
		phone: string,
		name: string,
		userable: {
			surname: string,
			patronymic: string,
			city: string,
			birthdate: string,
			type: 'Sponsor' | 'Student'
		}
	}
}

const initialState: UserState = {
	loading: false,
	error: '',
	data: {
		id: 0,
		email: '',
		phone: '',
		name: '',
		userable: {
			surname: '',
			patronymic: '',
			city: '',
			birthdate: '',
			type: 'Sponsor'
		}
	}
};

export const fetchUsers = createAsyncThunk<UserState['data']>(
	'users/fetchUsers',
	async () => {
		const response = await fetch(API_URL + '/api/user', {
			headers: {
				Origin: API_URL,
				Accept: 'application/json',
			},
			credentials: 'include'
		});
		return (await response.json()).data;
	}
);

const UserSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
})

export const UserReducer = UserSlice.reducer;