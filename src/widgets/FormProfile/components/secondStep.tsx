'use client';
import React, {MouseEvent, useRef} from 'react';
import {Button, Helper, Label, RadioGroup, RadioGroupItem, SectionWhite, Text} from '@components';
import {StepProps} from "@/widgets/FormProfile/types";

type SecondStepProps = Required<Pick<StepProps, 'prevStepHandler' | 'nextStepHandler' | 'saveDataHandler' | 'callback' | 'data'>>;

export const SecondStep = ({callback, nextStepHandler, prevStepHandler, saveDataHandler, data}: SecondStepProps) => {
	const value = useRef<string>(data);

	const radioChangeHandler = (e: MouseEvent<HTMLButtonElement>) => {
		const target = e.currentTarget;
		value.current = target.getAttribute('value') || '';

		callback({name: 'settings', value: value.current})
	}

	return (
		<>
			<SectionWhite
				overflow="overflow-visible"
				className="flex justify-between flex-col h-full gap-y-8 m-auto"
			>
				<Text data={{text: 'Выбор режима настройки приложения', tag: 'p'}}
				      cn={{size: 'text-body-1', weight: 'font-bold'}}/>
				<RadioGroup defaultValue={data} className="flex space-x-6">
					<Label className="flex items-center space-x-2">
						<RadioGroupItem value="auto" id="auto" onClick={radioChangeHandler}/>
						<Text data={{text: 'Авто', tag: 'p'}}/>
					</Label>
					<Label className="flex items-center space-x-2">
						<RadioGroupItem value="hand" id="hand" onClick={radioChangeHandler}/>
						<Text data={{text: 'Ручная настройка', tag: 'p'}}/>
					</Label>
					<Label className="flex items-center space-x-2">
						<RadioGroupItem value="last-choice" id="last-choice" onClick={radioChangeHandler}/>
						<Text data={{text: 'Прошлый выбор', tag: 'p'}}/>
					</Label>
				</RadioGroup>
				<Helper cn={{width: 'full'}}>
					<Text data={{
						text: 'Выберите режим настройки монетикума и туда сюда ля ля тополя ',
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
				{value.current === 'hand' && <Button type="button" onClick={nextStepHandler}>Далее</Button>}
				{value.current && value.current !== 'hand' && <Button type="submit" onClick={saveDataHandler}>Сохранить</Button>}
			</SectionWhite>
		</>
	);
};