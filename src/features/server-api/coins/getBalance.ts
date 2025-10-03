'use server';
import {API_URL} from "@/shared/constants";
import {cookies} from 'next/headers';

const {API_URL: urlServer, MODE} = process.env;

interface GetBalanceData {
	data: {
		balance: number
	}
}

export async function getBalance(): Promise<{
	balance?: number,
	error?: { message: string; status: 'error' }
}> {
	const cookie = (await cookies()).getAll();

	try {
		const response: Response = await fetch(`${urlServer}/api/coins/balance`, {
			credentials: 'include',
			method: 'GET',
			headers: {
				Origin: API_URL,
				Accept: 'application/json',
				Cookie: cookie.reduce((acc, item) => (acc += `${item.name}=${item.value};`), ''),
			},
		});
		const { data }: GetBalanceData = await response.json();
		return data;
	} catch (err) {
		if (MODE === 'development') {
				return {
						balance: 4
				}
		}

		return {
			error: {
				message: 'не удалось выполнить запрос [getBalance]: ' + (err as Error).message,
				status: 'error'
			}
		}
	}
}