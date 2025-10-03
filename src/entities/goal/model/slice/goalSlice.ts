import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Goal, GoalSchema} from "../types/GoalSchema";
import {fetchGoalActive} from "../services/fetchGoalActive";

const initialState: GoalSchema = {
	data: undefined,
	isLoading: false,
	error: undefined
}

export const goalSlice = createSlice({
	name: 'goal',
	initialState,
	reducers: {
		setData(state, action: PayloadAction<Goal>) {
			state.data = action.payload;
		}
	},
	extraReducers: builder =>
		builder
			.addCase(fetchGoalActive.pending, (state) => {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(fetchGoalActive.fulfilled, (state, action) => {
				state.isLoading = false;
				state.data = action.payload;
			})
			.addCase(fetchGoalActive.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
})

export const {actions: goalActions, reducer: goalReducer} = goalSlice;