import React, { type ReactNode, useEffect, useRef, useState } from 'react';
import { FormController } from './FormController.ts';

type TypeForm = {
	action: string;
	children?: ReactNode;
	classNames?: string;
	method?: 'POST' | 'GET';
	submitButton?: {
		sendText: string;
	};
};

export const Form = (props: TypeForm) => {
	const { action, submitButton, children, method } = props;
	const formRef = useRef<HTMLFormElement | null>(null);
	const [, setForm] = useState<FormController | null>(null);

	useEffect(() => {
		formRef.current && setForm(new FormController(formRef.current));
	}, [formRef]);

	return (
		<form action={action} ref={formRef} method={method || 'GET'} className="w-full">
			{children}
			{submitButton && (
				<div className="form-button">
					<button className="form-submit text-white bg-blue-400 px-3.5 py-2.5 rounded-lg font-bold mt-4">
						{submitButton.sendText}
					</button>
				</div>
			)}
		</form>
	);
};
