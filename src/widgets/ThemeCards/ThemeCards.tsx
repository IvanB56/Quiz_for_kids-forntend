'use client';
import React, {Dispatch, SetStateAction, useLayoutEffect, useState} from 'react';
import {classes} from './ThemeCards.cn';
import {CardWhite} from "@/components/CardWhite/CardWhite";
import Image from "next/image";
import {Button, Heading, Text} from "@components";
import './ThemeCards.scss';

type ThemesCardProps = {
	themes: {
		id: number,
		name: string,
		description: string,
		isActive: boolean,
		picture: {
			url: string,
			alt: string
		}
	}[];
	mode: 'auto' | 'hand' | null;
};

export const ThemeCards = ({themes, mode}: ThemesCardProps) => {
	const styles = classes();
	const [changedThemes, setChangedThemes] = useState<ThemesCardProps['themes']>([]);

	useLayoutEffect(() => {
		setChangedThemes(() => {
			return mode === 'auto' ? [...themes]: []; 
		});
	}, [mode, themes]);

	console.log({changedThemes})

	const clickHandler = (theme: ThemesCardProps['themes'][0], isActive: boolean, setActive: Dispatch<SetStateAction<boolean>>) => {
		setActive(prev => !prev);
		setChangedThemes(prev => {
			if (isActive) {
				return [...prev].filter(item => item.id !== theme.id);
			}

			return [...prev, theme];
		});
	};

	return (
		<section className={styles.block}>
			{
				themes && themes.map((theme, index) =>
					<CardWhite key={theme.id + index} cardsRenderAction={(isActive, setIsActive) =>
						<>
							<Image src={theme.picture.url} alt={theme.picture.alt} width={340} height={230}
							       className={styles.elementCardImage}/>
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
		</section>
	);
};