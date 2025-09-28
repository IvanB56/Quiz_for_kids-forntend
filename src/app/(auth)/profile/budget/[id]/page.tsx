import React from 'react';
import {HeadingWithStudent} from '@widgets';
import {Separator} from "@components";
import {RenderCanNotPlay, RenderFullData} from "../helper/render";
import {PlaySettingsForm} from '@/features/PlaySettings';
import {getPlaySettings, isCanPlay} from '@features';

const Page = async ({params}: {params: Promise<{id: string}>}) => {
	const {id} = await params;
	const {can} = await isCanPlay(Number(id));
	const {data: settings} = await getPlaySettings(Number(id));

	return (
		<>
			<HeadingWithStudent title="Настройки МонетикУМ"/>
			<Separator className="my-4"/>
			{
				can !== true
					? <RenderCanNotPlay/>
					: settings
						? <RenderFullData settings={settings}/>
						: <PlaySettingsForm/>
			}
		</>
	);
};

export default Page;