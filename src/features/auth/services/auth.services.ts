import type { TypeUser } from '../types';
import { api } from '@shared';
import type { TypeLoginSchema, TypeRegisterSchema } from '../schemas';

class AuthServices {
	async register(body: TypeRegisterSchema, recaptcha?: string) {
		const headers = recaptcha ? { recaptcha } : undefined;

		return await api.post<TypeUser>('auth/register', body, { headers });
	}

	async login(body: TypeLoginSchema, recaptcha?: string) {
		const headers = recaptcha ? { recaptcha } : undefined;

		return await api.post<TypeUser>('auth/login', body, { headers });
	}

	async logout() {
		return await api.post('auth/logout');
	}
}

export const authService = new AuthServices();
