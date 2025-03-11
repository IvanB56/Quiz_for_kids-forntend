import { NextRequest, NextResponse } from 'next/server';

const { API_URL } = process.env;
const protectedRoutes = ['/profile'];

export default async function _middleware(request: NextRequest) {
	const path = request.nextUrl.pathname;
	const isProtected = protectedRoutes.some((route) => path.toLowerCase().includes(route.toLowerCase()));

	try {
		console.log(`${API_URL}/api/user`);
		const resp = await fetch(`${API_URL}/api/user`);

		if (!resp.ok) {
			throw new Error('Failed to fetch user data [!resp.ok]');
		}

		const user = await resp.json();
		console.log(user);

		if (!user && isProtected) {
			const absoluteURL = new URL('/login', request.nextUrl.origin);
			return NextResponse.redirect(absoluteURL.toString());
		}
	} catch (error) {
		console.error('Error fetching user data [catch]:', error);

		if (isProtected) {
			const absoluteURL = new URL('/login', request.nextUrl.origin);
			return NextResponse.redirect(absoluteURL.toString());
		}
	}
}
