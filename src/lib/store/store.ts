import {configureStore} from '@reduxjs/toolkit'
import {RegionsReducer, UserChildReducer, UserReducer} from "@lib/store/features/user";

export const makeStore = () => {
	return configureStore({
		reducer: {
			user: UserReducer,
			profileChild: UserChildReducer,
			regions: RegionsReducer
		}
	})
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']