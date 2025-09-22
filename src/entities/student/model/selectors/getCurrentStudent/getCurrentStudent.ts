import {StateSchema} from "@lib/store/config/StateSchema";

export const getCurrentStudent = (state: StateSchema) => state?.student?.currentStudent;