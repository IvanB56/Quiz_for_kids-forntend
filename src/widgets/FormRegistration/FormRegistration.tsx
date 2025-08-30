'use client';
import IMask from "imask";
import React, {useEffect, useRef, useState} from 'react';
import {useRouter} from "next/navigation";
import {FieldErrors, useForm} from 'react-hook-form';
import {useClassName} from '@hooks';
import {zodResolver} from '@hookform/resolvers/zod';
import {register} from '@/shared/api';
import {classes} from './FormRegistration.cn';
import {formSchema, TypeRegistration} from '@/features/auth/schemas/registration';
import {Button, Form, FormControl, FormField, FormItem, FormLabel, Heading, Input, Text} from '@components';
import './FormRegistration.scss';
import {LoaderCircle} from "lucide-react";

export const FormRegistration = () => {
	const styles = classes();
	const router = useRouter();

	const form = useForm<TypeRegistration>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			phone: '',
			password: '',
			password_confirmation: '',
		},
	});
	const [errors, setErrors] = useState<FieldErrors | null>(null);
	const inputPhoneRef = useRef(null);

	async function onSubmit(values: TypeRegistration) {
		await register(values);
		router.push('settings/profile');
	}

	useEffect(() => {
		if (form?.formState?.errors) {
			setErrors(form.formState.errors!);
		}
	}, [form.formState.errors]);

	useEffect(() => {
		if (inputPhoneRef?.current) {
			IMask(inputPhoneRef?.current, {mask: '+{7}(000)000-00-00'})
		}
	}, []);

	return (
		<div className={styles.block}>
			<Heading
				data={{text: 'Регистрация', tag: 'h3'}}
				cn={{color: 'text-primary-black', margin: 'mb-[28px]', size: 'h3'}}
				className={'text-center'}
			/>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} noValidate className={useClassName(styles.elementForm)}>
					<FormField
						control={form.control}
						name="phone"
						render={({field}) => (
							<FormItem className={styles.elementField}>
								<FormLabel>Телефон*</FormLabel>
								<div className={'flex items-center gap-x-2'}>
									<FormControl>
										<Input placeholder="Введите телефон" {...field} autoComplete={'off'} ref={inputPhoneRef}
										       disabled={!!form?.formState?.isSubmitting}/>
									</FormControl>
									{errors?.phone?.message && (
										<Text
											data={{text: errors.phone.message as string, tag: 'span'}}
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
						name="email"
						render={({field}) => (
							<FormItem className={styles.elementField}>
								<FormLabel>Email</FormLabel>
								<div className={'flex items-center gap-x-2'}>
									<FormControl>
										<Input type={'email'} placeholder="Введите email" {...field} autoComplete={'off'}
										       disabled={!!form?.formState?.isSubmitting}/>
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
						render={({field}) => (
							<FormItem className={styles.elementField}>
								<FormLabel>Пароль*</FormLabel>
								<div className={'flex items-center gap-x-2'}>
									<FormControl>
										<Input type={'password'} placeholder="Введите пароль" {...field} autoComplete={'off'}
										       disabled={!!form?.formState?.isSubmitting}/>
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
					<FormField
						control={form.control}
						name="password_confirmation"
						render={({field}) => (
							<FormItem className={styles.elementField}>
								<FormLabel>Повторите пароль*</FormLabel>
								<div className={'flex items-center gap-x-2'}>
									<FormControl>
										<Input type={'password'} placeholder="Повторите пароль" {...field} autoComplete={'off'}
										       disabled={!!form?.formState?.isSubmitting}/>
									</FormControl>
									{errors?.password_confirmation?.message && (
										<Text
											data={{text: errors.password_confirmation.message as string, tag: 'span'}}
											cn={{color: 'text-primary-red', size: 'text-body-5'}}
											className={styles.elementError}
										/>
									)}
								</div>
							</FormItem>
						)}
					/>
					<Button type="submit" className={styles.elementSubmit}>
						{form.formState.isSubmitting ? <LoaderCircle className="loader " size={28} /> : 'Создать аккаунт'}
					</Button>
				</form>
			</Form>
		</div>
	);
};
