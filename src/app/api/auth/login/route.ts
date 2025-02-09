import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@lib/prisma/prisma';

export async function POST(req: NextRequest, res: NextResponse) {
	const { email, password } = await req.json();

	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	});

	if (password !== user?.password) {
		return new NextResponse('Не верный пароль', {
			status: 404,
		});
	}

	return NextResponse.json(user);
}
