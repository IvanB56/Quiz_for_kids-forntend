import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {QuizCategory, QuizCategoryScheme} from "../../types/QuizCategoryScheme";
import {fetchGetQuizCategory} from '../../services/getQuizCategory/getQuizCategory';

const initialState: QuizCategoryScheme = {
	isLoading: false,
	data: undefined,
	error: undefined
};

export const QuizCategorySlice = createSlice({
	name: 'play-settings/quiz-category',
	initialState,
	reducers: {
		setData: (state, action: PayloadAction<QuizCategory[]>) => {
			state.data = action.payload;
		}
	},
	extraReducers: builder =>
		builder
			.addCase(fetchGetQuizCategory.pending, (state) => {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(fetchGetQuizCategory.fulfilled, (state, action) => {
				state.isLoading = false;
				state.data = action.payload;
			})
			.addCase(fetchGetQuizCategory.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
});

export const {actions: quizCategoryActions} = QuizCategorySlice;
export const {reducer: quizCategoryReducer} = QuizCategorySlice;