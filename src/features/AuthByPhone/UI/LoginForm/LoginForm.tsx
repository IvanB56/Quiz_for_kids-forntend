'use client';
import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import IMask from "imask";
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

	useEffect(() => {
		if (inputPhoneRef?.current) {
			IMask(inputPhoneRef?.current, {mask: '+{7}(000)000-00-00'})
		}
	}, []);

	const onSubmit = useCallback(async () => {
		const {status, errors} = validation<TypeLogin>(formSchema, {phone, password});
		setErrors(errors);

		if (status === STATUS_CODE.SUCCESS) {
			try {
				await dispatch(loginByPhone({phone, password}));
			} catch (_) {
				toast("Не удалось получить данные от сервера", {
					description: `Пользователь с телефоном ${phone} не найден`
				});
			}
		}
	}, [dispatch, phone, password])

	const onChangePhone = useCallback((value: string) => {
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