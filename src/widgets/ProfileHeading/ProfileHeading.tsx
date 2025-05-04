'use client';
import React, {useContext} from 'react';
import {useGetChildQuery} from "@lib/services/ChildService";
import {ProfileChildContext} from "@/shared/providers/ProfileChildProvider";
import {Button, Heading, LinkUI, Text} from "@components";
import {Plus} from "lucide-react";
import classes from './ProfileHeading.cn';
import Image from "next/image";
import './ProfileHeading.scss';

export const ProfileHeading = ({title}: { title: string }) => {
	const {child} = useContext(ProfileChildContext);

	const {data, isLoading} = useGetChildQuery('');
	const styles = classes();


	if (isLoading) {
		return (
			<div className={styles.block}>
				<Heading data={{text: title, tag: 'h1'}}/>
				<Text data={{text: 'Загрузка данных...', tag: 'span'}} cn={{size: 'text-body-2'}}/>
			</div>
		);
	}

	return (
		<div className={styles.block}>
			<Heading data={{text: title, tag: 'h1'}}/>
			{!data?.length && (
				<Button asChild variant={'link'}>
					<LinkUI data={{href: '../settings/child'}}>
						<Text data={{text: 'Добавить ребенка', tag: 'span'}} cn={{size: 'text-body-2'}}/>
						<Plus/>
					</LinkUI>
				</Button>
			)}
			{data?.length && (
				<div className={styles.elementInfo}>
					<div className={styles.elementText}>
						<Heading data={{text: `${child.name}, ${child.age} лет`, tag: 'h2'}}/>
						<div className={styles.elementCoins}>
							<div className={styles.elementEarned}>
								<Text data={{text: 'Заработанные монеты', tag: 'p'}} cn={{size: 'text-body-4'}}/>
								<Text data={{text: child.coins, tag: 'p'}}/>
							</div>
							<div className={styles.elementBank}>
								<Text data={{text: 'монеты в копилке', tag: 'p'}} cn={{size: 'text-body-4'}}/>
								<Text data={{text: child.piggyBank, tag: 'p'}}/>
							</div>
						</div>
					</div>
					<div className={styles.elementImages}>
						{child.image.map(({img, alt}) =>
							<Image src={img || ''} alt={alt || ''} key={img}/>
						)}
					</div>
				</div>
			)}
		</div>
	);
};