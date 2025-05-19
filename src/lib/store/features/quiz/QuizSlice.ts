import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_URL} from "@/shared/constants";

export type QuizState = {
	loading: boolean,
	error?: string,
	data: {
		slug: string,
		name: string,
		description: string,
		isActive?: boolean
	}[]
}

const initialState: QuizState = {
	loading: false,
	error: '',
	data: []
};

export const fetchQuiz = createAsyncThunk<QuizState['data']>(
	'quiz/fetchQuiz',
	async () => {
		const response = await fetch(API_URL + '/api/quiz-categories', {
			headers: {
				Origin: API_URL,
				Accept: 'application/json',
			}
		});
		return (await response.json()).data;
	}
);

const QuizSlice = createSlice({
	name: 'quiz',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchQuiz.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchQuiz.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(fetchQuiz.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
})

export const QuizReducer = QuizSlice.reducer