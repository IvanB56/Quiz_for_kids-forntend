'use client';
import React from 'react';
import {ProfileHeading} from "@widgets";
import {Helper, SectionWhite, Switch, Text} from "@components";

const AdjustDifficulty = () => {
	return (
		<>
			<ProfileHeading title={"Уровень сложности"}/>
			<SectionWhite overflow='overflow-visible'>
				<div className="flex justify-between items-center">
					<Text data={{text: 'Легкий уровень', tag: 'span'}} cn={{size: 'text-body-2'}} />
					<Switch />
					<Helper>
						<Text data={{text: 'Легкий уровень', tag: 'p'}} />
						<Text data={{text: 'Это викторины с несколькими вариантами ответов', tag: 'p'}} />
					</Helper>
				</div>
			</SectionWhite>
			<SectionWhite overflow='overflow-visible'>
				<div className="flex justify-between items-center">
					<Text data={{text: 'Сложный уровень', tag: 'span'}} cn={{size: 'text-body-2'}} />
					<Switch/>
					<Helper>
						<Text data={{text: 'Сложный уровень', tag: 'p'}} />
						<Text data={{text: 'Это тесты, где в пустое поле нужно вписать свой ответ.', tag: 'p'}} />
					</Helper>
				</div>
			</SectionWhite>
		</>
	);
};

export default AdjustDifficulty;