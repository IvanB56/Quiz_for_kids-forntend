import React from 'react';
import {Heading, Separator} from "@components";
import {Subscribes} from "@/features/Subscribes";

const Page = () => {
	return (
		<>
			<Heading data={{text: "Подписки", tag: 'h1'}}/>
			<Separator className="my-4"/>
			<Subscribes/>
		</>
	);
};

export default Page;