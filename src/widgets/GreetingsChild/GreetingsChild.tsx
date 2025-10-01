'use client';
import React from 'react';
import Image from 'next/image';
import {Button, Text} from '@components';
import {IGreetingsChild} from './GreetingsChild.types';
import classes from './GreetingsChild.cn';
import {getUserAuthData} from "@/entities/user";
import {useSelector} from "react-redux";
import image from '@assets/images/child/female-student-2.webp';


import './GreetingsChild.scss';
import {useRouter} from "next/navigation";

export const GreetingsChild = (props: IGreetingsChild) => {
	const { cn } = props;
	const styles = classes(cn);
	const user = useSelector(getUserAuthData);
	const router = useRouter();

	if (!user) return null;

	return (
		<section className={styles.block}>
			<div className={styles.elementGreeting}>
				<Text
					data={{
						text: `Привет. Давай зарабатывать монеты`,
						tag: 'p',
					}}
					cn={{ size: 'text-body-1' }}
				/>
				<Text
					data={{
						text: 'На английском',
						tag: 'p',
					}}
					cn={{ size: 'text-body-3', color: 'text-primary-blue', margin: 'mb-2 mt-[18px]' }}
				/>
				<Text
					data={{
						text: `Hi. Let's earn coins`,
						tag: 'p',
					}}
					cn={{ size: 'text-body-1' }}
				/>
				<Text
					data={{
						text: 'Транскрипция',
						tag: 'p',
					}}
					cn={{ size: 'text-body-3', color: 'text-primary-blue', margin: 'mb-2 mt-[25px]' }}
				/>
				<Text
					data={{
						text: 'Хай. Летс&nbsp;ён&nbsp;койнз',
						tag: 'p',
					}}
					cn={{ size: 'text-body-1', color: 'text-primary-red' }}
				/>
				<Button type="button" variant={'greetings'} onClick={() => router.push('/child/tasks')}>Начнем</Button>
			</div>
			<div className={styles.elementWrapperImage}>
				<Image src={image} alt="Приветствие" width={671} className={styles.elementImage} />
			</div>
		</section>
	);
};
