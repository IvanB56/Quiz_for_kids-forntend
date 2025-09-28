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
import {quizCategoryReducer} from "@/features/PlaySettings/model/slice/QuizCategorySlice/QuizCategorySlice";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {studentRegistrationReducer} from "@/features/Registration/model/slice/registrationStudentSlice";
import {PlaySettingsConfigureReducer} from "@/entities/play/model/slice/playSettingsConfigureSlice";
import {PlayReducer} from "@/entities/play/model/slice/playSlice";

export const createReduxStore = (initialState?: StateSchema, router?: AppRouterInstance) => {
	const rootReducers: ReducersMapObject<StateSchema> = {
		user: userReducer,
		loginForm: loginReducer,
		profile: profileReducer,
		registration: registrationReducer,
		studentRegistration: studentRegistrationReducer,
		student: studentReducer,
		playSettings: playSettingsReducer,
		gameLog: gameLogReducer,
		gameLogSpecificUser: gameLogSpecificUserReducer,
		quizCategory: quizCategoryReducer,
		playSettingsConfigure: PlaySettingsConfigureReducer,
		play: PlayReducer
	};

	return configureStore({
		reducer: rootReducers,
		preloadedState: initialState,
		middleware: getDefaultMiddleware => getDefaultMiddleware({
			thunk: {
				extraArgument: {
					api: $api,
					navigate: router
				}
			}
		})
	})
}