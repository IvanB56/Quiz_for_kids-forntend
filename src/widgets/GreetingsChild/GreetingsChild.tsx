import React from 'react';
import Image from 'next/image';
import image from '@assets/images/child/female-student-2.webp';
import { Button, Text } from '@components';
import { IGreetingsChild } from './GreetingsChild.types';
import classes from './GreetingsChild.cn';
import './GreetingsChild.scss';

export const GreetingsChild = (props: IGreetingsChild) => {
	const { cn } = props;
	const styles = classes(cn);

	return (
		<section className={styles.block}>
			<div className={styles.elementGreeting}>
				<Text
					data={{
						text: 'Привет Антон. Давай зарабатывать монеты',
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
						text: 'Hi Anton. Let\'s earn coins',
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
						text: 'Хай&nbsp;ˈэнтон. Летс&nbsp;ён&nbsp;койнз',
						tag: 'p',
					}}
					cn={{ size: 'text-body-1', color: 'text-primary-red' }}
				/>
				<Button type="button" variant={'greetings'}>Начнем</Button>
			</div>
			<div className={styles.elementWrapperImage}>
				<Image src={image} alt="Приветствие" width={671} className={styles.elementImage} />
			</div>
		</section>
	);
};
