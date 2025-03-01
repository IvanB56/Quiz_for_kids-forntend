import type { Metadata, Viewport } from 'next';
import React from 'react';
import '@assets/styles/styles.scss';
import { Providers } from '@components';
import { Montserrat } from 'next/font/google';

export const metadata: Metadata = {
	title: 'Монетикум | Главная',
	description: 'Монетикум - викторина для детей, для заработка реальных денег',
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

const montserrat = Montserrat({
	weight: [ '400' ],
	style: [ 'normal' ],
	subsets: [ 'latin' ],
	display: 'swap',
	variable: '--font-montserrat',
});

export default async function RootLayout( { children }: Readonly<{ children: React.ReactNode }> ) {
	// const session = await getServerSession();

	return (
		<html lang="ru">
		<body className={ `${ montserrat.variable } font-sans` }>
		<Providers>
			{ children }
		</Providers>
		</body>
		</html>
	);
}
