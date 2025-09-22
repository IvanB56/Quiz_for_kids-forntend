import React, {MouseEvent, useRef} from 'react';
import {Button, Helper, Label, RadioGroup, RadioGroupItem, SectionWhite, Text} from "@components";
import {StepProps} from "@/widgets/FormProfile/types";

type FourthStepProps = Required<Pick<StepProps, 'prevStepHandler' | 'callback' | 'saveDataHandler' | 'data'>>;

export const FourthStep = ({callback, prevStepHandler, saveDataHandler, data}: FourthStepProps) => {
	const value = useRef<string>(String(data));

	const radioChangeHandler = (e: MouseEvent<HTMLButtonElement>) => {
		const target = e.currentTarget;
		value.current = target.getAttribute('value') || '';

		callback({name: 'mode', value: value.current})
	}

	return (
		<>
			<SectionWhite
				overflow="overflow-visible"
				className="flex justify-between flex-col h-full gap-y-8 m-auto"
			>
				<Text data={{text: 'Выбор режима настройки приложения  ', tag: 'p'}} cn={{size: 'text-body-1', weight: 'font-bold'}}/>
				<RadioGroup defaultValue={value.current} className="flex space-x-6">
					<Label className="flex items-center space-x-2">
						<RadioGroupItem value="quiz" id="quiz" onClick={radioChangeHandler}/>
						<Text data={{text: 'Викторины', tag: 'p'}}/>
					</Label>
					<Label className="flex items-center space-x-2">
						<RadioGroupItem value="test-quiz" id="test" onClick={radioChangeHandler}/>
						<Text data={{text: 'Тесты', tag: 'p'}}/>
					</Label>
					<Label className="flex items-center space-x-2">
						<RadioGroupItem value="combined" id="combined" onClick={radioChangeHandler}/>
						<Text data={{text: 'комбинированный', tag: 'p'}}/>
					</Label>
				</RadioGroup>
				<Helper cn={{width: 'full'}}>
					<Text data={{
						text: 'При выборе комбинированный, ребенку будет хаотично попадаться как и тесты так и викторины ',
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
				{value.current && <Button type="submit" onClick={saveDataHandler}>Сохранить</Button>}
			</SectionWhite>
		</>
	);
};