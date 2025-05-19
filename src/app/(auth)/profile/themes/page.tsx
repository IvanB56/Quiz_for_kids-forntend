'use client';
import React, {useCallback, useEffect, useState} from "react";
import {ProfileHeading, ThemeCards} from "@widgets";
import {Button, SectionWhite, Text} from "@components";
import {useAppDispatch, useAppSelector} from "@lib/store/hooks";
import {fetchQuiz} from "@lib/store/features/quiz/QuizSlice";

const Themes = () => {
	const {data: themes} = useAppSelector(state => state.quiz);
	const dispatch = useAppDispatch();
	const [themesChanged, setThemesChanged] = useState<typeof themes>([] satisfies typeof themes);
	const [showThemes, setShowThemes] = useState<boolean>(false);
	const [selectionMode, setSelectionMode] = useState<'auto' | 'hand' | null>(null);

	const changeAutoThemes = () => {
		const set = new Set();

		while (set.size < Math.min(6, themes.length)) {
			const rand = Math.round(Math.random() * Math.min(8, themes.length - 1) + 1);
			set.add(rand);
		}

		const th = [...themes].reduce<typeof themes>((acc, item, index) => {
			if (set.has(index)) {
				acc.push({...item, isActive: true});
			}

			return acc;
		}, []);

		setSelectionMode('auto');
		setThemesChanged(th);
	}

	const changeThemes = useCallback(() => {
		setSelectionMode('hand')
		setThemesChanged([...themes]);
	}, [themes]);

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

	useEffect(() => {
		dispatch(fetchQuiz());
	}, [dispatch]);

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
			{showThemes && <ThemeCards key={String(selectionMode)} themes={themesChanged} mode={selectionMode}/>}
		</>
	);
}

export default Themes;