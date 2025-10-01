// 'use client';
// import {CSSTransition, SwitchTransition} from 'react-transition-group';
// import {useRouter} from 'next/router';
// import {classes} from './FormProfile.cn';
// import {useRef, useState} from 'react';
// import {autoConfigure, previousConfigure} from '@/shared/api';
// import {ChildsafeFirstStep, ChildSafeSecondStep, FirstStep, FourthStep, SecondStep, ThirdStep} from './components';
// import {PartialNewFormDataType} from './types';

// import './styles/FormProfile.scss';

export type FormVariant = 'default' | 'new';
export interface FormProfileProps {
	variant?: FormVariant;
}

export const FormProfile = ({variant = 'default'}: FormProfileProps) => {
// 	const [step, setStep] = useState(1);
//
// 	// Состояние для оригинальной формы (4 шага)
// 	const [formData, setFormData] = useState<FormDataType>({
// 		budget: 0,
// 	});
//
// 	// Состояние для новой формы (2 шага)
// 	const [newFormData, setNewFormData] = useState<PartialNewFormDataType>({
// 		title: '',
// 		description: ''
// 	});
//
// 	const nodeRef = useRef<HTMLFormElement>(null);
// 	// const dispatch = useAppDispatch();
// 	// const {data: user} = useSelector(state => state.user);
// 	const router = useRouter();
// 	const styles = classes();
//
// 	const prepareData = (data: { name: string, value: string }) => {
// 		if (variant === 'new') {
// 			setNewFormData((prev) => ({...prev, [data.name]: data.value}));
// 		} else {
// 			setFormData((prev) => ({...prev, [data.name]: data.value}));
// 		}
// 	};
//
// 	const submitForm = (e?: FormEvent, value: string = 'hand') => {
// 		e?.preventDefault();
// 		const {budget} = formData;
// 		switch (value) {
// 			case 'hand':
// 				console.log('hand');
// 				break;
// 			case 'auto':
// 				autoConfigure({budget}, String(user.user_id)).then(() => router.refresh());
// 				break;
// 			case 'last-choice':
// 				previousConfigure({budget}, String(user.user_id)).then(() => router.refresh());
// 				break;
// 		}
// 	}
//
// 		const prevStep = () => {
// 			setStep(prev => Math.max(prev - 1, 1));
// 		};
//
// 		const nextStep = () => {
// 			const maxSteps = variant === 'new' ? 2 : 4;
// 			setStep(prev => Math.min(prev + 1, maxSteps));
// 		}
//
// 		// useEffect(() => {
// 		// 	dispatch(fetchUsers());
// 		// }, [dispatch]);
//
// 		const renderSteps = () => {
// 			if (variant === 'new') {
// 				// Новый вариант с 2 шагами
// 				switch (step) {
// 					case 1:
// 						return <ChildsafeFirstStep
// 							callback={prepareData}
// 							nextStepHandler={nextStep}
// 							data={newFormData.title || ''}
// 						/>;
// 					case 2:
// 						return <ChildSafeSecondStep
// 							callback={prepareData}
// 							saveDataHandler={submitForm}
// 							prevStepHandler={prevStep}
// 							data={newFormData.description || ''}
// 						/>;
// 					default:
// 						return null;
// 				}
// 			} else {
// 				// Оригинальный вариант с 4 шагами
// 				switch (step) {
// 					case 1:
// 						return <FirstStep callback={prepareData} nextStepHandler={nextStep} data={formData.budget}/>;
// 					case 2:
// 						return <SecondStep saveDataHandler={submitForm} nextStepHandler={nextStep} prevStepHandler={prevStep}/>;
// 					case 3:
// 						return <ThirdStep callback={prepareData} nextStepHandler={nextStep} prevStepHandler={prevStep}/>;
// 					case 4:
// 						return <FourthStep callback={prepareData} saveDataHandler={submitForm} prevStepHandler={prevStep}
// 						                   data={formData.mode ?? ''}/>;
// 					default:
// 						return null;
// 				}
// 			}
// 		};
//
//
	return (
		<>{variant}</>
// 		<div className={styles.block}>
// 			<SwitchTransition mode="out-in">
// 				<CSSTransition
// 					key={step}
// 					timeout={500}
// 					classNames="transition"
// 					nodeRef={nodeRef}
// 				>
// 					<form className="form-step" ref={nodeRef} onSubmit={submitForm}>
// 						{renderSteps()}
// 					</form>
// 				</CSSTransition>
// 			</SwitchTransition>
// 		</div>
	);
};
