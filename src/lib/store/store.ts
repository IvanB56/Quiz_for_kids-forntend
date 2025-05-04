import {configureStore} from '@reduxjs/toolkit'
import UserSlice from "@lib/store/features/user/UserSlice";
import {userApi} from "@lib/services/UserService";
import {childApi} from "@lib/services/ChildService";

export const makeStore = () => {
	return configureStore({
		reducer: {
			user: UserSlice,
			[userApi.reducerPath]: userApi.reducer,
			[childApi.reducerPath]: childApi.reducer
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(userApi.middleware, childApi.middleware),
	})
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']