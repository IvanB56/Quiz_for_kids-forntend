import {UserSchema} from "@/entities/user";
import {LoginSchema} from "@/features/AuthByPhone/model/types/loginSchema";
import {RegistrationSchema} from "@/features/Registration/model/types/registration";
import {createReduxStore} from "@lib/store";
import {ProfileSchema} from "@/entities/profile";
import {StudentSchema} from "@/entities/student";
import {AxiosInstance} from "axios";
import {PlaySettingsCurrentScheme} from "@/features/PlaySettings/model/types/PlaySettingsScheme";
import {GameLogSchema} from "@/entities/play/model/types/PlayScheme";
import {QuizCategoryScheme} from "@/features/PlaySettings/model/types/QuizCategoryScheme";

export interface StateSchema {
	user: UserSchema;
	loginForm: LoginSchema;
	profile: ProfileSchema;
	registration: RegistrationSchema;
	student: StudentSchema;
	playSettings: PlaySettingsCurrentScheme;
	gameLog: GameLogSchema;
	gameLogSpecificUser: GameLogSchema;
	quizCategory: QuizCategoryScheme
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export interface ThunkExtraArg {
	api: AxiosInstance
}