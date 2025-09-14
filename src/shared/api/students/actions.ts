import {api} from "@/shared/api/api-controller";
import {API_URL, MODE} from '@/shared/constants';

export async function createStudents<T>(data: { birthdate: string; name: string } ) {
	let token = {};

	if (MODE !== 'development') {
		await api.setCSRF();
		token = {'X-XSRF-TOKEN': await api.getCSRF()}
	}

	return await api.post<T>(`${API_URL}/api/students/create`, {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			...token
		},
		credentials: 'include',
		body: JSON.stringify(data),
	});
}