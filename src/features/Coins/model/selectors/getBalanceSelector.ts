import {StateSchema} from "@lib/store/config/StateSchema";

export const getBalanceSelector = (state: StateSchema) => state?.coins?.balance || 0;