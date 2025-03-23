import React from 'react';
import Image from 'next/image';
import image from '@assets/images/greetings/image.webp';
import { Heading, Text } from '@components';
import { IGreetings } from './Greetings.types';
import classes from './Greetings.cn';
import './Greetings.scss';

export const Greetings = (props: IGreetings) => {
	const { cn } = props;
	const styles = classes(cn);

	return (
		<section className={styles.block}>
			<div className="flex container mx-auto justify-between gap-x-[100px] max-md:flex-wrap">
				<div className={styles.elementLeft}>
					<Heading
						data={{ tag: 'h1', text: 'Добро пожаловать на сайт викторин МонетикУМ.' }}
						cn={{ margin: 'mb-[30px]' }}
					/>
					<Text
						data={{
							text: 'Мы рады приветствовать вас в мире знаний увлекательных соревнований. Здесь вы сможете проверить свою эрудицию, расширить кругозор и весело провести время, учавствуя в разнообразных викторинах. ',
							tag: 'p',
						}}
						cn={{ size: 'text-body-1', color: 'text-primary-grey' }}
					/>
				</div>
				<div className={styles.elementRight}>
					<Image src={image} alt="Приветствие" fill className={'object-contain'} />
				</div>
			</div>
		</section>
	);
};
