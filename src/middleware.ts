import {NextRequest} from 'next/server'


export async function middleware(request: NextRequest) {

	// const {statusText, status, error} = await checkAuth();

	// console.log(statusText, status, error)
	// const session = request.cookies.get('session')?.value
	//
	// // Защищаемые пути
	// const protectedPaths = ['/dashboard', '/profile', '/admin']
	// const isProtectedPath = protectedPaths.some(path =>
	// 	request.nextUrl.pathname.startsWith(path)
	// )
	//
	// if (isProtectedPath && !session) {
	// 	// Перенаправляем на страницу входа
	// 	return NextResponse.redirect(new URL('/login', request.url))
	// }
	//
	// // Если пользователь авторизован и пытается зайти на login/register
	// const authPaths = ['/login', '/register']
	// const isAuthPath = authPaths.includes(request.nextUrl.pathname)
	//
	// if (isAuthPath && session) {
	// 	return NextResponse.redirect(new URL('/dashboard', request.url))
	// }
	//
	// return NextResponse.next();
}

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
}