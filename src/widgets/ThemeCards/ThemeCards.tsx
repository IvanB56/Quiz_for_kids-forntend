import React from 'react';
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

	return (
		<section className={styles.block}>
			{
				themes && themes.map((theme) =>
					<CardWhite key={theme.id} cardsRenderAction={(isActive, setIsActive) =>
						<>
							<Image src={theme.picture.url} alt={theme.picture.alt} width={340} height={230} className={styles.elementCardImage}/>
							<Heading data={{text: theme.name, tag: 'h4'}} cn={{align: 'text-center', margin: 'mb-6'}} className={'capitalize'} />
							<Text data={{text: theme.description, tag: 'p'}} cn={{ margin: 'mb-6'}} className={'text-center'} />
							<Button
								className={styles.elementCardButton}
								disabled={mode === 'auto'}
								onClick={() => setIsActive(prev => !prev)}
							>
								{isActive || mode === 'auto' ? 'Выбрано': 'Выбрать'}
							</Button>
						</>
					}
					/>
				)
			}
		</section>
	);
};