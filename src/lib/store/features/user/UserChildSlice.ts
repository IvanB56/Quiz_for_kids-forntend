import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {API_URL} from "@/shared/constants";

export type UserChildState = {
	loading: boolean;
	error?: string;
	activeChildId: number,
	data: {
		"user_id": number,
		"email": string,
		"phone": string,
		"name": string,
		"surname": string,
		"patronymic": string,
		"birthdate": string,
		"type": "Student"
	}[] | null;
}

const initialState: UserChildState = {
	loading: false,
	error: '',
	activeChildId: 0,
	data: null
};

export const fetchUserChild = createAsyncThunk<UserChildState['data']>(
	'users/fetchUserChild',
	async () => {
		const response = await fetch(API_URL + '/api/students', {
			headers: {
				Origin: API_URL,
				Accept: 'application/json',
			},
			credentials: 'include'
		});
		return (await response.json()).data;
	}
);

const UserChildSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setActiveChildId(state, action: {payload: number}) {
			state.activeChildId = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUserChild.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchUserChild.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(fetchUserChild.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
})

export const { setActiveChildId } = UserChildSlice.actions;
export const UserChildReducer = UserChildSlice.reducer;