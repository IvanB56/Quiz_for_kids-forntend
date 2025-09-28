import React from 'react';
import {Button, Heading, LinkUI, Separator} from "@components";
import {ChevronLeft} from "lucide-react";

const Page = async ({params}: {params: Promise<{id: string}>}) => {
	const {id} = await params;

	return (
		<>
			<div className="flex gap-x-2 items-center">
				<Button asChild variant="red" className="!p-2 !bg-grey-medium">
					<LinkUI data={{href: '/profile/child'}}>
						<ChevronLeft size={40} className="text-black" />
					</LinkUI>
				</Button>
				<Heading data={{text: 'Мои дети', tag: 'h1'}}/>
			</div>
			<Separator className="my-4"/>
			Ребенок с id={id}
		</>
	);
};

export default Page;