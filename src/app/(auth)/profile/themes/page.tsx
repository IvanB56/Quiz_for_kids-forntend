'use client';
import React, {useCallback, useState} from "react";
import {ProfileHeading, ThemeCards} from "@widgets";
import {Button, SectionWhite, Text} from "@components";

import themes from "./store/Thems";

const Themes = () => {
	const [themesChanged, setThemesChanged] = useState<typeof themes>([] satisfies typeof themes);
	const [showThemes, setShowThemes] = useState<boolean>(false);
	const [selectionMode, setSelectionMode] = useState<'auto' | 'hand' | null>(null);

	const changeAutoThemes = () => {
		const set = new Set();

		while (set.size < 6) {
			const rand = Math.round(Math.random() * 8 + 1);
			set.add(rand);
		}

		const th = [...themes].reduce<typeof themes>((acc, item) => {
			if (set.has(item.id)) {
				acc.push({...item, picture: {...item.picture}, isActive: true});
			}

			return acc;
		}, []);

		setSelectionMode('auto');
		setThemesChanged(th);
	}

	const changeThemes = useCallback(() => {
		setSelectionMode('hand')
		setThemesChanged([...themes]);
	}, []);

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
			{showThemes && <ThemeCards themes={themesChanged} mode={selectionMode}/>}
		</>
	);
}

export default Themes;