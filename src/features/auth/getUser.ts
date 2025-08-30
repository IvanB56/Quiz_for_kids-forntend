'use server';
import {API_URL} from "@/shared/constants";
import {cookies} from 'next/headers';
import {TUser} from "@shared";

const { API_URL: urlServer } = process.env;

export async function getUser(): Promise<{user?: TUser; error?: { message: string, status: string }}> {
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

		const user: TUser = await response.json();
		return {
			user
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