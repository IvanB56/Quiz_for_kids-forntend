'use client'
import React, {memo} from 'react';
import {Button, Heading, Helper, LinkUI, SectionWhite, Text} from "@components";
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

export const RenderFullData = memo(({settings}: { settings: TPlaySettingsData }) => {
	return (
		<>
			<div className={"flex gap-10"}>
				<SectionWhite className="flex-1">
					<Heading data={{text: 'Категории на месяц', tag: 'h3'}} cn={{size: 'h3'}}/>
					<Heading data={{tag: 'h4'}} cn={{size: 'h4'}}
					         className="flex justify-between items-center px-4 py-3 bg-orange rounded-14 mt-8">
						{settings.budget} <span>рублей</span>
					</Heading>
					<Helper cn={{width: 'full'}} className="mt-8">
						<Text data={{text: 'Сумма на 1 месяц ', tag: 'p'}} cn={{color: 'text-black'}}/>
					</Helper>
				</SectionWhite>
				<SectionWhite className="flex-1">
					<Heading data={{text: 'Категории на месяц', tag: 'h3'}} cn={{size: 'h3'}}/>
					<div className="flex flex-wrap gap-4 mt-8">
						{
							settings.categories?.map(category => {
								return (
									<div className="flex items-center bg-cyan-light py-2.5 px-4  rounded-100" key={category.slug}>
										<Text data={{text: category.name, tag: 'p'}}/>
									</div>
								)
							})
						}
					</div>
				</SectionWhite>
			</div>
			<div>
				<SectionWhite className="flex-1">
					<Heading data={{text: 'Количество вопросов', tag: 'h3'}} cn={{size: 'h3'}}/>
					<Heading
						data={{tag: 'h4'}}
						cn={{size: 'h4'}}
						className="flex justify-center items-center px-4 py-3 bg-orange rounded-14 mt-8"
					>
						{settings.questions_quantity}
					</Heading>
					<Helper cn={{width: 'full'}} className="mt-8">
						<Text data={{text: 'Количество выбранных вопросов, тестов, викторин ', tag: 'p'}} cn={{color: 'text-black'}}/>
					</Helper>
				</SectionWhite>
			</div>
		</>
	)
});

RenderEmptyStudents.displayName = 'RenderEmptyStudents';
RenderCanNotPlay.displayName = 'RenderCanNotPlay';
RenderFullData.displayName = 'RenderFullData';