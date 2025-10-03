import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CurrentGame, PlaySchema} from "../types/PlayScheme";
import {fetchCurrentGame} from "@/features/QuizQuestion/model/services/fetchCurrentGame/fetchCurrentGame";
import {fetchSubmitGame} from "@/features/QuizQuestion/model/services/fetchSubmitGame/fetchSubmitGame";

const initialState: PlaySchema = {
	currentGame: undefined,
	isLoading: false,
	error: undefined
}

export const playSlice = createSlice(
	{
		name: 'play',
		initialState,
		reducers: {
			setCurrentGame: (state, action: PayloadAction<CurrentGame | undefined>) => {
				state.currentGame = action.payload
			}
		},
		extraReducers: builder =>
			builder
				.addCase(fetchCurrentGame.pending, (state) => {
					state.isLoading = true;
					state.error = undefined
				})
				.addCase(fetchCurrentGame.fulfilled, (state, action) => {
					state.isLoading = false;
					state.currentGame = action.payload;
				})
				.addCase(fetchCurrentGame.rejected, (state, action) => {
					state.isLoading = false;
					state.error = action.payload;
				})
				.addCase(fetchSubmitGame.pending, (state) => {
					state.isLoading = true;
					state.error = undefined
				})
				.addCase(fetchSubmitGame.fulfilled, (state, action) => {
					state.isLoading = false;
					state.currentGame = action.payload;
				})
				.addCase(fetchSubmitGame.rejected, (state, action) => {
					state.isLoading = false;
					state.error = action.payload;
				})
	}
)

export const {actions: PlayActions} = playSlice;
export const {reducer: PlayReducer} = playSlice;