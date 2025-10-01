'use server';
import {API_URL} from "@/shared/constants";
import {cookies} from 'next/headers';
import {User} from "@/entities/user";

const { API_URL: urlServer, MODE } = process.env;

export async function getUser(): Promise<{user?: User; error?: { message: string, status: string }}> {
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

		const user: { data: User } = await response.json();
		return {user: user.data}
	} catch(err) {
		if  (MODE === 'development') {
			// return {
			// 	user: {
			// 		user_id: 1,
			// 		email: "email@email.email",
			// 		phone: "+79009009090",
			// 		name: "name",
			// 		surname: "",
			// 		patronymic: "",
			// 		birthdate: "",
			// 		region: {
			// 			slug: "krasnodar_krai",
			// 			name: "Краснодарский край"
			// 		},
			// 		type: ProfileType.SPONSOR
			// 	}
			// }
		}
		
		return {
			error: {
				message: 'не удалось выполнить запрос [user]: ' + (err as Error).message,
				status: 'error'
			}
		}
	}
}