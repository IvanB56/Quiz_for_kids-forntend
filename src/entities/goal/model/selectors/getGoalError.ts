import {StateSchema} from "@lib/store/config/StateSchema";

export const getGoalError = (state: StateSchema) => state?.goal?.error;