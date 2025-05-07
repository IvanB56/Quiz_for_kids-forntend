'use client';
import React, {useState} from "react";
import {ProfileHeading, ThemeCards} from "@widgets";
import {Button, SectionWhite, Text} from "@components";

import themes from "@/app/(auth)/profile/themes/store/Thems";

const Themes = () => {
	const [themesChanged, setThemesChanged] = useState({});
	const [showThemes, setShowThemes] = useState(false);

	const changeAutoThemes = () => {
		const set = new Set();

		while (set.size < 6) {
			const rand = Math.round(Math.random() * 9);
			set.add(rand);
		}

		const th = [...themes].filter(item => set.has(item.id));
		th.forEach(item => item.isActive = true);

		setThemesChanged(() => {
			return th;
		});


		console.log(th)
	}

	const changeThemes = () => {
		console.log('hand')
	}

	const themeChangedHandler = (type: 'auto' | 'hand') => {
		setShowThemes(true);
		switch (type) {
			case 'auto':
				changeAutoThemes();
				break;
			case "hand":
				changeThemes();
				break;
		}
	}

	return (
		<>
			<ProfileHeading title={"Выбор темы"}/>
			<SectionWhite overflow='overflow-visible'>
				<div className="flex justify-between items-center mb-4">
					<Text data={{text: 'Выбор тем на месяц', tag: 'p'}}/>
					<Button onClick={() => themeChangedHandler('hand')}>Выбрать </Button>
				</div>
				<div className="flex justify-between items-center">
					<Text data={{text: 'Автоматический выбор тем', tag: 'p'}}/>
					<Button onClick={() => themeChangedHandler('auto')}>Выбрать </Button>
				</div>
			</SectionWhite>
			{showThemes && <ThemeCards themes={themes}/>}
		</>
	);
}

export default Themes;