import {API_URL} from "@/shared/constants";

export const fetcher = async (url: string) => {
	return fetch(`${API_URL}/${url}`, {
		headers: {
			Origin: API_URL,
			Accept: 'application/json',
		},
		credentials: 'include'
	}).then(res => res.json())
}