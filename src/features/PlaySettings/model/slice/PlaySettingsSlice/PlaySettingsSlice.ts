import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PlaySettingsCurrent, PlaySettingsCurrentScheme} from "../../types/PlaySettingsScheme";
import {fetchPlaySettingsCurrent} from "../../services/getPlaySettingsCurrent/getPlaySettingsCurrent";

const initialState: PlaySettingsCurrentScheme = {
	isLoading: false,
	canPrevious: false
};

export const PlaySettingsSlice = createSlice({
	name: 'play-settings',
	initialState,
	reducers: {
		setData: (state, action: PayloadAction<PlaySettingsCurrent>) => {
			state.data = action.payload;
		},
		canPrevious: (state, action: PayloadAction<boolean>) => {
			state.canPrevious = action.payload
		}
	},
	extraReducers: builder =>
		builder
			.addCase(fetchPlaySettingsCurrent.pending, (state) => {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(fetchPlaySettingsCurrent.fulfilled, (state, action) => {
				state.isLoading = false;
				state.data = action.payload;
			})
			.addCase(fetchPlaySettingsCurrent.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
});

export const {actions: playSettingsActions} = PlaySettingsSlice;
export const {reducer: playSettingsReducer} = PlaySettingsSlice;