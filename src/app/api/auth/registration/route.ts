import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@lib/prisma/prisma';

export async function POST(req: NextRequest) {
	const data = await req.json();
	const { passwordRepeat, ...rest } = data;
	const user = await prisma.user.create({ data: { ...rest, second_name: '' } });
	return NextResponse.json(user);
}
