import {StateSchema} from "@lib/store/config/StateSchema";

export const getGameLogSpecificUserLoading = (state: StateSchema) => state?.gameLogSpecificUser?.isLoading;