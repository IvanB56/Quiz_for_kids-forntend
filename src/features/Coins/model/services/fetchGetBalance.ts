import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkExtraArg} from "@lib/store";
import {CoinsBalanceType} from "@/features/Coins/model/types/CoinsSchema";

export interface RejectValue {
	message: string
}

export const fetchGetBalance = createAsyncThunk<CoinsBalanceType, void, {
	rejectValue: RejectValue,
	extra: ThunkExtraArg
}>(
	'coins/get-balance',
	async (_, {rejectWithValue, extra}) => {
		try {
			const response = await extra.api.get<{ data: CoinsBalanceType }>('/api/coins/balance');
			const {data} = response.data;

			return {balance: data.balance};
		} catch (_) {
			return rejectWithValue({message: 'Произошла ошибка при запросе [coins/get-balance]'});
		}

	}
);