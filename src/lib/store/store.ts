import {configureStore} from '@reduxjs/toolkit'
import {UserChildReducer, UserReducer} from "@lib/store/features/user";

export const makeStore = () => {
	return configureStore({
		reducer: {
			user: UserReducer,
			profileChild: UserChildReducer
		}
	})
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']