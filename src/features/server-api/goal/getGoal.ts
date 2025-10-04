import {API_URL} from "@/shared/constants";
import {cookies} from "next/headers";
import {Goal, GoalError} from "@/entities/goal/model/types/GoalSchema";

const {API_URL: urlServer, MODE} = process.env;

export const getGoal = async (): Promise<{goal?: Goal, error?: GoalError}> => {
	const cookie = (await cookies()).getAll();
	try {
		const response = await fetch(`${urlServer}/api/coins/savings/goal/active`, {
			credentials: 'include',
			method: 'GET',
			headers: {
				Origin: API_URL,
				Accept: 'application/json',
				Cookie: cookie.reduce((acc, item) => (acc += `${item.name}=${item.value};`), ''),
			},
		});
		const {data}: { data?: Goal } = await response.json();

		if (data && 'error' in data) {
			return {
				error: data.error as string
			}
		} else {
			return {
				goal: data
			}
		}
	} catch (err) {
		if (MODE === 'development') {
			return {
			// 	goal: {
			// 		"name": "Купить мячик",
			// 		"balance": 0,
			// 		"amount": 10,
			// 		"status": GOAL_STATUS.CREATED
			// 	}
			}
		}

		return {
			error: 'не удалось выполнить запрос [getGreetings]: ' + (err as Error).message
		}
	}
}