'use server';
import {API_URL} from "@/shared/constants";
import {cookies} from 'next/headers';

const { API_URL: urlServer } = process.env;

export async function getUser() {
	const cookie = (await cookies()).getAll();

	try {
		const response: Response = await fetch(`${urlServer}/api/user`, {
			credentials: 'include',
			headers: {
				Origin: API_URL,
				Accept: 'application/json',
				Cookie: cookie.reduce((acc, item) => (acc += `${item.name}=${item.value};`), ''),
			},
		});

		const {data} = await response.json();

		return {
			data
		}
	} catch(err) {
		return {
			error: {
				message: 'не удалось выполнить запрос [user]: ' + (err as Error).message,
				status: 'error'
			}
		}
	}
}