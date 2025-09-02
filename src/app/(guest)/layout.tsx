import React, {Suspense} from 'react';
import {HeaderGuest} from "@widgets";

export default async function GuestLayout({children}: { children: React.ReactNode }) {
	return (
		<>
			<Suspense>
				<HeaderGuest data={{page: 'guest'}}/>
			</Suspense>
			<main className={"index-page"}>{children}</main>
		</>
	);
}
