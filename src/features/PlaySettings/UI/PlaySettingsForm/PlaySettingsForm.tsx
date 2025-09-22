'use client';
import {useRouter} from 'next/navigation';
import {FormEvent, useCallback, useRef, useState} from 'react';
import {CN} from '@lib/ClassBem';
import {useAppDispatch} from "@hooks";
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import {PlaySettingsConfigure} from "../../model/types/PlaySettingsConfigureScheme";
import {fetchPostAutoConfigure} from "../../model/services/postAutoConfigure/postAutoConfigure";
import {fetchPostPlaySettingsPrevious} from "../../model/services/postPlaySettingsPrevious/postPlaySettingsPrevious";
import {FirstStep} from '../PlaySettingsFormSteps/firstStep';
import {SecondStep} from '../PlaySettingsFormSteps/secondStep';
import {ThirdStep} from '../PlaySettingsFormSteps/thirdStep';
import {FourthStep} from '../PlaySettingsFormSteps/fourthStep';

import './PlaySettingsForm.scss';


const block = CN('play-settings-form');

export const PlaySettingsForm = () => {
	const router = useRouter();
	const nodeRef = useRef<HTMLFormElement>(null);
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState<PlaySettingsConfigure>({
		budget: 0,
	});
	const dispatch = useAppDispatch();

	const prepareData = (data: { name: string, value: string }) => {
		setFormData((prev) => ({...prev, [data.name]: data.value}));
	};

	const submitForm = useCallback((e?: FormEvent, value: string = 'hand') => {
		e?.preventDefault();
		const {budget} = formData;

		switch (value) {
			case 'hand':
				console.log('hand');
				break;
			case 'auto':
				dispatch(fetchPostAutoConfigure({userId: 1, data: {budget}}));
				router.refresh();
				break;
			case 'last-choice':
				dispatch(fetchPostPlaySettingsPrevious({userId: 1, data: {budget}}));
				router.refresh();
				break;
		}
	}, [dispatch, formData, router]);

	const prevStep = () => {
		setStep(prev => Math.max(prev - 1, 1));
	};

	const nextStep = () => {
		const maxSteps = 4;
		setStep(prev => Math.min(prev + 1, maxSteps));
	}

	const renderSteps = () => {
		switch (step) {
			case 1:
				return <FirstStep callback={prepareData} nextStepHandler={nextStep} data={formData.budget}/>;
			case 2:
				return <SecondStep saveDataHandler={submitForm} nextStepHandler={nextStep} prevStepHandler={prevStep}/>;
			case 3:
				return <ThirdStep callback={prepareData} nextStepHandler={nextStep} prevStepHandler={prevStep}/>;
			case 4:
				return <FourthStep callback={prepareData} saveDataHandler={submitForm} prevStepHandler={prevStep} data={formData.mode ?? ''}/>;
			default:
				return null;
		}
	};

	return (
		<section className={block()}>
			<SwitchTransition mode="out-in">
				<CSSTransition key={step} timeout={500} classNames="transition" nodeRef={nodeRef}>
					<form className="form-step" ref={nodeRef} onSubmit={submitForm}>
						{renderSteps()}
					</form>
				</CSSTransition>
			</SwitchTransition>
		</section>
	);
};