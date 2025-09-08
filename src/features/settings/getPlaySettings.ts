'use server';
import {API_URL} from "@/shared/constants";
import {cookies} from 'next/headers';
import {TPlaySettings} from "@shared";

const {API_URL: urlServer, MODE} = process.env;

export async function getPlaySettings(userId?: number): Promise<{ settings?: TPlaySettings, error?: { message: string; status: 'error' }}> {
	if (!userId) {
		return {
			error: {
				message: 'не указан userID',
				status: 'error'
			}
		}
	}
	const cookie = (await cookies()).getAll();

	try {
		const response: Response = await fetch(`${urlServer}/api/play-settings/user/${userId}/active`, {
			credentials: 'include',
			method: 'GET',
			headers: {
				Origin: API_URL,
				Accept: 'application/json',
				Cookie: cookie.reduce((acc, item) => (acc += `${item.name}=${item.value};`), ''),
			},
		});

		const settings: TPlaySettings = await response.json();
		return {
			settings
		}
	} catch (err) {
		if (MODE === 'development') {
			return {
				settings: {
					data: {
						starts_at: "2025-08-01T00:00:00.000000Z",
						ends_at: "2025-08-31T23:59:59.000000Z",
						active: false,
						mode: "combined",
						budget: 100,
						questions_quantity: 300,
						categories: [
							{
								slug: "mathematics",
								name: "Математика",
								description: "Математика описание"
							},
							{
								slug: "science",
								name: "Наука",
								description: "Наука описание"
							},
							{
								slug: "physics",
								name: "Физика",
								description: "Физика описание"
							}
						]
					}
				}
			}
		}

		return {
			error: {
				message: 'не удалось выполнить запрос [getPlaySettings]: ' + (err as Error).message,
				status: 'error'
			}
		}
	}
}