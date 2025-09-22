import {Student} from "@/entities/student";
import {cookies} from "next/headers";
import {API_URL} from "@/shared/constants";
import {ProfileType} from "@/shared/constants/ProfilesType";

const {API_URL: urlServer, MODE} = process.env;

export async function getStudents(): Promise<{
	students?: { data: Student[] };
	error?: { message: string, status: string }
}> {
	const cookie = (await cookies()).getAll();

	try {
		const response: Response = await fetch(`${urlServer}/api/students`, {
			credentials: 'include',
			headers: {
				Origin: API_URL,
				Accept: 'application/json',
				Cookie: cookie.reduce((acc, item) => (acc += `${item.name}=${item.value};`), ''),
			},
		});

		const students: { data: Student[] } = await response.json();
		return {
			students
		}
	} catch (err) {
		if (MODE === 'development') {
			return {
				students: {
					data: [
						{
							user_id: 1,
							email: "email-student@email.email",
							phone: "+79009009091",
							name: "No-name Child",
							surname: "",
							patronymic: "",
							birthdate: "",
							type: ProfileType.STUDENT
						},
						{
							user_id: 2,
							email: "email-student@email.email",
							phone: "+79009009091",
							name: "Елизавета",
							surname: "",
							patronymic: "",
							birthdate: "25,04,2024",
							type: ProfileType.STUDENT
						}
					]
				}
			}
		}

		return {
			error: {
				message: 'не удалось выполнить запрос [user]: ' + (err as Error).message,
				status: 'error'
			}
		}
	}
}