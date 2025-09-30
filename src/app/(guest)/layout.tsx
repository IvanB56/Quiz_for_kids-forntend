import React from 'react';
import {Header} from "@widgets";

export default async function GuestLayout({children}: { children: React.ReactNode }) {
	return (
		<>
			<Header/>
			<main className={"index-page"}>{children}</main>
		</>
	);
}
