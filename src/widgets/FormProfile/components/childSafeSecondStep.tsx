'use client';
import React, {ChangeEvent, useRef, useState} from 'react';
import {Button, SectionWhite, Text, Textarea} from '@components';
import {StepProps} from "@/widgets/FormProfile/types";

type NewSecondStepProps = Required<Pick<StepProps, 'prevStepHandler' | 'saveDataHandler' | 'callback' | 'data'>>;

export const ChildSafeSecondStep = ({callback, saveDataHandler, data}: NewSecondStepProps) => {
	const [value, setValue] = useState<string>(data);
	const [isError, setIsError] = useState<boolean>(false);
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const changeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const target = e.target;
		setValue(target.value);
		setIsError(false);
	}

	const clickSaveButton = () => {
		if (!value) return setIsError(true);

		callback({value, name: textareaRef?.current?.name || ''});
		saveDataHandler();
	}

	return (
		<>
			<SectionWhite
				overflow="overflow-visible"
				className="flex justify-between flex-col h-full gap-y-8 max-w-[900px] m-auto"
			>
				<Text data={{text: 'Сколько хочешь накопить ?', tag: 'p'}}
				      cn={{size: 'text-body-1', weight: 'font-bold', margin: 'mx-auto'}}/>
				<div className="flex flex-col gap-4 relative w-[80%] mx-auto">
					<Textarea
						name="amount_description"
						placeholder="например: 50 000"
						onChange={changeTextareaHandler}
						value={value}
						ref={textareaRef}
						className="min-h-[120px]"
					/>
					{isError && <Text
						data={{text: 'Поле обязательно для заполнения', tag: 'span'}}
						cn={{color: 'text-primary-red', size: 'text-body-5', margin: 'mx-auto'}}
						className="absolute -bottom-4 left-0"
					/>}
					<Button type="button" className={'mx-auto'} onClick={clickSaveButton}>сохранить</Button>
				</div>
			</SectionWhite>
		</>
	);
};
