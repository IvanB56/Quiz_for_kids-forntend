import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/profile'];

export default function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname;
	const isProtected = protectedRoutes.find((route) => path.toLowerCase().includes(route.toLowerCase()));
	// const { API_URL } = process.env;
	const user = fetch(`http://localhost/api/user`, {
		credentials: 'include',
	});

	if (!user && isProtected) {
		console.log('protected');
		const absoluteURL = new URL('/login', request.nextUrl.origin);
		return NextResponse.redirect(absoluteURL.toString());
	}
}
