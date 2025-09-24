import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {$api} from "@/shared/api/api";
import {StateSchema} from "@lib/store/config/StateSchema";
import {userReducer} from '@/entities/user';
import {profileReducer} from "@/entities/profile";
import {studentReducer} from "@/entities/student";
import {loginReducer} from "@/features/AuthByPhone";
import {registrationReducer} from "@/features/Registration";
import {playSettingsReducer} from "@/features/PlaySettings/model/slice/PlaySettingsSlice/PlaySettingsSlice";
import {gameLogReducer} from '@/entities/play/model/slice/gameLogSlice';
import {gameLogSpecificUserReducer} from '@/entities/play/model/slice/gameLogSpecificuserSlice';

export const createReduxStore = (initialState?: StateSchema) => {
	const rootReducers: ReducersMapObject<StateSchema> = {
		user: userReducer,
		loginForm: loginReducer,
		profile: profileReducer,
		registration: registrationReducer,
		student: studentReducer,
		playSettings: playSettingsReducer,
		gameLog: gameLogReducer,
		gameLogSpecificUser: gameLogSpecificUserReducer
	};

	return configureStore({
		reducer: rootReducers,
		preloadedState: initialState,
		middleware: getDefaultMiddleware => getDefaultMiddleware({
			thunk: {
				extraArgument: {
					api: $api
				}
			}
		})
	})
}