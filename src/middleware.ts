import {getUser} from '@features';
import {NextRequest, NextResponse} from 'next/server'

// import {ProfileType} from "@/shared/constants/ProfilesType";


export async function middleware(request: NextRequest) {
	const {user} = await getUser();

	if (user) {
		// if (user.type === ProfileType.SPONSOR && !request.nextUrl.pathname.startsWith('/profile')) {
		// 	return NextResponse.redirect(new URL('/profile/rules', request.url))
		// }
		//
		// if (user.type === ProfileType.STUDENT && !request.nextUrl.pathname.startsWith('/child')) {
		// 	return NextResponse.redirect(new URL('/child/greetings', request.url))
		// }
	} else {
		// const protectedPaths = ['/child', '/profile', '/settings']
		// const isProtectedPath = protectedPaths.some(path =>
		// 	request.nextUrl.pathname.startsWith(path)
		// )
		//
		// if (isProtectedPath && !user) {
		// 	return NextResponse.redirect(new URL('/?login=true', request.url))
		// }
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		'/((?!api|.well-known|images|_next/static|_next/image|.*\\.png$).*)',
	],
}
