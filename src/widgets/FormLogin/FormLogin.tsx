'use client';
import React, {useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import {FieldErrors, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {classes} from './FormLogin.cn';
import {Button, Form, FormControl, FormField, FormItem, FormLabel, Input, Text,} from '@components';
import {TypeLogin} from '@/features/auth/schemas';
import {formSchema} from '@/features/auth/schemas/login';
import {isLoginError, login} from '@/shared/api';
import Link from 'next/link';
import './FormLogin.scss';
import {useClassName} from '@hooks';
import {toast} from "sonner";

export const FormLogin = () => {
	const styles = classes();
	const router = useRouter();

	const form = useForm<TypeLogin>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});
	const [errors, setErrors] = useState<FieldErrors | null>(null);

	async function onSubmit(values: TypeLogin) {
		const data = await login(values);

		if (isLoginError(data)) {
			toast("Ошибка авторизации", {
				description: data.message
			})
		} else {
			router.push('/profile');}
	}

	useEffect(() => {
		if (form?.formState?.errors) {
			setErrors(form.formState.errors!);
		}
	}, [form.formState.errors]);

	return (
		<div className={styles.block}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} noValidate className={styles.elementForm}>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className={styles.elementField}>
								<FormLabel>Email</FormLabel>
								<div className={'flex items-center gap-x-2'}>
									<FormControl>
										<Input type={'email'} placeholder="Введите email" {...field} autoComplete={'off'} disabled={!!form?.formState?.isSubmitting} />
									</FormControl>
									{errors?.email?.message && (
										<Text
											data={{text: errors.email.message as string, tag: 'span'}}
											cn={{color: 'text-primary-red', size: 'text-body-5'}}
											className={styles.elementError}
										/>
									)}
								</div>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem className={styles.elementField}>
								<FormLabel>Пароль</FormLabel>
								<div className={'flex items-center gap-x-2'}>
									<FormControl>
										<Input type={'password'} placeholder="Введите пароль" {...field} autoComplete={'off'} disabled={!!form?.formState?.isSubmitting} />
									</FormControl>
									{errors?.password?.message && (
										<Text
											data={{text: errors.password.message as string, tag: 'span'}}
											cn={{color: 'text-primary-red', size: 'text-body-5'}}
											className={styles.elementError}
										/>
									)}
								</div>
							</FormItem>
						)}
					/>
					<div className={useClassName(styles.elementRegister, 'flex items-center justify-center gap-x-1')}>
						<Text data={{ text: 'Нет аккаунта? ', tag: 'span' }} cn={{ size: 'text-body-2' }} />
						<Button asChild variant={'link'}>
							<Link href={'/registration'}>
								<Text data={{ text: 'Создать', tag: 'span' }} cn={{ size: 'text-body-2' }} />
							</Link>
						</Button>
					</div>
					<Button type="submit" className={styles.elementSubmit}>
						{form.formState.isSubmitting ? 'Вход...' : 'Войти'}
					</Button>
				</form>
			</Form>
		</div>
	);
};
