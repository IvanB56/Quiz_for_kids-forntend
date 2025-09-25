'use client';
import {Button, Helper, Label, RadioGroup, RadioGroupItem, SectionWhite, Text} from '@components';
import React, {MouseEvent, useCallback, useEffect, useRef} from 'react';
import {StepProps} from "@/widgets/FormProfile/types";
import {useSelector} from "react-redux";
import {getQuizCategory} from "@/features/PlaySettings/model/selectors/getQuizCategory/getQuizCategory";
import {useAppDispatch} from "@hooks";
import {fetchGetQuizCategory} from "@/features/PlaySettings/model/services/getQuizCategory/getQuizCategory";

type ThirdStepProps = Required<Pick<StepProps, 'prevStepHandler' | 'nextStepHandler' | 'callback'>>;

export const ThirdStep = ({callback, prevStepHandler, nextStepHandler}: ThirdStepProps) => {
	const quizCategory = useSelector(getQuizCategory);
	const dispatch = useAppDispatch()
	const value = useRef<{slug: string, name: string, description: string}[]>([]);

	useEffect(() => {
		dispatch(fetchGetQuizCategory());
	}, [dispatch]);

	const radioChangeHandler = useCallback((e: MouseEvent<HTMLButtonElement>) => {
		const target = e.currentTarget;
		console.log(value.current)

		// callback({name: 'count', value: value.current})
	}, [])

	console.log(quizCategory);
	
	return (
		<>
			<SectionWhite
				overflow="overflow-visible"
				className="flex justify-between flex-col h-full gap-y-8 m-auto"
			>
				<Text data={{text: 'Выбор количества вопросов', tag: 'p'}} cn={{size: 'text-body-1', weight: 'font-bold'}}/>
				<RadioGroup defaultValue="300" className="flex space-x-6">
					<Label className="flex items-center space-x-2">
						<RadioGroupItem value="300" id="300" onClick={radioChangeHandler}/>
						<Text data={{text: '300 вопросов', tag: 'p'}}/>
					</Label>
				</RadioGroup>
				<Helper cn={{width: 'full'}}>
					<Text data={{
						text: 'Выберите количество вопросов на ЭТОТ месяц для Антона. Учитывайте, что ваша сумма будет поделена на вопросы, то есть чем больше вопросов то будет дешевле их стоимость.',
						tag: 'p'
					}} cn={{
						color: 'text-black',
						textWrap: 'text-wrap'
					}}/>
					<Button type="button" size="small" className="m-auto mt-4">Подробнее</Button>
				</Helper>
			</SectionWhite>
			<SectionWhite overflow="overflow-visible" className="flex justify-between mt-6">
				<Button type="button" onClick={prevStepHandler}>Назад</Button>
				{value.current && <Button type="button" onClick={nextStepHandler}>Далее</Button>}
			</SectionWhite>
		</>
	);
};