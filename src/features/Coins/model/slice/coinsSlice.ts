import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CoinsBalanceSchema} from "@/features/Coins/model/types/CoinsSchema";
import {fetchGetBalance} from "@/features/Coins/model/services/fetchGetBalance";


const initialState: CoinsBalanceSchema = {
	balance: 0,
	error: undefined,
	isLoading: false
};

export const coinsSlice = createSlice({
		name: 'coins',
		initialState,
		reducers: {
			setBalance(state, action: PayloadAction<number>) {
				state.balance = action.payload || 0;
			}
		},
		extraReducers: builder =>
			builder
				.addCase(fetchGetBalance.pending, state => {
					state.isLoading = true;
					state.error = undefined;
				})
				.addCase(fetchGetBalance.fulfilled, (state, action) => {
					state.isLoading = false;
					state.balance = action.payload.balance;
				})
				.addCase(fetchGetBalance.rejected, (state, action) => {
					state.isLoading = false;
					state.error = action.payload;
				})
	}
);

export const {actions: coinsActions} = coinsSlice;
export const {reducer: coinsReducer} = coinsSlice;