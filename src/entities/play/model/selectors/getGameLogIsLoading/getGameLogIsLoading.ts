import {StateSchema} from "@lib/store/config/StateSchema";

export const getGameLogIsLoading = (state: StateSchema) => state?.gameLog?.isLoading;