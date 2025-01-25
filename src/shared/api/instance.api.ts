import { Fetch } from '@utils';

export const api = new Fetch({
	baseUrl: 'http://localhost:8000/api' as string,
	options: {
		// credentials: 'include',
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	},
});
