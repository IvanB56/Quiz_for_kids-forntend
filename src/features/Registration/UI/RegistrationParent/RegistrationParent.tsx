'use client';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Button, Input, Text} from "@components";
import {useAppDispatch} from "@hooks";
import {formSchema, TypeRegistration} from "@/features/Registration/model/types/registration";
import {useSelector} from "react-redux";
import {
	getRegistrationScheme
} from "@/features/Registration/model/selectors/getRegistrationScheme/getRegistrationScheme";
import IMask from "imask";
import {CN, validation} from "@/lib";
import {STATUS_CODE} from "@/shared/constants/statusCode";
import {fetchVerifyCode} from "@/features/Registration/model/services/VerifyCode/fetchVerifyCode";
import {registrationAPI} from "@/features/Registration/model/services/Registration/Registration";
import {registrationActions} from "@/features/Registration";
import {toast} from "sonner";

const block = CN('registration-form');

export const RegistrationParent = () => {
	const dispatch = useAppDispatch();
	const inputPhoneRef = useRef<HTMLInputElement | null>(null);
	const formContentsRef = useRef<HTMLDivElement>(null);
	const [errors, setErrors] = useState<TypeRegistration | null>();
	const {
		name,
		phone,
		password,
		password_confirmation,
		email,
		isLoading,
		phone_verify_code
	} = useSelector(getRegistrationScheme);
	const [isShowVerifyCode, setIsShowVerifyCode] = useState(false);

	useEffect(() => {
		if (inputPhoneRef?.current) {
			IMask(inputPhoneRef?.current, {mask: '+{7}(000)000-00-00'})
		}
	}, []);

	const onSubmit = useCallback(async () => {
		const {status, errors} = validation<TypeRegistration>(formSchema, {
			phone,
			password,
			password_confirmation,
			email,
			phone_verify_code,
			name
		});
		setErrors(errors);

		if (status === STATUS_CODE.SUCCESS) {
			await dispatch(fetchVerifyCode({phone, password, password_confirmation, email, name}));
			setIsShowVerifyCode(true);
		} else {
			console.error('Валидация не прошла');
		}
	}, [dispatch, email, name, password, password_confirmation, phone, phone_verify_code]);

	useEffect(() => {
		if (formContentsRef.current && isShowVerifyCode) {
			formContentsRef.current.scrollTop = formContentsRef.current.scrollHeight;
		}
	}, [isShowVerifyCode]);

	const submitForm = useCallback(async () => {
		try {
			dispatch(registrationAPI({name, phone, password, password_confirmation, email: email || '', phone_verify_code}));
			dispatch(registrationActions.setVerifyCode(''));
		} catch (_) {
			toast("Не удалось зарегистрировать пользователя");
		}
	}, [dispatch, email, password, password_confirmation, phone, phone_verify_code, name])

	const onChangeName = useCallback((value: string) => {
		dispatch(registrationActions.setName(value));
	}, [dispatch]);

	const onChangePhone = useCallback((value: string) => {
		dispatch(registrationActions.setPhone(value));
	}, [dispatch]);

	const onChangePassword = useCallback((value: string) => {
		dispatch(registrationActions.setPassword(value));
	}, [dispatch]);

	// const onChangeEmail = useCallback((value: string) => {
	// 	dispatch(registrationActions.setEmail(value));
	// }, [dispatch]);

	const onChangePasswordConfirm = useCallback((value: string) => {
		dispatch(registrationActions.setPasswordConfirm(value));
	}, [dispatch]);

	const onChangeVerifyCode = useCallback((value: string) => {
		dispatch(registrationActions.setVerifyCode(value));
	}, [dispatch]);

	return (
		<form noValidate className={block('form')}>
			<div className={block('contents')} ref={formContentsRef}>
				<div className={block('field')}>
					<label>Имя*</label>
					<div className={'flex items-center gap-x-2'}>
						<Input
							placeholder="Введите имя"
							autoComplete={'off'}
							value={name}
							name="name"
							disabled={isLoading}
							onChange={(e) => onChangeName(e.target.value)}
						/>
						{errors?.name && (
							<Text
								data={{text: errors.name as string, tag: 'span'}}
								cn={{color: 'text-primary-red', size: 'text-body-5'}}
								className={block('error')}
							/>
						)}
					</div>
				</div>
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
				{
					isShowVerifyCode && (
						<div className={block('field')}>
							<label>Введите проверочный код*</label>
							<div className={'flex items-center gap-x-2'}>
								<Input
									type={'phone_verify_code'}
									placeholder="Введите код из смс"
									autoComplete={'off'}
									value={phone_verify_code}
									disabled={isLoading}
									name="phone_verify_code"
									onChange={(e) => onChangeVerifyCode(e.target.value)}
								/>
							</div>
						</div>
					)
				}
			</div>

			{isShowVerifyCode
				? <Button
					type="button"
					className={block('submit')}
					onClick={submitForm}
					disabled={isLoading || !isShowVerifyCode || !phone_verify_code}
				>
					Зарегистрироваться
				</Button>
				: <Button
					type="button"
					className={block('submit')}
					onClick={onSubmit}
					disabled={isLoading}
				>
					Подтвердить номер телефона
				</Button>
			}
		</form>
	);
};