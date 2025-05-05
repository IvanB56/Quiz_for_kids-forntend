'use server';
import {API_URL} from "@/shared/constants";
import {cookies} from 'next/headers';

const { API_URL: urlServer } = process.env;

export const checkAuth = async () => {
	const cookie = (await cookies()).getAll();
	try {
		const {status, statusText}: Response = await fetch(`${urlServer}/api/auth-check`, {
			credentials: 'include',
			headers: {
				Origin: API_URL,
				Accept: 'application/json',
				Cookie: cookie.reduce((acc, item) => (acc += `${item.name}=${item.value};`), ''),
			},
		});
		return {
			status,
			statusText
		}
	} catch(err) {
		return {
			error: {
				message: 'не удалось выполнить запрос [auth-check]: ' + (err as Error).message,
				status: 'error'
			}
		}
	}
}
