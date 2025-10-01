import {cookies} from "next/headers";
import {API_URL} from "@/shared/constants";
import {TARIFFS} from "@/shared/constants/tariffs";

const {API_URL: urlServer, MODE} = process.env;

interface Tariff {
	data?: {
		active: boolean,
		type: {
			slug: TARIFFS,
			name: string,
			price: string,
			limits: {
				max_students: number,
				max_relatives: number,
				max_categories: number,
			}
		}
	},
	error?: string
}

export async function getTariffs(): Promise<{ tariff?: Tariff['data'], error?: Tariff['error'] } > {
	const cookie = (await cookies()).getAll();

	try {
		const response: Response = await fetch(`${urlServer}/api/subscriptions/active`, {
			credentials: 'include',
			headers: {
				Origin: API_URL,
				Accept: 'application/json',
				Cookie: cookie.reduce((acc, item) => (acc += `${item.name}=${item.value};`), ''),
			},
		});

		const {data: tariff}: Tariff = await response.json();

		return {tariff}
	} catch (err) {
		if (MODE === 'development') {
			// return {
			// 	data: {
			// 		"active": true,
			// 		"type": {
			// 			"slug": TARRIFS.BASE,
			// 			"name": "Базовая подписка",
			// 			"price": "3000.00",
			// 			"limits": {
			// 				"max_students": 2,
			// 				"max_relatives": 2,
			// 				"max_categories": 3
			// 			}
			// 		}
			// 	}
			// }
		}

		return {
			error: (err as Error).message
		}
	}
}