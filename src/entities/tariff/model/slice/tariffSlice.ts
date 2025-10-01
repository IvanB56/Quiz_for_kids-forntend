import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ActiveTariff, Tariff, TariffSchema} from "../types/tariffSchema";
import {fetchGetAllTariffs, fetchGetSubscribeActive} from "@/features/Subscribes";

const initialState: TariffSchema = {
	isLoading: false,
	error: undefined,
	data: undefined,
	active: undefined
}

export const tariffSlice = createSlice({
	name: 'tariff',
	initialState,
	reducers: {
		setActiveTariff: (state, action: PayloadAction<ActiveTariff>) => {
			state.active = action.payload
		},
		setAllTariffs: (state, action: PayloadAction<Tariff[]>) => {
			state.data = action.payload
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchGetSubscribeActive.pending, (state) => {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(fetchGetSubscribeActive.fulfilled, (state, action) => {
				state.isLoading = false;
				state.active = action.payload;
			})
			.addCase(fetchGetSubscribeActive.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload
			})
			.addCase(fetchGetAllTariffs.pending, (state) => {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(fetchGetAllTariffs.fulfilled, (state, action) => {
				state.isLoading = false;
				state.data = action.payload;
			})
			.addCase(fetchGetAllTariffs.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload
			})
	}
});

export const { actions: tariffActions } = tariffSlice;
export const { reducer: tariffReducer } = tariffSlice;