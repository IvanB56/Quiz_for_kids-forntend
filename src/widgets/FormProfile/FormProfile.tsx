'use client';
import React, {FormEvent, useRef, useState} from 'react';
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {FirstStep, FourthStep, SecondStep, ThirdStep} from "./components";
import {classes} from "./FormProfile.cn";
import {PartialFormDataType} from "./types";
import './styles/FormProfile.scss';

export const FormProfile = () => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState<PartialFormDataType>({
		sum_coins: '',
		settings: ''
	});
	const nodeRef = useRef<HTMLFormElement>(null);

	const styles = classes();

	const prepareData = (data: { name: string, value: string }) => {
		setFormData((prev) => ({...prev, [data.name]: data.value}));
	};

	const submitForm = (e: FormEvent) => {
		e.preventDefault();
		console.log(formData)
	}

	const prevStep = () => {
		setStep(prev => Math.max(prev - 1, 0))
	};
	const nextStep = () => {
		setStep(prev => prev + 1);
	}

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
						{step === 1 && <FirstStep callback={prepareData} nextStepHandler={nextStep} data={formData.sum_coins}/>}
						{step === 2 && <SecondStep callback={prepareData} saveDataHandler={submitForm} nextStepHandler={nextStep} prevStepHandler={prevStep} data={formData.settings}/>}
						{step === 3 && <ThirdStep callback={prepareData} nextStepHandler={nextStep} prevStepHandler={prevStep} data={formData.count ?? ''}/>}
						{step === 4 && <FourthStep callback={prepareData} saveDataHandler={submitForm} prevStepHandler={prevStep} data={formData.mode ?? ''}/>}
					</form>
				</CSSTransition>
			</SwitchTransition>
		</div>
	);
};