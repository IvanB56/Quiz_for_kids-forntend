import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkExtraArg} from "@lib/store";
import {CurrentGame, PlaySchema} from "@/entities/play/model/types/PlayScheme";

export const fetchCurrentGame = createAsyncThunk<CurrentGame, void, {
	rejectValue: PlaySchema['error'],
	extra: ThunkExtraArg
}>(
	'play/current-game',
	async (_, {extra, rejectWithValue}) => {
		try {
			const response = await extra.api.get<{ data: CurrentGame }>('/api/play/game');
			const {data} = response.data;
			return data;
		} catch (_) {
			return rejectWithValue({message: 'Не удалось выполнить запрос [play/current-game]'});
		}
	}
)