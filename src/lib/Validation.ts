import {ZodError} from "zod";
import {STATUS_CODE} from "@/shared/constants/statusCode";


export function validation<T>(schema: unknown, data: { [k: string]: unknown }): {
	status: STATUS_CODE;
	errors?: T
} {
	try {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		schema.parse(data)

		return {
			status: STATUS_CODE.SUCCESS
		}
	} catch (error: unknown) {
		if (error instanceof ZodError) {
			const formattedErrors = error.errors.reduce<T>((acc, err) => {
				const key = `${err.path.join('.')}`;
				return {
					...acc,
					[key]: err.message
				};
			}, {} as T);

			return {
				status: STATUS_CODE.ERROR,
				errors: formattedErrors
			};
		}

		throw error;
	}
}