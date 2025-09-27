'use client';
import React, {ChangeEvent, useRef, useState} from 'react';
import {Button, SectionWhite, Text, Textarea} from '@components';
import {StepProps} from "@/widgets/FormProfile/types";

type NewFirstStepProps = Required<Pick<StepProps, 'callback' | 'nextStepHandler' | 'data'>>;

export const ChildsafeFirstStep = ({callback, nextStepHandler, data}: NewFirstStepProps) => {
	const [value, setValue] = useState<string | number>(data);
	const [isError, setIsError] = useState<boolean>(false);
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const changeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const target = e.target;
		setValue(target.value);
		setIsError(false);
	}

	const clickButton = () => {
		if (!value) return setIsError(true);

		callback({value: String(value), name: textareaRef?.current?.name || ''});
		nextStepHandler();
	}

	return (
		<SectionWhite
			overflow="overflow-visible"
			className="flex justify-between flex-col h-full gap-y-8 max-w-[900px] m-auto"
		>
			<Text data={{text: 'На какую цель копишь?', tag: 'p'}} cn={{size: 'text-body-1', weight: 'font-bold', margin: 'mx-auto'}}/>
			<div className="flex gap-8 relative w-[90%] sm:w-[80%] mx-auto">
				<Textarea
					name="goal_description"
					placeholder="например: покупка смартфона"
					onChange={changeTextareaHandler}
					value={value}
					ref={textareaRef}
					className="min-h-[80px] sm:min-h-[120px]"
				/>
				{isError && <Text
					data={{text: 'Поле обязательно для заполнения', tag: 'span'}}
					cn={{color: 'text-primary-red', size: 'text-body-5', margin: 'mx-auto'}}
					className="absolute -bottom-4 left-6"
				/>}
			</div>
			<Button type="button" className={'mx-auto'} onClick={clickButton}>продолжить</Button>
		</SectionWhite>
	);
};
