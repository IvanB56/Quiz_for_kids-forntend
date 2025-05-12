import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {API_URL} from "@/shared/constants";

type TypeImages = {
	image: {
		img?: string;
		alt?: string;
	}[]
};
export type UserChildState = {
	loading: boolean;
	error?: string;
	activeChildId: string,
	data: {
		id: string,
		email: string,
		phone: string,
		name: string,
		userable: {
			surname: string,
			patronymic: string,
			birthdate: string,
			type: "Student"
		}
	}[]
}

const initialState: UserChildState = {
	loading: false,
	error: '',
	activeChildId: '',
	data: [
		{
			id: '',
			email: "",
			phone: "",
			name: "",
			userable: {
				surname: '',
				patronymic: '',
				birthdate: '',
				type: "Student"
			}
		},
	]
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
		setActiveChildId(state, action: {payload: string}) {
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