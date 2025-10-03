import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkExtraArg} from "@lib/store";
import {CurrentGame, PlaySchema} from "@/entities/play/model/types/PlayScheme";
import {PlayActions} from "@/entities/play/model/slice/playSlice";

export const fetchGetNewGame = createAsyncThunk<void, void, {
	rejectValue: PlaySchema['error'],
	extra: ThunkExtraArg
}>(
	'play/get-new-game',
	async (_, {extra, rejectWithValue, dispatch}) => {
		try {
			const response = await extra.api.post<{ data: CurrentGame }>('/api/play/game');
			const {data} = response.data;
			dispatch(PlayActions.setCurrentGame(data));
		} catch (_) {
			rejectWithValue({message: 'Не удалось выполнить запрос [play/submit-game]'});
		}
	}
)