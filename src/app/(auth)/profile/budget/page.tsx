import {getStudents} from '@/features/auth/getStudents';
import {redirect} from "next/navigation";
import React from "react";
import {RenderEmptyStudents} from "./helper/render";
import {HeadingWithStudent} from "@widgets";
import {Separator} from "@components";


const Budget = async () => {
	const {students} = await getStudents();

	if (students?.data?.length) redirect(`budget/${students?.data?.[0].user_id}`);

	return (
		<>
			<HeadingWithStudent title="Настройки МонетикУМ"/>
			<Separator className="my-4"/>
			<RenderEmptyStudents />
		</>
	)
};

export default Budget;