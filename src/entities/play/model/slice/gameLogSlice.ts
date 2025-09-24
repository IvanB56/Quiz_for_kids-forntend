import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {GameLog, GameLogSchema} from "../types/PlayScheme";
import {fetchGameLog} from "../services/fetchGameLog/fetchGameLog";

const initialState: GameLogSchema = {
	data: undefined,
	isLoading: false,
	error: undefined
};

export const gameLogSlice = createSlice({
	name: 'play/game-log',
	initialState,
	reducers: {
		setData: (state, action: PayloadAction<GameLog[]>) => {
			state.data = action.payload
		}
	},
	extraReducers: builder =>
		builder
			.addCase(fetchGameLog.pending, (state) => {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(fetchGameLog.fulfilled, (state, action) => {
				state.isLoading = false;
				state.data = action.payload
			})
			.addCase(fetchGameLog.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
});

export const {actions: gameLogActions} = gameLogSlice;
export const {reducer: gameLogReducer} = gameLogSlice;