import {API_URL} from '@/shared/constants';
import {getCookie} from 'cookies-next';

class ApiController {
	constructor(private readonly API: string) {}

	async get<T = object>(url: string, options: RequestInit): Promise<T> {
		try {
			const resp = await fetch(url, {
				...options,
				method: 'GET',
				headers: {
					...(options?.headers || {}),
				},
			} as typeof options);

			if (resp.statusText === 'No Content') return 'No Content' as T;

			return await resp.json();
		} catch (err: unknown) {
			throw Error('Ошибка GET запроса [ApiController get]' + err);
		}
	}

	async post<T = object>(url: string, options: RequestInit): Promise<T> {
		try {
			const resp = await fetch(url, {
				...options,
				method: 'POST',
				headers: {
					...(options?.headers || {}),
				},
				body: options.body || JSON.stringify({}),
			} as typeof options);
			return (await resp.json()) as T;

		} catch (err: unknown) {
			throw Error('Ошибка POST запроса [ApiController post]' + err);
		}
	}

	async setCSRF() {
		await this.get<string>(`${API_URL}/sanctum/csrf-cookie`, {
			credentials: 'include',
		});
	}

	async getCSRF() {
		const csrfToken = decodeURIComponent(getCookie('XSRF-TOKEN') as string);

		if (!csrfToken) {
			return Promise.reject('Ошибка при извлечении CSRF токена');
		}

		return Promise.resolve(csrfToken);
	}
}

export const api = new ApiController(API_URL);
