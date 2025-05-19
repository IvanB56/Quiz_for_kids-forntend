'use client';
import React, {Dispatch, SetStateAction, useLayoutEffect, useState} from 'react';
import {classes} from './ThemeCards.cn';
import {CardWhite} from "@/components/CardWhite/CardWhite";
import {Button, Heading, Text} from "@components";
import './ThemeCards.scss';

type ThemesCardProps = {
	themes: {
		slug: string,
		name: string,
		description: string
	}[];
	mode: 'auto' | 'hand' | null;
};

export const ThemeCards = ({themes, mode}: ThemesCardProps) => {
	const styles = classes();
	// Выбранные темы, для отправки на бэк
	const [changedThemes, setChangedThemes] = useState<ThemesCardProps['themes']>([]);
	console.log(changedThemes)

	useLayoutEffect(() => {
		setChangedThemes(() => {
			return mode === 'auto' ? [...themes]: [];
		});
	}, [mode, themes]);

	const clickHandler = (theme: ThemesCardProps['themes'][0], isActive: boolean, setActive: Dispatch<SetStateAction<boolean>>) => {
		setActive(prev => !prev);
		setChangedThemes(prev => {
			if (isActive) {
				return [...prev].filter(item => item.slug !== theme.slug);
			}

			return [...prev, theme];
		});
	};

	return (
		<div className={styles.block}>
			{
				themes && themes.map((theme) =>
					<CardWhite key={theme.slug} cardsRenderAction={(isActive, setIsActive) =>
						<>
							{/*<Image src={theme.picture.url} alt={theme.picture.alt} width={340} height={230}*/}
							{/*       className={styles.elementCardImage}/>*/}
							<Heading data={{text: theme.name, tag: 'h4'}} cn={{align: 'text-center', margin: 'mb-6'}}
							         className={'capitalize'}/>
							<Text data={{text: theme.description, tag: 'p'}} cn={{margin: 'mb-6'}} className={'text-center'}/>
							<Button
								className={styles.elementCardButton}
								variant={isActive? 'light': undefined}
								disabled={mode === 'auto'}
								onClick={() => clickHandler(theme, isActive, setIsActive)}
							>
								{isActive || mode === 'auto' ? 'Выбрано' : 'Выбрать'}
							</Button>
						</>
					}
					/>
				)
			}
		</div>
	);
};