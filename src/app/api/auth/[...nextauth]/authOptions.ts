import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@lib/prisma/prisma';
import { Role } from '@prisma/client';
import process from 'node:process';

export const authOptions: AuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			async authorize(credentials) {
				if (!credentials || !credentials.email) return null;

				const values = {
					email: credentials.email,
				};

				const user = await prisma.user.findUnique({
					where: values,
				});

				if (!user) return null;

				// const isPasswordValid = await compare(credentials.password, user.password);
				const isPasswordValid = credentials.password === user.password;

				if (!isPasswordValid) return null;

				return {
					id: String(user.id),
					email: user.email,
					phone: user.phone,
					username: user.username,
					role: 'USER' as Role,
				};
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: 'jwt',
	},
	callbacks: {
		async jwt({ token }) {
			if (!token.email) return token;
			const user = await prisma.user.findUnique({
				where: { email: token.email },
			});

			if (user) {
				token.id = user.id as unknown as string;
				token.email = user.email;
				token.role = user.role;
				token.phone = user.phone;
				token.username = user.username;
				token.secondName = user.second_name;
			}

			return token;
		},
		async session({ session, token }) {
			if (session?.user) {
				session.user.id = token.id;
				session.user.role = token.role;
				session.user.name = token.username as string;
			}

			return session;
		},
	},
};
