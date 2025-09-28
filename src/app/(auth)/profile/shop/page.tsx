'use client';
import React, {MouseEvent} from 'react';
import Image from 'next/image';
import {
	Button,
	Heading,
	Label,
	RadioGroup,
	RadioGroupItem,
	SectionWhite,
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Text
} from "@components";
import image_1 from '@assets/images/shop/image-1.png';
import image_2 from '@assets/images/shop/image-2.png';
import image_3 from '@assets/images/shop/image-3.png';
import './Shop.scss';

const Shop = () => {

	const radioChangeHandler = (e: MouseEvent) => {
		console.log(e.currentTarget.getAttribute('value'))
	}

	const selectChangeHandler = (name: string, value: string) => {
		console.log(`${name} - ${value}`)
	}

	return (
		<>
			<SectionWhite overflow="overflow-visible">
				<div className="flex justify-between">
					<RadioGroup defaultValue="option-one" className="flex space-x-2">
						<Label className="flex items-center space-x-2">
							<Text data={{text: 'Бесплатные', tag : 'p'}} />
							<RadioGroupItem value="option-one" id="option-one" onClick={radioChangeHandler}/>
						</Label>
						<Label className="flex items-center space-x-2">
							<Text data={{text: 'Платные', tag: 'p'}} />
							<RadioGroupItem value="option-two" id="option-two" onClick={radioChangeHandler}/>
						</Label>
					</RadioGroup>
					<div className="flex space-x-2">
						<Select onValueChange={(value) => selectChangeHandler('courses', value)}>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Курсы" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="all">Все</SelectItem>
									<SelectItem value="course 1">Курс 1</SelectItem>
									<SelectItem value="course 2">Курс 2</SelectItem>
									<SelectItem value="course 3">Курс 3</SelectItem>
									<SelectItem value="course 4">Курс 4</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
						<Select onValueChange={(value) => selectChangeHandler('themes', value)}>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Темы" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="all">Все</SelectItem>
									<SelectItem value="theme 1">Тема 1</SelectItem>
									<SelectItem value="theme 2">Тема 2</SelectItem>
									<SelectItem value="theme 3">Тема 3</SelectItem>
									<SelectItem value="theme 4">Тема 4</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</div>
			</SectionWhite>
			<SectionWhite overflow="overflow-visible" className="card">
				<Image src={image_1} alt="image" width={277} style={{objectFit: 'cover'}} />
				<div className="divider"></div>
				<div className="flex flex-col">
					<Heading data={{text: 'Нейросети. Практический курс', tag: 'h4'}} cn={{margin: 'mb-4'}} />
					<Text data={{
						text: 'Они помогают писать тексты и код, генерируют визуал, анализируют данные и делают переводы с любых языков. Навыки владения ИИ уже стали обязательными для дизайнеров, маркетологов, менеджеров, аналитиков и программистов. Список профессий, в которых используют нейросети, будет только расти.',
						tag: 'p'
					}} />
					<div className="buttons">
						<Button type="button" variant="light">Подробнее</Button>
						<Button type="button" variant="orange">Купить за звезды</Button>
						<Button type="button" >Купить</Button>
					</div>
				</div>
			</SectionWhite>
			<SectionWhite overflow="overflow-visible" className="card">
				<Image src={image_2} alt="image" width={277} style={{objectFit: 'cover'}} />
				<div className="divider"></div>
				<div className="flex flex-col">
					<Heading data={{text: 'Кибер безопасность. Практический курс', tag: 'h4'}} cn={{margin: 'mb-4'}} />
					<Text data={{
						text: 'Они помогают писать тексты и код, генерируют визуал, анализируют данные и делают переводы с любых языков. Навыки владения ИИ уже стали обязательными для дизайнеров, маркетологов, менеджеров, аналитиков и программистов. Список профессий, в которых используют нейросети, будет только расти.',
						tag: 'p'
					}} />
					<div className="buttons">
						<Button type="button" variant="light">Подробнее</Button>
						<Button type="button" variant="orange">Купить за звезды</Button>
						<Button type="button" >Купить</Button>
					</div>
				</div>
			</SectionWhite>
			<SectionWhite overflow="overflow-visible" className="card">
				<Image src={image_3} alt="image" width={277} style={{objectFit: 'cover'}} />
				<div className="divider"></div>
				<div className="flex flex-col">
					<Heading data={{text: 'Финансовая грамотность. Практический курс', tag: 'h4'}} cn={{margin: 'mb-4'}} />
					<Text data={{
						text: 'Они помогают писать тексты и код, генерируют визуал, анализируют данные и делают переводы с любых языков. Навыки владения ИИ уже стали обязательными для дизайнеров, маркетологов, менеджеров, аналитиков и программистов. Список профессий, в которых используют нейросети, будет только расти.',
						tag: 'p'
					}} />
					<div className="buttons">
						<Button type="button" variant="light">Подробнее</Button>
						<Button type="button" variant="orange">Купить за звезды</Button>
						<Button type="button" >Купить</Button>
					</div>
				</div>
			</SectionWhite>
		</>
	);
};

export default Shop;