import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkExtraArg} from "@lib/store";
import {ActiveTariff} from "@/entities/tariff/model/types/tariffSchema";

export const fetchGetSubscribeActive = createAsyncThunk<ActiveTariff, void, { rejectValue: string, extra: ThunkExtraArg }>(
	'subscribes/get-subscribe-active',
	async (_, {extra, rejectWithValue}) => {
		try {
			const response = await extra.api.get<{ data: ActiveTariff }>('/api/subscriptions/active');
			const {data} = response.data;

			return data;
		} catch (_) {
			return rejectWithValue('Не удалось выполнить запрос [get-subscribe-active]')
		}
	}
)