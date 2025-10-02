import {API_URL} from "@/shared/constants";
import {cookies} from "next/headers";

const {API_URL: urlServer, MODE} = process.env;

interface GetGreetings {
	data: {
		message: string,
		language: string
	}
}

export const getGreetings = async (): Promise<{ greetings?: GetGreetings['data'], error?: {message: string, status: 'error'} }> => {
	const cookie = (await cookies()).getAll();
	try {
		const response = await fetch(`${urlServer}/api/greetings/random`, {
			credentials: 'include',
			method: 'GET',
			headers: {
				Origin: API_URL,
				Accept: 'application/json',
				Cookie: cookie.reduce((acc, item) => (acc += `${item.name}=${item.value};`), ''),
			},
		});
		const {data}: GetGreetings = await response.json();

		return {
			greetings: data
		}
	} catch (err) {
		if (MODE === 'development') {
				return {
					greetings: {
						message: "тест2_сообщение",
						language: "тест2_язык"
					}
				}
		}

		return {
			error: {
				message: 'не удалось выполнить запрос [getGreetings]: ' + (err as Error).message,
				status: 'error'
			}
		}
	}
}