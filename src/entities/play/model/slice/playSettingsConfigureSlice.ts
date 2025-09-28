import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PlaySettingsConfigure, PlaySettingsConfigureSchema} from "../types/PlayScheme";

const initialState: PlaySettingsConfigureSchema = {
	data: undefined,
	isLoading: false,
	error: undefined
}

export const playSettingsConfigureSlice = createSlice(
	{
		name: 'play/configure',
		initialState,
		reducers: {
			setData: (state, action: PayloadAction<PlaySettingsConfigure>) => {
				state.data = action.payload
			}
		}
	}
)

export const {actions: PlaySettingsConfigureActions} = playSettingsConfigureSlice;
export const {reducer: PlaySettingsConfigureReducer} = playSettingsConfigureSlice;