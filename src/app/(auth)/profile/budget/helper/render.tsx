import React, {memo} from 'react';
import {Button, Helper, LinkUI, SectionWhite, Text} from "@components";
import {TPlaySettingsData} from "@shared";

export const RenderEmptyStudents = memo(() => {
	return (
		<SectionWhite overflow="overflow-hidden">
			<Helper cn={{width: 'full'}} className="flex flex-column !gap-y-8">
				<Text data={{
					text: 'Вы еще не добавили детей. Перейдите на страницу "Мои Дети", чтобы добавить ребенка',
					tag: 'p'
				}} cn={{color: 'text-black'}}/>
				<Button asChild className="mx-auto">
					<LinkUI data={{text: 'Добавить ребенка', href: '/profile/child'}}/>
				</Button>
			</Helper>
		</SectionWhite>
	);
});

export const RenderCanNotPlay = memo(() => {
	return (
		<>
			<SectionWhite overflow="overflow-hidden">
				<Helper cn={{width: 'full'}} className="flex flex-column !gap-y-8">
					<Text data={{
						text: 'В данный момент настройка МонетикУМ не доступна',
						tag: 'p'
					}} cn={{color: 'text-black'}}/>
				</Helper>
			</SectionWhite>
		</>
	)
});

export const RenderFullData = memo((settings : {settings: TPlaySettingsData}) => {
	return (
		<>
			{
				JSON.stringify(settings)
			}
		</>
	)
});

RenderEmptyStudents.displayName = 'RenderEmptyStudents';
RenderCanNotPlay.displayName = 'RenderCanNotPlay';
RenderFullData.displayName = 'RenderFullData';