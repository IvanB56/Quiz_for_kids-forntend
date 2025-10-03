export async function GET() {}
// export async function GET(_: Request,  { params }: { params: Promise<{ slug: string }> }) {
// 	const { slug } = await params;
//
// 	try {
// 		const data = fs.readFileSync(path.resolve('./src/assets/mock/api', slug[slug.length - 1] + '.json'));
//
// 		return new Response(data.toString(), {
// 			status: 200,
// 		})
// 	} catch (_: unknown) {
// 		return new Response('error ' + slug[slug.length - 1], {
// 			status: 401
// 		})
// 	}
// }

export async function POST() {}
// export async function POST(_: Request,  { params }: { params: Promise<{ slug: string }> }) {
// 	const { slug } = await params;
//
// 	try {
// 		const data = fs.readFileSync(path.resolve('./src/assets/mock/api', slug[slug.length - 1] + '.json'));
//
// 		return new Response(data.toString(), {
// 			status: 200,
// 		})
// 	} catch (_) {
// 		return new Response('not authenticate', {
// 			status: 401
// 		})
// 	}
// }