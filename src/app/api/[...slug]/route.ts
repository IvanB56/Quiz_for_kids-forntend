import * as fs from "node:fs";
import * as path from "node:path";

export async function GET(request: Request,  { params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;

	try {
		const data = fs.readFileSync(path.resolve('./src/assets/mock/api', slug[slug.length - 1] + '.json'));

		return new Response(data.toString(), {
			status: 200,
		})
	} catch (e) {
		return new Response('error ' + slug[slug.length - 1], {
			status: 401
		})
	}
}

export async function POST(request: Request,  { params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;

	try {
		const data = fs.readFileSync(path.resolve('./src/assets/mock/api', slug[slug.length - 1] + '.json'));

		return new Response(data.toString(), {
			status: 200,
		})
	} catch (e) {
		return new Response('not authenticate', {
			status: 401
		})
	}
}