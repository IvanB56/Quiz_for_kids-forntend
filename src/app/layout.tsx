import type {Metadata, Viewport} from 'next';
import React from 'react';
import {Montserrat} from 'next/font/google';
import '@assets/styles/styles.scss';
import StoreProvider from "@/app/StoreProvider";

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
	weight: ['400'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-montserrat',
});

export default async function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {

	return (
		<html lang="ru">
			<body className={`${montserrat.variable} font-sans`}>
				<StoreProvider>
					{children}
				</StoreProvider>
			</body>
		</html>
	);
}
