import {StateSchema} from "@lib/store/config/StateSchema";

export const getStudentError = (state: StateSchema) => state?.student?.error;