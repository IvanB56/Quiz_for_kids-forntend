import {createAsyncThunk} from "@reduxjs/toolkit";
import {GameLog} from "../../types/PlayScheme";
import {ThunkExtraArg} from "@lib/store";

export const fetchGameLogSpecificUser = createAsyncThunk<GameLog[], number, { rejectValue: string, extra: ThunkExtraArg }>(
	'play/game-log-specific-user',
	async (userId, {rejectWithValue, extra}) => {
		try {
			const response = await extra.api.get<{ data: GameLog[] }>(`/api/play/game/log/user/${userId}/`);
			const {data} = response.data;
			return data;
		} catch (_) {
			return rejectWithValue('Не удалось выполнить запрос [play/game-log-specific-user]');
		}
	}
)