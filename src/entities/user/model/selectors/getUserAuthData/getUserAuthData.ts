import {StateSchema} from "@lib/store/config/StateSchema";

export const getUserAuthData = (state: StateSchema) => state.user.authData;
