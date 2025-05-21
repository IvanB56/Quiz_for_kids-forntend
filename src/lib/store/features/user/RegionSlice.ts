import {TRegion} from "@shared";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_URL} from "@/shared/constants";

type RegionsSliceType = {
	loading: boolean;
	error?: string;
	data: TRegion;
};

const initialState: RegionsSliceType = {
	loading: false,
	error: '',
	data: []
};

export const fetchRegions = createAsyncThunk<RegionsSliceType['data']>(
	'regions/fetchRegions',
	async () => {
		const response = await fetch(API_URL + '/api/regions', {
			headers: {
				Origin: API_URL,
				Accept: 'application/json',
			}
		});
		return (await response.json()).data;
	}
);

const RegionsSlice = createSlice({
	name: 'regions',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchRegions.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchRegions.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(fetchRegions.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export const RegionsReducer = RegionsSlice.reducer;