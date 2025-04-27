'use client';
import React, {useContext} from 'react';
import {ProfileChildContext} from "@/shared/providers/ProfileChildProvider";
import {Heading, Text} from "@components";
import classes from './ProfileHeading.cn';
import Image from "next/image";
import './ProfileHeading.scss';

export const ProfileHeading = () => {
	const {child} = useContext(ProfileChildContext);
	const styles = classes();


	return (
		<div className={styles.block}>
			<Heading data={{text: 'Мой ребёнок', tag: 'h1'}}/>
			<div className={styles.elementInfo}>
				<div className={styles.elementText}>
					<Heading data={{text: `${child.name}, ${child.age} лет`, tag: 'h2'}}/>
					<div className={styles.elementCoins}>
						<div className={styles.elementEarned}>
							<Text data={{text: 'Заработанные монеты', tag: 'p'}} cn={{size: 'text-body-4'}} />
							<Text data={{text: child.coins, tag: 'p'}}/>
						</div>
						<div className={styles.elementBank}>
							<Text data={{text: 'монеты в копилке', tag: 'p'}} cn={{size: 'text-body-4'}} />
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
		</div>
	);
};