'use client';
import {Button, Checkbox, Helper, Label, SectionWhite, Text} from '@components';
import React, {useCallback, useEffect, useRef} from 'react';
import {StepProps} from "@/widgets/FormProfile/types";
import {useSelector} from "react-redux";
import {getQuizCategory} from "@/features/PlaySettings/model/selectors/getQuizCategory/getQuizCategory";
import {useAppDispatch} from "@hooks";
import {fetchGetQuizCategory} from "@/features/PlaySettings/model/services/getQuizCategory/getQuizCategory";
import {QuizCategory} from "@/features/PlaySettings/model/types/QuizCategoryScheme";
import {CheckedState} from "@radix-ui/react-checkbox";

type ThirdStepProps = Required<Pick<StepProps, 'prevStepHandler' | 'nextStepHandler' | 'callback'>>;

export const ThirdStep = ({callback, prevStepHandler, nextStepHandler}: ThirdStepProps) => {
	const quizCategoryData = useSelector(getQuizCategory);
	const dispatch = useAppDispatch()
	const value = useRef<QuizCategory[]>([]);

	useEffect(() => {
		dispatch(fetchGetQuizCategory());
	}, [dispatch]);

	const сhangeHandler = useCallback((state: CheckedState, data: QuizCategory) => {
		if (state == true) {
			value.current.push(data);
		} else {
			value.current = value.current.filter(item => item.slug !== data.slug);
		}
	}, []);

	const saveData = () => {
		callback({name: 'categories', value: value.current.map(item => item.slug)});
		nextStepHandler();
	}

	return (
		<>
			<SectionWhite
				overflow="overflow-visible"
				className="flex justify-between flex-col h-full gap-y-8 m-auto"
			>
				<Text data={{text: 'Выбор тем для ребенка', tag: 'p'}} cn={{size: 'text-body-1', weight: 'font-bold'}}/>
				<div className="flex gap-4 flex-wrap">
					{
						quizCategoryData?.data?.map(category => (
							<div
								className="flex items-center gap-2 rounded-100 py-3 px-4 bg-cyan-light cursor-pointer"
								key={category.slug}
							>
								<Checkbox
									id={category.slug}
									className="rounded-circle"
									onCheckedChange={(state) => сhangeHandler(state, category)}
								/>
								<Label htmlFor={category.slug}><Text data={{text: category.name, tag: 'span'}} /></Label>
							</div>
						))
					}
				</div>
				<Helper cn={{width: 'full'}}>
					<Text data={{
						text: 'Выберете категории наиболее подходящие для вашего ребенка',
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
				{value.current && <Button type="button" onClick={saveData}>Далее</Button>}
			</SectionWhite>
		</>
	);
};