import {StateSchema} from "@lib/store/config/StateSchema";

export const getStudentIsLoading = (state: StateSchema) => state?.student?.isLoading;