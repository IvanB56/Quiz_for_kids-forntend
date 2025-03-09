import { TypeLogin, TypeRegistration } from '@/features/auth/schemas';
import { API_URL } from '@/shared/constants';
import { api } from '@/shared/api/auth/api-controller';

export async function testGetUserFunction() {
	const user = api.get(`${API_URL}/api/user`, {
		credentials: 'include',
	});
}

export async function register(body: TypeRegistration) {
	await api.setCSRF();

	return await api.post(`${API_URL}/auth/register`, {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'X-XSRF-TOKEN': await api.getCSRF(),
		},
		credentials: 'include',
		body: JSON.stringify(body),
	});
}

export async function login(body: TypeLogin) {
	await api.setCSRF();

	return await api.post(`${API_URL}/auth/login`, {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'X-XSRF-TOKEN': await api.getCSRF(),
		},
		credentials: 'include',
		body: JSON.stringify(body),
	});
}
