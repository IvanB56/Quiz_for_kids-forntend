import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkExtraArg} from "@lib/store";
import {CurrentGame, PlaySchema} from "@/entities/play/model/types/PlayScheme";

export const fetchSubmitGame = createAsyncThunk<CurrentGame, {answer: string}, {
	rejectValue: PlaySchema['error'],
	extra: ThunkExtraArg
}>(
	'play/submit-game',
	async (gameData, {extra, rejectWithValue}) => {
		try {
			const response = await extra.api.post<{ data: CurrentGame }>('/api/play/game/submit', gameData);
			const {data} = response.data;
			return data;
		} catch (_) {
			return rejectWithValue({message: 'Не удалось выполнить запрос [play/submit-game]'});
		}
	}
)