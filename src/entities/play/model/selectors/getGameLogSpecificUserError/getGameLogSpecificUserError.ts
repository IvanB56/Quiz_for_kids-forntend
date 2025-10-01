import {StateSchema} from "@lib/store/config/StateSchema";

export const getGameLogSpecificUserError = (state: StateSchema) => state?.gameLogSpecificUser?.error;