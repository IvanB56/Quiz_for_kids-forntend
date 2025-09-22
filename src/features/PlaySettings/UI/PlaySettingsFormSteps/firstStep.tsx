'use client';
import React, {ChangeEvent, useRef, useState} from 'react';
import {Button, Helper, Input, SectionWhite, Text} from "@components";
import {StepProps} from "@/widgets/FormProfile/types";

type FirstStepProps = Required<Pick<StepProps, 'callback' | 'nextStepHandler' | 'data'>>;

export const FirstStep = ({callback, nextStepHandler, data}: FirstStepProps) => {
	const [value, setValue] = useState<string>(data ? String(data): '');
	const [isError, setIsError] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const target = e.target;
		const lastChar = target.value.charAt(target.value.length - 1);
		setIsError(false);

		if (isNaN(Number(lastChar)) || !lastChar.trim()) {
			setValue(target.value.slice(0, -1));
		} else {
			setValue(target.value)
		}
	}

	const clickButton = () => {
		if (!value || +value === 0) return setIsError(true);

		callback({value, name: inputRef?.current?.name || ''});
		nextStepHandler();
	}

	return (
		<SectionWhite
			overflow="overflow-visible"
			className="flex justify-between flex-col h-full gap-y-8 max-w-[800px] m-auto"
		>
			<Text data={{text: 'Ваш бюджет', tag: 'p'}} cn={{size: 'text-body-1', weight: 'font-bold'}}/>
			<div className="flex gap-8 relative">
				<Input name="budget" type="text" placeholder="Введите сумму" onChange={changeInputHandler} value={value}
				       ref={inputRef}/>
				{isError && <Text
					data={{text: 'Поле обязательно для заполнения', tag: 'span'}}
					cn={{color: 'text-primary-red', size: 'text-body-5'}}
					className="absolute -bottom-4 left-6"
				/>}
				<Button type="button" onClick={clickButton}>Сохранить</Button>
			</div>
			<Helper cn={{width: 'full'}}>
				<Text data={{
					text: 'Введите сумму, которую хотите потратить на ребенка в этом месяце',
					tag: 'p'
				}} cn={{
					color: 'text-black',
					textWrap: 'text-wrap'
				}}/>
				<Button type="button" size="small" className="m-auto mt-4">Подробнее</Button>
			</Helper>
		</SectionWhite>
	);
};