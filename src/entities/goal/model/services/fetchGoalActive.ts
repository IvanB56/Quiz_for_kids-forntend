import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkExtraArg} from "@lib/store";
import {Goal, GoalError} from "../types/GoalSchema";

interface ResponseData {
	data: Goal;
}

interface ResponseError  {
	error: GoalError;
}

function isError(data: ResponseData | ResponseError): data is ResponseError {
	return ('error' in data);
}

export const fetchGoalActive = createAsyncThunk<Goal, void, { rejectValue: GoalError, extra: ThunkExtraArg }>(
	'goal/get-active',
	async (_, {rejectWithValue, extra}) => {
		try {
			const response = await extra.api.get<ResponseData | ResponseError>('/api/coins/savings/goal/active');

			if (isError(response.data)) {
				const {error} = response.data;
				return rejectWithValue(error);
			}

			const {data} = response.data

			return data;
		} catch (e) {
			return rejectWithValue('Не удалось выполнить запрос [goal/get-active]' + (e as Error).message)
		}
	}
)