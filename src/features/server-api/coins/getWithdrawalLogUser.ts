'use server';
import {API_URL} from "@/shared/constants";
import {cookies} from 'next/headers';

const {API_URL: urlServer, MODE} = process.env;

interface GetWithdrawalLogUser {
	id: string;
	amount: number;
	status: string;
	created_at: string;
	completed_at: string | null;
}

export async function getWithdrawalLogUser(userId?: string): Promise<{
	data?: GetWithdrawalLogUser,
	error?: { message: string; status: 'error' }
}> {
	if (!userId) {
		return {
			error: {
				message: 'не указан userID',
				status: 'error'
			}
		}
	}
	const cookie = (await cookies()).getAll();

	try {
		const response: Response = await fetch(`${urlServer}/api/coins/withdrawal/log/user/${userId}`, {
			credentials: 'include',
			method: 'GET',
			headers: {
				Origin: API_URL,
				Accept: 'application/json',
				Cookie: cookie.reduce((acc, item) => (acc += `${item.name}=${item.value};`), ''),
			},
		});
		const data = await response.json();
		return {data}
	} catch (err) {
		if (MODE === 'development') {
			// 	return {}
		}

		return {
			error: {
				message: 'не удалось выполнить запрос [getWithdrawalLogUser]: ' + (err as Error).message,
				status: 'error'
			}
		}
	}
}