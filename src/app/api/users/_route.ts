import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@lib/prisma/prisma';

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {

	const slug = (await params).slug;
	console.log(slug);
	return NextResponse.json({});
	// const users = await prisma.user.findMany({
	// 	include: {
	// 		child: true,
	// 	},
	// });
	// return NextResponse.json({
	// 	users,
	// });
}

export async function POST(req: NextRequest) {
	const data = await req.json();
	const { passwordRepeat, ...rest } = data;
	const user = await prisma.user.create({ data: { ...rest, second_name: '' } });
	return NextResponse.json(user);
}
