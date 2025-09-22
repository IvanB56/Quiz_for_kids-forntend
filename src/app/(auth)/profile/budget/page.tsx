import React from 'react';
import {HeadingWithStudent} from "@widgets";
import {Separator} from '@components';
import {getStudents} from '@/features/auth/getStudents';
import {getPlaySettings, isCanPlay} from '@features';
import {PlaySettingsForm} from "@/features/PlaySettings";
import {RenderCanNotPlay, RenderEmptyStudents, RenderFullData} from "./helper/render";

const Budget = async () => {
	const {students} = await getStudents();
	const {can} = await isCanPlay(students?.data?.[0]?.user_id);
	const {data: settings} = await getPlaySettings(students?.data?.[0]?.user_id);

	return (
		<>
			<HeadingWithStudent title="Настройки МонетикУМ"/>
			<Separator className="my-4"/>
			{
				!students?.data?.length
					? <RenderEmptyStudents/>
					: can !== true
						? <RenderCanNotPlay/>
						: settings
							? <RenderFullData settings={settings}/>
							: <PlaySettingsForm />
			}
		</>
	);
};

export default Budget;