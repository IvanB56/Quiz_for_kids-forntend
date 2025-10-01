import {StateSchema} from "@lib/store/config/StateSchema";

export const getTariffs = (state: StateSchema) => state?.tariff.data;
export const getActiveTariff = (state: StateSchema) => state?.tariff.active;
export const getIsLoading = (state: StateSchema) => state?.tariff.isLoading;
export const getError = (state: StateSchema) => state?.tariff.error;