'use client';
import React, {FormEvent, useRef, useState} from 'react';
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {FirstStep, FourthStep, SecondStep, ThirdStep, ChildsafeFirstStep, ChildSafeSecondStep} from "./components";
import {classes} from "./FormProfile.cn";
import {PartialFormDataType, PartialNewFormDataType} from "./types";
import './styles/FormProfile.scss';

export type FormVariant = 'default' | 'new';

export interface FormProfileProps {
	variant?: FormVariant;
}

export const FormProfile = ({ variant = 'default' }: FormProfileProps) => {
	const [step, setStep] = useState(1);

	// Состояние для оригинальной формы (4 шага)
	const [formData, setFormData] = useState<PartialFormDataType>({
		sum_coins: '',
		settings: ''
	});

	// Состояние для новой формы (2 шага)
	const [newFormData, setNewFormData] = useState<PartialNewFormDataType>({
		title: '',
		description: ''
	});

	const nodeRef = useRef<HTMLFormElement>(null);
	const styles = classes();

	const prepareData = (data: { name: string, value: string }) => {
		if (variant === 'new') {
			setNewFormData((prev) => ({...prev, [data.name]: data.value}));
		} else {
			setFormData((prev) => ({...prev, [data.name]: data.value}));
		}
	};

	const submitForm = (e?: FormEvent) => {
		if (e) e.preventDefault();
	}

	const prevStep = () => {
		setStep(prev => Math.max(prev - 1, 1));
	};

	const nextStep = () => {
		const maxSteps = variant === 'new' ? 2 : 4;
		setStep(prev => Math.min(prev + 1, maxSteps));
	}

	const renderSteps = () => {
		if (variant === 'new') {
			// Новый вариант с 2 шагами
			switch (step) {
				case 1:
					return <ChildsafeFirstStep
						callback={prepareData}
						nextStepHandler={nextStep}
						data={newFormData.title || ''}
					/>;
				case 2:
					return <ChildSafeSecondStep
						callback={prepareData}
						saveDataHandler={submitForm}
						prevStepHandler={prevStep}
						data={newFormData.description || ''}
					/>;
				default:
					return null;
			}
		} else {
			// Оригинальный вариант с 4 шагами
			switch (step) {
				case 1:
					return <FirstStep
						callback={prepareData}
						nextStepHandler={nextStep}
						data={formData.sum_coins || ''}
					/>;
				case 2:
					return <SecondStep
						callback={prepareData}
						saveDataHandler={submitForm}
						nextStepHandler={nextStep}
						prevStepHandler={prevStep}
						data={formData.settings || ''}
					/>;
				case 3:
					return <ThirdStep
						callback={prepareData}
						nextStepHandler={nextStep}
						prevStepHandler={prevStep}
						data={formData.count ?? ''}
					/>;
				case 4:
					return <FourthStep
						callback={prepareData}
						saveDataHandler={submitForm}
						prevStepHandler={prevStep}
						data={formData.mode ?? ''}
					/>;
				default:
					return null;
			}
		}
	};

	return (
		<div className={styles.block}>
			<SwitchTransition mode="out-in">
				<CSSTransition
					key={step}
					timeout={500}
					classNames="transition"
					nodeRef={nodeRef}
				>
					<form className="form-step" ref={nodeRef} onSubmit={submitForm}>
						{renderSteps()}
					</form>
				</CSSTransition>
			</SwitchTransition>
		</div>
	);
};
