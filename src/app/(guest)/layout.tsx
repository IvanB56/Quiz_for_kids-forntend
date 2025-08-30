import React from 'react';
import {HeaderGuest} from "@widgets";

export default async function GuestLayout({children}: { children: React.ReactNode }) {
	return (
		<>
			<HeaderGuest data={{page: 'guest'}} />
			<main className={"index-page"}>{children}</main>
		</>
	);
}
