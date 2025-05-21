import {TypeLogin, TypeRegistration} from '@/features/auth/schemas';
import {API_URL} from '@/shared/constants';
import {api} from '@/shared/api/api-controller';

export async function register(body: TypeRegistration, url: string = 'auth/register') {
	await api.setCSRF();

	return await api.post(`${API_URL}/${url}`, {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'X-XSRF-TOKEN': await api.getCSRF(),
		},
		credentials: 'include',
		body: JSON.stringify(body),
	});
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const error_types = ['email', 'login', 'name'] as const;

type LoginError = {
	errors: Partial<Record<typeof error_types[number], string>>;
	message: string;
}

type LoginSuccess = {
	two_factor: boolean;
}

export function isLoginError (response: LoginError | LoginSuccess): response is LoginError {
	return 'errors' in response && 'message' in response;
}

export async function login(body: TypeLogin): Promise<LoginError | LoginSuccess> {
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

export async function logout() {
	await api.setCSRF();

	return await api.post(`${API_URL}/auth/logout`, {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'X-XSRF-TOKEN': await api.getCSRF(),
		},
		credentials: 'include',
		body: JSON.stringify({}),
	});
}
