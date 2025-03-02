'use server';

import { TypeLogin, TypeRegistration } from "@/features/auth/schemas";

export async function register( body: TypeRegistration) {
	console.log(body)
}

export async function login(body: TypeLogin) {
	console.log(body)
	throw Error('Не удалось залогиниться')
}
