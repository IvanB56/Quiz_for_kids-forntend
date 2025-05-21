import type {NextConfig} from "next";

const nextConfig: NextConfig = {
	experimental: {
		esmExternals: 'loose',
	},
	transpilePackages: ['@reduxjs/toolkit'],
};

export default nextConfig;
