import React, {useCallback, useEffect, useState} from 'react';
import {Button, Input, Text} from "@components";
import {CN, validation} from "@/lib";
import {useAppDispatch} from "@hooks";
import {STATUS_CODE} from "@/shared/constants/statusCode";
import {useSelector} from "react-redux";
import {formSchema} from "../../model/types/registration";
import {TypeStudentRegistration} from "../../model/types/studentRegistrationSchema";
import {studentRegistrationActions} from "../../model/slice/registrationStudentSlice";
import {
	getStudentRegistrationScheme
} from '../../model/selectors/getStudentRegistrationScheme/getStudentRegistrationScheme';
import {fetchCreateStudent} from "@/entities/student";
import {useSearchParams} from 'next/navigation';

const block = CN('registration-form');

export const RegistrationStudent = () => {
	const dispatch = useAppDispatch();
	const [errors, setErrors] = useState<TypeStudentRegistration | null>();
	const {login, password, password_confirmation, token, isLoading} = useSelector(getStudentRegistrationScheme);
	const searchParams = useSearchParams();

	useEffect(() => {
		dispatch(studentRegistrationActions.setToken(searchParams?.get('token') || ''));
	}, [dispatch, searchParams]);

	const onChangeLogin = useCallback((value: string) => {
		dispatch(studentRegistrationActions.setLogin(value));
	}, [dispatch]);

	const onChangePassword = useCallback((value: string) => {
		dispatch(studentRegistrationActions.setPassword(value));
	}, [dispatch]);

	const onChangePasswordConfirm = useCallback((value: string) => {
		dispatch(studentRegistrationActions.setPasswordConfirm(value));
	}, [dispatch]);

	const onSubmit = useCallback(async () => {
		const {status, errors} = validation<TypeStudentRegistration>(formSchema, {login, password, password_confirmation});
		setErrors(errors);

		if (status === STATUS_CODE.SUCCESS) {
			await dispatch(fetchCreateStudent({password, password_confirmation, login, token}));
		} else {
			console.error('Валидация не прошла');
		}
	}, [dispatch, login, password, password_confirmation, token]);

	return (
		<div>
			<form noValidate className={block('form')}>
				<input type="hidden" name="token" value={token} />
				<div className={block('field')}>
					<label>Логин*</label>
					<div className={'flex items-center gap-x-2'}>
						<Input
							placeholder="Введите логин"
							autoComplete={'off'}
							value={login}
							name="login"
							disabled={isLoading}
							onChange={(e) => onChangeLogin(e.target.value)}
						/>
						{errors?.login && (
							<Text
								data={{text: errors.login as string, tag: 'span'}}
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
							placeholder="Введите пароль"
							autoComplete={'off'}
							value={password}
							name="password"
							disabled={isLoading}
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

				<Button
					type="button"
					className={block('submit')}
					onClick={onSubmit}
					disabled={isLoading}
				>
					Зарегистрироваться
				</Button>
			</form>
		</div>
	);
};