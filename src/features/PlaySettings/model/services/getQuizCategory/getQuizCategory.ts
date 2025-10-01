import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkExtraArg} from "@lib/store";
import {QuizCategory} from "@/features/PlaySettings/model/types/QuizCategoryScheme";

export const fetchGetQuizCategory = createAsyncThunk<QuizCategory[], void, { rejectValue: string, extra: ThunkExtraArg }>(
	'play-settings/quiz-category',
	async(_, {rejectWithValue, extra}) => {

		try {
			const response = await extra.api.get<{data: QuizCategory[]}>(`/api/quiz-categories`);

			const {data} = response.data;
			return data;
		} catch (_) {
			return rejectWithValue('Произошла ошибка при запросе [play-settings/quiz-category]');
		}

	}
);