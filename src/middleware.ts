import {NextResponse} from 'next/server'


// export async function middleware(request: NextRequest) {
export async function middleware() {
	// const {status} = await checkAuth();

	// if (status === 200) {
	// 	const {user} = await getUser();
	//
	// 	if (request.nextUrl.pathname === '/') {
	// 		if (user?.data.type === 'Sponsor') {
	// 			return NextResponse.redirect(new URL('/profile/rules', request.url))
	// 		}
	//
	// 		if (user?.data.type === 'Student') {
	// 			return NextResponse.redirect(new URL('/child/rules', request.url))
	// 		}
	// 	}
	// } else {
	// 	const protectedPaths = ['/child', '/profile', '/settings']
	// 	const isProtectedPath = protectedPaths.some(path =>
	// 		request.nextUrl.pathname.startsWith(path)
	// 	)
	//
	// 	if (isProtectedPath && status !== 200) {
	// 		return NextResponse.redirect(new URL('/?login=true', request.url))
	// 	}
	// }

	return NextResponse.next();
}

export const config = {
	matcher: [
		'/((?!api|.well-known|images|_next/static|_next/image|.*\\.png$).*)',
	],
}