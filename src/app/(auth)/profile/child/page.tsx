import React from 'react';
import Child from "./components/child";
import {ChildEmpty} from './components/ChildEmpty/ChildEmpty';
import {Heading, Separator} from "@components";
import {getStudents} from '@/features/auth/getStudents';

const Page = async () => {
	const {students} = await getStudents();

	return (
		<>
			<Heading data={{text: "Мои дети", tag: 'h1'}}/>
			<Separator className="my-4"/>
			{
				!students?.data?.length
					? <ChildEmpty/>
					: <Child students={students?.data}/>
			}
		</>
	);
};

export default Page;