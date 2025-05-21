import {api} from "@/shared/api/api-controller";
import {API_URL} from "@/shared/constants";

type RequestType = {
	levels:  'easy' |'hard';
}

export async function setDifficultyLevels(body: RequestType) {
	await api.setCSRF();

	return await api.post(`${API_URL}/api/subscription/difficulty-levels`, {
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

export async function getDifficultyLevels() {
	return await api.get<{levels: 'easy' | 'hard'}>(`${process.env.API_URL}/api/quiz-difficulty-levels`, {
		headers: {
			'Accept': 'application/json',
		},
	});
}