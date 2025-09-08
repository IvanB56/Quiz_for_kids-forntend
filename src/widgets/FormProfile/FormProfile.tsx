'use client';
import React, {FormEvent, useEffect, useRef, useState} from 'react';
import {useRouter} from "next/navigation";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {FormDataType} from "./types";
import {autoConfigure, previousConfigure} from "@/shared/api";
import {useAppDispatch, useAppSelector} from "@lib/store/hooks";
import {fetchUsers} from "@lib/store/features/user";
import {FirstStep, FourthStep, SecondStep, ThirdStep} from "./components";
import {classes} from "./FormProfile.cn";

import './styles/FormProfile.scss';

export const FormProfile = () => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState<FormDataType>({
		budget: 0,
	});
	const nodeRef = useRef<HTMLFormElement>(null);
	const dispatch = useAppDispatch();
	const {data: user} = useAppSelector(state => state.user);
	const router = useRouter();

	const styles = classes();

	const prepareData = (data: { name: string, value: string }) => {
		setFormData((prev) => ({...prev, [data.name]: data.value}));
	};

	const submitForm = (e: FormEvent, settings: string = 'hand') => {
		e.preventDefault();
		const {budget} = formData;

		switch (settings) {
			case 'hand':
				console.log('hand');
				break;
			case 'auto':
				autoConfigure({budget}, String(user.user_id)).then(() => router.refresh());
				break;
			case 'last-choice':
				previousConfigure({budget}, String(user.user_id)).then(() => router.refresh());
				break;
		}
	}

	const prevStep = () => {
		setStep(prev => Math.max(prev - 1, 0))
	};
	
	const nextStep = () => {
		setStep(prev => prev + 1);
	};

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

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
						{step === 1 && <FirstStep callback={prepareData} nextStepHandler={nextStep} data={formData.budget}/>}
						{step === 2 && <SecondStep saveDataHandler={submitForm} nextStepHandler={nextStep} prevStepHandler={prevStep}/>}
						{step === 3 && <ThirdStep callback={prepareData} nextStepHandler={nextStep} prevStepHandler={prevStep}/>}
						{step === 4 && <FourthStep callback={prepareData} saveDataHandler={submitForm} prevStepHandler={prevStep} data={formData.mode ?? ''}/>}
					</form>
				</CSSTransition>
			</SwitchTransition>
		</div>
	);
};