import {GOAL_STATUS} from "@/shared/constants/goal";

export interface Goal {
	name: string,
	balance: number,
	amount: number,
	status: GOAL_STATUS
}

export type GoalCreateSchema = Pick<Goal, 'name' | 'amount'>;
export type GoalDebitSchema = Pick<Goal, 'amount'>;
export type GoalUpdateSchema = Partial<Pick<Goal, 'amount'>>;
export type GoalError = string;


export interface GoalSchema {
	data?: Goal,
	isLoading: boolean,
	error?: GoalError
}

