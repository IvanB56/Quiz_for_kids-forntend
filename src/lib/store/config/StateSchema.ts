import {UserSchema} from "@/entities/user";
import {LoginSchema} from "@/features/AuthByPhone/model/types/loginSchema";
import {RegistrationSchema} from "@/features/Registration/model/types/registration";
import {createReduxStore} from "@lib/store";
import {ProfileSchema} from "@/entities/profile";
import {StudentSchema} from "@/entities/student";
import {AxiosInstance} from "axios";
import {PlaySettingsCurrentScheme} from "@/features/PlaySettings/model/types/PlaySettingsScheme";
import {GameLogSchema, PlaySettingsConfigureSchema} from "@/entities/play/model/types/PlayScheme";
import {QuizCategoryScheme} from "@/features/PlaySettings/model/types/QuizCategoryScheme";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {StudentRegistrationSchema} from "@/features/Registration/model/types/studentRegistrationSchema";

export interface StateSchema {
	user: UserSchema;
	loginForm: LoginSchema;
	profile: ProfileSchema;
	registration: RegistrationSchema;
	studentRegistration: StudentRegistrationSchema;
	student: StudentSchema;
	playSettings: PlaySettingsCurrentScheme;
	gameLog: GameLogSchema;
	gameLogSpecificUser: GameLogSchema;
	quizCategory: QuizCategoryScheme;
	playSettingsConfigure: PlaySettingsConfigureSchema;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export interface ThunkExtraArg {
	api: AxiosInstance,
	navigate?: AppRouterInstance
}