import {StateSchema} from "@lib/store/config/StateSchema";

export const getCurrentGame = (state: StateSchema) => state?.play;