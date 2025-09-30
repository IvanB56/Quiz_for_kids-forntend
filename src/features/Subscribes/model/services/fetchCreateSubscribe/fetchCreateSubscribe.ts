import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkExtraArg} from "@lib/store";

export const fetchCreateSubscribe = createAsyncThunk<void, string, {rejectValue: string, extra: ThunkExtraArg}>(
	'subscribe/create',
	async (type, {rejectWithValue, extra}) => {
		try {
			const response = await extra.api.post<{ redirect: string }>('/api/payments/create/subscription', {subscription_type: type})
			const {redirect} = response.data;

			if (redirect) extra?.navigate?.push(redirect);
		} catch (_) {
			rejectWithValue('Не удалось выполнить запрос [subscribe/create]');
		}
	}
)