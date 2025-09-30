import {createAsyncThunk} from "@reduxjs/toolkit";
import {Tariff} from "@/entities/tariff";
import {ThunkExtraArg} from "@lib/store";

export const fetchGetAllTariffs = createAsyncThunk<Tariff[], void, { rejectValue: string, extra: ThunkExtraArg }>(
	'subscribes/types',
	async (_, {extra, rejectWithValue}) => {
		try {
			const response = await extra.api.get<{ data: Tariff[] }>('/api/subscriptions/types');
			const {data} = response.data;

			return data;
		} catch (_) {
			return rejectWithValue('Не удалось выполнить запрос [subscribes/types]')
		}
	}
)