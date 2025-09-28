import React from 'react';
import Image from "next/image";
import {CN} from "@/lib";
import { Heading, CardBackground } from '@components';

import './SectionHowWorks.scss';

const block = CN('how-works');

export const SectionHowWorks = () => {
	return (
		<section className={block()}>
			<div className={block('wrapper-content')}>
				<Heading data={{text: 'КАК ЭТО РАБОТАЕТ', tag: 'h2'}} cn={{size: 'h2', align: 'text-center', margin: 'mb-7 sm:mb-12'}} className={block('heading')}/>
				<Heading data={{text: 'Специальная система подбора викторин с симулятором зарплаты', tag: 'h3'}} cn={{size: 'h3', align: 'text-center', margin: 'mb-7 sm:mb-14'}} className={block('heading')}/>
				<div className={block('cards')}>
					<div className={'card-long'}>
						<div className={'card-long__wrapper-content'}>
							<Image src={"/images/index2/how-works/card-long-girls.webp"} width={819} height={645} alt="" className={'card-long__image'}/>
							<div className={'card-long__texts'}>
								<ol className={'card-long__list'}>
									<li>Финансовая грамотность;</li>
									<li>Кибер безопасность;</li>
									<li>Домашний быт;</li>
									<li>Психология отношений;</li>
									<li>Этика поведения;</li>
									<li>ЗОЖ (Здоровый образ жизни);</li>
									<li>Любопытные факты и эрудиция;</li>
									<li>Работа с ИИ;</li>
									<li>Правовая грамотность;</li>
									<li>Половое воспитание.</li>
								</ol>
							</div>
							<div className={'card-long__number'}>
								<img src='/images/index2/how-works/01.svg' alt='' />
							</div>
						</div>
						<Image src={"/images/index2/how-works/card-lond-background-1.png"} fill alt="" className={'card-long__background'}/>
					</div>
					<div className={'card-long card-long_reverse'}>
						<div className={'card-long__wrapper-content'}>
							<Image src={"/images/index2/how-works/card-long-notebook.webp"} width={365} height={645} alt="" className={'card-long__image'}/>
							<div className={'card-long__texts'}>
								<ol className={'card-long__list'}>
									<li>Заключите с ребенком <b>игровой договор</b> о правах и обязанностях;</li>
									<li>Выберете <b>актуальные темы</b> для вашего ребенка:</li>
									<li>Ребенок отвечает на <b>викторины</b> - прокачивает ум и получает монеты;</li>
									<li>Включите <b>финансовые сервисы</b> - учится планировать и правильно копить;</li>
									<li>Вызывает тревогу – запустите <b>психологическое тестирование</b>;</li>
									<li>В конце обменяйте детские <b>монеты</b> на деньги</li>
								</ol>
							</div>
							<div className={'card-long__number'}>
								<img src='/images/index2/how-works/02.svg' alt='' />
							</div>
						</div>
						<Image src={"/images/index2/how-works/card-lond-background-2.png"} fill alt="" className={'card-long__background'}/>
					</div>
					<div className={block('row')}>
						<CardBackground
							textData={'Как происходит развитие'}
							imgSrc={'/images/index2/how-works/card-background-girl.webp'}
							imgWidth={739}
							imgHeight={644}/>
						<CardBackground
							textData={'Как начисляете зарплату. Пример'}
							imgSrc={'/images/index2/how-works/card-background-boy.webp'}
							imgWidth={728}
							imgHeight={644}/>
					</div>
				</div>
			</div>
		</section>
	);
};
