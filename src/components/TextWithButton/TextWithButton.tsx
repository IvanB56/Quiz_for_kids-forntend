'use client';
import React, {useRef, useState} from 'react';
import {Button, Text} from "@components";
import './TextWithButton.scss';

type TextWithButtonProps = {
	text: string;
	className?: string;
}

export const TextWithButton = ({text, className}: TextWithButtonProps) => {
	const textRef = useRef<HTMLParagraphElement | null>(null);
	const defaultButtonText = 'Копировать ссылку';
	const [buttonText, setButtonText] = useState<string>(defaultButtonText);

	const copyHandler = async () => {
		const text = textRef?.current?.innerText || '';
		navigator.clipboard.writeText(text)
			.then(() => {
				setButtonText('Ссылка скопирована');
				setTimeout(() => setButtonText(defaultButtonText), 1000);
			});
	};

	return (
		<div className={`text-with-button ${className}`}>
			<Text data={{text, tag: 'p'}} className={'text-with-button__text'} ref={textRef} />
			<Button className={'text-with-button__button'} onClick={copyHandler}>{buttonText}</Button>
		</div>
	);
};