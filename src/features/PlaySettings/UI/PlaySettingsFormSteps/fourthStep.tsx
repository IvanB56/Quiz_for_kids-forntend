'use client';
import {Button, Helper, Label, RadioGroup, RadioGroupItem, Range, SectionWhite, Text} from '@components';
import React, {useCallback, useEffect, useState} from 'react';
import {StepProps} from "@/widgets/FormProfile/types";
import {useAppDispatch} from "@hooks";
import {
	fetchPlaySettingsConfigure
} from "@/entities/play/model/services/fetchPlaySettingsConfigure/fetchPlaySettingsConfigure";
import {useSelector} from "react-redux";
import {getPlayConfigure} from "@/entities/play/model/selectors/getPlayConfigure/getPlayConfigure";

type ThirdStepProps = Required<Pick<StepProps, 'prevStepHandler' | 'nextStepHandler' | 'callback'>>;

export const FourthStep = ({callback, prevStepHandler, nextStepHandler}: ThirdStepProps) => {
	const dispatch = useAppDispatch();
	const [value, setValue] = useState<number>(0);
	const {data, isLoading} = useSelector(getPlayConfigure);
	const [isHandSettings, setIsHandSettings] = useState<boolean>(false);
	const [isNextStep, setIsNexstStep] = useState<boolean>(false);

	useEffect(() => {
		dispatch(fetchPlaySettingsConfigure());
	}, [dispatch]);

	const radioChangeHandler = useCallback((data: number) => {
		setIsHandSettings(false);
		setValue(data);
		setIsNexstStep(true);
	}, []);

	const saveData = () => {
		callback({name: 'questions_quantity', value: String(value)});
		nextStepHandler();
	}

	const rangeHandler = (e: number[]) => {
		setValue(e[0]);
	}

	if (isLoading || !data) {
		return 'Загрузка данных'
	}

	return (
		<>
			<SectionWhite
				overflow="overflow-visible"
				className="flex justify-between flex-col h-full gap-y-8 m-auto"
			>
				<Text data={{text: 'Выбор количества вопросов', tag: 'p'}} cn={{size: 'text-body-1', weight: 'font-bold'}}/>
				<RadioGroup className="flex space-x-6">
					<Label className="flex items-center space-x-2">
						<RadioGroupItem
							value={String(data.minimum_questions_per_month)}
							id={String(data.minimum_questions_per_month)}
							onClick={() => radioChangeHandler(data.minimum_questions_per_month)}
						/>
						<Text data={{text: `${data.minimum_questions_per_month} вопросов`, tag: 'p'}}/>
					</Label>
					<Label className="flex items-center space-x-2">
						<RadioGroupItem
							value={String(data.maximum_questions_per_month)}
							id={String(data.maximum_questions_per_month)}
							onClick={() => radioChangeHandler(data.maximum_questions_per_month)}
						/>
						<Text data={{text: '1000 вопросов', tag: 'p'}}/>
					</Label>
					<Label className="flex items-center space-x-2">
						<RadioGroupItem value="hand" id="hand" onClick={() => {
							setIsHandSettings(true);
							setIsNexstStep(true);
							setValue(data.minimum_questions_per_month);
						}}/>
						<Text data={{text: 'Ручная настройка', tag: 'p'}}/>
					</Label>
				</RadioGroup>
				{
					isHandSettings && (
						<div  className="flex w-full gap-10">
							<Range
								label={'Настройте количество вопросов'}
								step={10}
								min={data.minimum_questions_per_month}
								max={data.maximum_questions_per_month}
								maxLabel={data.maximum_questions_per_month}
								minLabel={data.minimum_questions_per_month}
								defaultValue={[data.minimum_questions_per_month]}
								onChange={(e) => rangeHandler(e)}
								className="flex-auto"
							/>
							<Text data={{text: `${value} вопросов`, tag: 'span'}} cn={{size: 'text-body-1'}} />
						</div>
					)
				}
				<Helper cn={{width: 'full'}}>
					<Text data={{
						text: 'Выберите количество вопросов на этот месяц для ребенка. Учитывайте, что ваша сумма будет поделена на вопросы, то есть чем больше вопросов то будет дешевле их стоимость.',
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
				{isNextStep && <Button type="button" onClick={saveData}>Далее</Button>}
			</SectionWhite>
		</>
	);
};