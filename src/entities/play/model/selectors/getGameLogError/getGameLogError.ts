import {StateSchema} from "@lib/store/config/StateSchema";

export const getGameLogError = (state: StateSchema) => state?.gameLog?.error;