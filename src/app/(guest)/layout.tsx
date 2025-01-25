import React from "react";
import {HeaderGuest} from "@widgets";

export default function GuestLayout({children}: { children: React.ReactNode }) {
	return (
		<>
			<HeaderGuest cn={{border: 'border-b-[1px]', padding: 'py-[20px]'}}/>
			{children}
		</>
	);
}
