import {api} from "@/shared/api/api-controller";
import {API_URL} from "@/shared/constants";

type RequestType = {
	budget:  number;
}

export async function autoConfigure(body: RequestType, userId: string) {
	await api.setCSRF();

	return await api.post(`${API_URL}/api/play-settings/user/${userId}/auto-configure`, {
		headers: {
			Origin: API_URL,
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'X-XSRF-TOKEN': await api.getCSRF(),
		},
		credentials: 'include',
		body: JSON.stringify(body),
	});
}

export async function previousConfigure(body: RequestType, userId: string) {
	await api.setCSRF();

	return await api.post(`${API_URL}/api/play-settings/user/${userId}/configure-from-previous`, {
		headers: {
			Origin: API_URL,
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'X-XSRF-TOKEN': await api.getCSRF(),
		},
		credentials: 'include',
		body: JSON.stringify(body),
	});
}