import { TypeLogin, TypeRegistration } from "@/features/auth/schemas";
import { API_URL } from "@/shared/constants";

export async function register( body: TypeRegistration ) {
	console.log(body)
}

export async function login( body: TypeLogin ) {
	try {
		const resp = await fetch(`${ API_URL }/login`, {
			method: 'POST',
			body: JSON.stringify(body)
		});

		if ( !resp.ok ) {
			return Promise.reject('Ошибка сервера. Не возможно выполнить запрос [блок try]');
		}

		const data = await resp.json();
		return Promise.resolve(data);

	} catch ( err ) {
		return Promise.reject('Ошибка сервера. Не возможно выполнить запрос [блок catch]' + err);
	}
}
