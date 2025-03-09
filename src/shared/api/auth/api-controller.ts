import { API_URL } from "@/shared/constants";

class ApiController {
	constructor(private readonly API: string) {}

	async get<T>(url: string, options: RequestInit): Promise<T> {
		return await fetch(url, {
			...options,
			method: 'GET',
			headers: {
				...(options?.headers || {})
			}
		} as typeof options) as T;
	}

	async post<T>(url: string, options: RequestInit): Promise<T> {
		return await fetch(url, {
			...options,
			method: 'POST',
			headers: {
				...(options?.headers || {})
			},
			body: options.body || JSON.stringify({})
		} as typeof options) as T;
	}
}


export default new ApiController(API_URL);
