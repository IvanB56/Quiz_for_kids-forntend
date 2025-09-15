import React from 'react';
import {ProfileHeading} from "@widgets";
import Child from "./components/child";
import {ChildProvider} from "./helpers/provider";
import {ChildEmpty} from './components/ChildEmpty/ChildEmpty';

const Page = () => {
	return (
		<ChildProvider>
			<ProfileHeading title={"Мои дети"}/>
			<ChildEmpty/>
			<Child/>
		</ChildProvider>
	);
};

export default Page;