'use client';
import React from 'react';
import Image from 'next/image';
import {Button, SectionWhite, Text} from '@components';
import {IGreetingsChild} from './GreetingsChild.types';
import classes from './GreetingsChild.cn';
import {getUserAuthData} from "@/entities/user";
import {useSelector} from "react-redux";
import image from '@assets/images/child/female-student-2.webp';


import './GreetingsChild.scss';
import {useRouter} from "next/navigation";

export const GreetingsChild = (props: IGreetingsChild) => {
	const {cn, greetings} = props;
	const styles = classes(cn);
	const user = useSelector(getUserAuthData);
	const router = useRouter();

	if (!user) return null;

	return (
		<>
			<SectionWhite className={styles.elementGreeting} overflow="overflow-visible">
				{greetings?.message && <Text data={{
					text: greetings.message,
					tag: 'p',
				}} cn={{
					size: 'text-body-1'
				}} className="text-center"/>}
				{greetings?.language && <Text data={{
					text: greetings.language,
					tag: 'p',
				}} cn={{
					size: 'text-body-3',
					color: 'text-primary-blue',
					margin: 'mb-2 mt-[18px]'
				}}  className="text-center"/>}
				<Button type="button" variant={'greetings'} onClick={() => router.push('/child/tasks')}>Начнем</Button>
			</SectionWhite>
			<div className={styles.elementWrapperImage}>
				<Image src={image} alt="Приветствие" fill className={styles.elementImage}/>
			</div>
		</>
	);
};
