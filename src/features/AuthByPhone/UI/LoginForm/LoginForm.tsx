'use client';
import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import IMask, {InputMask} from "imask";
import {CN, validation} from "@/lib";
import {STATUS_CODE} from "@/shared/constants/statusCode";
import {Button, Input, Text} from "@components";
import {useSelector} from "react-redux";
import {useAppDispatch} from "@hooks";
import {loginActions} from "../../model/slice/loginSlice";
import {getLoginScheme} from "../../model/selectors/getLoginScheme/getLoginScheme";
import {formSchema, TypeLogin} from '../../model/types/loginSchema';
import {loginByPhone} from "../../model/services/loginByPhone/loginByPhone";
import './LoginForm.scss';
import {toast} from "sonner";

const block = CN('form-login');

export const LoginForm = memo(() => {
	const dispatch = useAppDispatch();
	const inputPhoneRef = useRef<HTMLInputElement | null>(null);
	const {phone, password, isLoading} = useSelector(getLoginScheme);
	const [errors, setErrors] = useState<TypeLogin | null>();
	const maskRef = useRef<InputMask | null>(null);

	const {error} = useSelector(getLoginScheme);

	useEffect(() => {
		if (inputPhoneRef?.current) {
			// IMask(inputPhoneRef?.current, {mask: '+{7}(000)000-00-00', lazy: false})
			maskRef.current = IMask(inputPhoneRef?.current, {mask: '+{7}(000)000-00-00'});
		}
	}, []);

	useEffect(() => {
		if (error) {
			const {status} = error;
			const title = status === 'invalid'? 'Не корректные данные' : 'Ошибка сервера';

			console.log(error)

			toast.error(title, {
				description: error.message,
				duration: 5000,
				position: 'top-center'
			});
		}
	}, [error]);

	const onSubmit = useCallback(async () => {
		const {status, errors} = validation<TypeLogin>(formSchema, {phone, password});
		setErrors(errors);

		if (status === STATUS_CODE.SUCCESS) {
			await dispatch(loginByPhone({phone, password}));
		}
	}, [dispatch, phone, password]);

	const onChangePhone = useCallback((value: string) => {
		maskRef?.current?.updateValue();
		dispatch(loginActions.setUserPhone(value));
	}, [dispatch]);

	const onChangePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value));
	}, [dispatch]);

	return (
		<div className={block()}>
			<form noValidate className={block('form')}>
				<div className={block('field')}>
					<label>Телефон*</label>
					<div className={'flex items-center gap-x-2'}>
						<Input
							type={"tel"}
							placeholder="Введите телефон"
							autoComplete={'off'}
							ref={inputPhoneRef}
							onChange={(e) => onChangePhone(e.target.value)}
							value={phone}
							disabled={isLoading}
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
							onChange={(e) => onChangePassword(e.target.value)}
							value={password}
							disabled={isLoading}
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
				<Button type="button" className={block('submit')} onClick={onSubmit} disabled={isLoading}> Войти </Button>
			</form>
		</div>
	);
});

LoginForm.displayName = 'LoginForm';