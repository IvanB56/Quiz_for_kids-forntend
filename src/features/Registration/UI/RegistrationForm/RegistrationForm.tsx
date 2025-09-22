import React, {useCallback, useEffect, useRef, useState} from 'react';
import IMask from "imask";
import {toast} from "sonner";
import {useRouter} from "next/navigation";
import {Button, Input, Text} from "@components";
import {CN} from '@lib/ClassBem';
import {useAppDispatch} from "@hooks";
import {formSchema, TypeRegistration} from "../../model/types/registration";
import {registrationActions} from "../../model/slice/registrationSlice";
import {validation} from "@/lib";
import {STATUS_CODE} from "@/shared/constants/statusCode";
import {useSelector} from "react-redux";
import {getRegistrationScheme} from "../../model/selectors/getRegistrationScheme/getRegistrationScheme";
import {registrationAPI} from "@/features/Registration/model/services/Registration/Registration";

import './RegistrationForm.scss';

const block = CN('registration-form');

export const RegistrationForm = () => {
	const dispatch = useAppDispatch();
	const inputPhoneRef = useRef<HTMLInputElement | null>(null);
	const [errors, setErrors] = useState<TypeRegistration | null>();
	const {phone, password, password_confirmation, email, isLoading} = useSelector(getRegistrationScheme);
	const router = useRouter();

	useEffect(() => {
		if (inputPhoneRef?.current) {
			IMask(inputPhoneRef?.current, {mask: '+{7}(000)000-00-00'})
		}
	}, []);

	const onSubmit = useCallback(async () => {
		const {status, errors} = validation<TypeRegistration>(formSchema, {phone, password, password_confirmation, email});
		setErrors(errors);

		if (status === STATUS_CODE.SUCCESS) {
			const result = await dispatch(registrationAPI({phone, password, password_confirmation, email}));

			if (result.meta.requestStatus !== "rejected") {
				router.push('/profile/rules');
			} else {
				toast("Не удалось зарегистрировать пользователя")
			}
		}
	}, [dispatch, email, password, password_confirmation, phone, router])

	const onChangePhone = useCallback((value: string) => {
		dispatch(registrationActions.setPhone(value));
	}, [dispatch]);

	const onChangePassword = useCallback((value: string) => {
		dispatch(registrationActions.setPassword(value));
	}, [dispatch]);

	const onChangeEmail = useCallback((value: string) => {
		dispatch(registrationActions.setEmail(value));
	}, [dispatch]);

	const onChangePasswordConfirm = useCallback((value: string) => {
		dispatch(registrationActions.setPasswordConfirm(value));
	}, [dispatch]);

	return (
		<div className={block()}>
			<form noValidate className={block('form')}>
				<div className={block('field')}>
					<label>Телефон*</label>
					<div className={'flex items-center gap-x-2'}>
						<Input
							placeholder="Введите телефон"
							autoComplete={'off'} ref={inputPhoneRef}
							value={phone}
							name="phone"
							disabled={isLoading}
							onChange={(e) => onChangePhone(e.target.value)}
						/>
						{errors?.phone && (
							<Text
								data={{text: errors.phone as string, tag: 'span'}}
								cn={{color: 'text-primary-red', size: 'text-body-5'}}
								className={block('error')}
							/>
						)}
					</div>
				</div>
				<div className={block('field')}>
					<label>Email</label>
					<div className={'flex items-center gap-x-2'}>
						<Input
							type={'email'}
							placeholder="Введите email"
							autoComplete={'off'}
							value={email}
							name="email"
							disabled={isLoading}
							onChange={(e) => onChangeEmail(e.target.value)}
						/>
						{errors?.email && (
							<Text
								data={{text: errors.email as string, tag: 'span'}}
								cn={{color: 'text-primary-red', size: 'text-body-5'}}
								className={block('error')}
							/>
						)}
					</div>
				</div>
				<div className={block('field')}>
					<label>Пароль*</label>
					<div className={'flex items-center gap-x-2'}>
						<Input
							type={'password'}
							placeholder="Введите пароль"
							autoComplete={'off'}
							value={password}
							disabled={isLoading}
							name="password"
							onChange={(e) => onChangePassword(e.target.value)}
						/>
						{errors?.password && (
							<Text
								data={{text: errors.password as string, tag: 'span'}}
								cn={{color: 'text-primary-red', size: 'text-body-5'}}
								className={block('error')}
							/>
						)}
					</div>
				</div>
				<div className={block('field')}>
					<label>Повторите пароль*</label>
					<div className={'flex items-center gap-x-2'}>
							<Input
								type={'password'}
								placeholder="Повторите пароль"
								autoComplete={'off'}
								value={password_confirmation}
								disabled={isLoading}
								name="password_confirmation"
								onChange={(e) => onChangePasswordConfirm(e.target.value)}
							/>
						{errors?.password_confirmation && (
							<Text
								data={{text: errors.password_confirmation as string, tag: 'span'}}
								cn={{color: 'text-primary-red', size: 'text-body-5'}}
								className={block('error')}
							/>
						)}
					</div>
				</div>
				<Button type="button" className={block('submit')} onClick={onSubmit} disabled={isLoading}> Войти </Button>
			</form>
		</div>
	);
};