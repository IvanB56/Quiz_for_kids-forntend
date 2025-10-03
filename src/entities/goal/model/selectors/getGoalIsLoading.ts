import {StateSchema} from "@lib/store/config/StateSchema";

export const getGoalIsLoading = (state: StateSchema) => state?.goal?.isLoading;