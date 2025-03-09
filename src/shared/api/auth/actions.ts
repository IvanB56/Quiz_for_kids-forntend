import { TypeLogin, TypeRegistration } from "@/features/auth/schemas";
import { API_URL } from "@/shared/constants";
import { getCookie } from 'cookies-next';
import Api from "@/shared/api/auth/api-controller";

export async function setCSRF() {
	// Запрашиваем csrf куку
	// const csrfResp = await fetch(`${API_URL}/sanctum/csrf-cookie`, {
	// 	method: 'GET',
	// 	credentials: 'include'
	// });

	const csrfResp = await Api.get<string>(`${API_URL}/sanctum/csrf-cookie`, {
		credentials: 'include'
	});

	console.log(csrfResp)

	// if (!csrfResp.ok) {
	// 	return Promise.reject('Ошибка при получении CSRF токена');
	// }
}

export async function getCSRF() {
	const csrfToken = decodeURIComponent(getCookie('XSRF-TOKEN') as string);

	if (!csrfToken) {
		return Promise.reject('Ошибка при извлечении CSRF токена');
	}

	return Promise.resolve(csrfToken);
}

export async function testGetUserFunction() {
	const user = await fetch(`${ API_URL }/api/user`, {
		method: 'GET',
		credentials: 'include',
	});

	console.log(user)
}

export async function register( body: TypeRegistration ) {
	console.log(body)
}

export async function login( body: TypeLogin ) {
	try {
		await setCSRF();

		const resp = await fetch(`${ API_URL }/auth/login`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'X-XSRF-TOKEN': await getCSRF(),
			},
			credentials: 'include',
			body: JSON.stringify(body),
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
