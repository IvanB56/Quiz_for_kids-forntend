import {createAsyncThunk} from "@reduxjs/toolkit";
import {GameLog} from "../../types/PlayScheme";
import {ThunkExtraArg} from "@lib/store";

export const fetchGameLog = createAsyncThunk<GameLog[], void, { rejectValue: string, extra: ThunkExtraArg }>(
	'play/game-log',
	async (_, {rejectWithValue, extra}) => {
		try {
			const response = await extra.api.get<{ data: GameLog[] }>('/api/play/game/log');
			const {data} = response.data;
			return data;
		} catch (_) {
			return rejectWithValue('Не удалось выполнить запрос [play/game-log]');
		}
	}
)