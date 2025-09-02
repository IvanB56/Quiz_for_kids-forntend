import React from 'react';
import {ProfileHeading} from "@widgets";
import {SectionWhite, SwitchWithHelper} from "@components";
import {getDifficultyLevels} from "@/shared/api";

const AdjustDifficulty = async () => {
	const data = await getDifficultyLevels();

	return (
		<>
			<ProfileHeading title={"Уровень сложности"}/>
			<SectionWhite overflow='overflow-visible'>
				<div className="flex justify-between items-center">
					<SwitchWithHelper
						title='Лёгкий уровень'
						helpers={['Легкий уровень', 'Это викторины с несколькими вариантами ответов']}
						state={data?.levels?.[0]?.slug === "easy" ? "on": "off"}
						slug='easy'
					/>
				</div>
			</SectionWhite>
			<SectionWhite overflow='overflow-visible'>
				<div className="flex justify-between items-center">
					<SwitchWithHelper
						title="Сложный уровень"
						helpers={['Сложный уровень', 'Это тесты, где в пустое поле нужно вписать свой ответ.']}
						state={data?.levels?.[1]?.slug === "hard" ? "on": "off"}
						slug='hard'
					/>
				</div>
			</SectionWhite>
		</>
	);
};

export default AdjustDifficulty;