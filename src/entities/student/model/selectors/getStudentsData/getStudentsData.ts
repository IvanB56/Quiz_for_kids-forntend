import {StateSchema} from "@lib/store/config/StateSchema";

export const getStudentsData = (state: StateSchema) => state?.student?.data;