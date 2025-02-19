'use client';
import React, { useEffect, useState } from 'react';
import { classes } from './FormLogin.cn';
import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Heading,
	Input,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Text,
} from '@components';
import { FieldErrors, useForm } from 'react-hook-form';
import { TriangleAlert } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { TypeLogin } from '@/features/auth/schemas';
import { formSchema } from '@/features/auth/schemas/login';
import { signIn } from 'next-auth/react';

export const FormLogin = () => {
	const styles = classes();

	const form = useForm<TypeLogin>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});
	const [errors, setErrors] = useState<FieldErrors | null>(null);

	async function onSubmit(values: TypeLogin) {
		try {
			const resp = await signIn('credentials', {
				...values,
				redirect: false,
			});

			console.log(resp);

			if (!resp?.ok) {
				throw Error();
			}
		} catch (err) {
			console.log('form login error: ', err);
		}
	}


	useEffect(() => {
		if (form?.formState?.errors) {
			setErrors(form.formState.errors!);
		}
	}, [form.formState.errors]);

	return (
		<div className={styles.block}>
			<Heading
				data={{ text: 'Авторизация', tag: 'h2' }}
				cn={{ color: 'text-primary-blue', margin: 'mb-[42px]' }}
				className={'text-center'}
			/>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} noValidate className={'space-y-4 w-[470px] flex flex-col'}>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (<FormItem>
							<FormLabel>Email</FormLabel>
							<div className={'flex items-center gap-x-2'}>
								<FormControl>
									<Input type={'email'} placeholder="Введите email" {...field} autoComplete={'off'} />
								</FormControl>
								{errors && errors.email && (
									<Popover>
										<PopoverTrigger><TriangleAlert className={'text-primary-red'} /></PopoverTrigger>
										<PopoverContent><FormMessage /></PopoverContent>
									</Popover>
								)}
							</div>
						</FormItem>)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (<FormItem>
							<FormLabel>Пароль</FormLabel>
							<div className={'flex items-center gap-x-2'}>
								<FormControl>
									<Input type={'password'} placeholder="Введите пароль" {...field} autoComplete={'off'} />
								</FormControl>
								{errors && errors.password && (
									<Popover>
										<PopoverTrigger><TriangleAlert className={'text-primary-red'} /></PopoverTrigger>
										<PopoverContent><FormMessage /></PopoverContent>
									</Popover>
								)}
							</div>
						</FormItem>)}
					/>
					<div className={'flex items-center justify-center gap-x-1'}>
						<Text data={{ text: 'Нет аккаунта? ', tag: 'span' }} cn={{ size: 'text-body-2' }} />
						<Button asChild variant={'link'}>
							<Link href={'/registration'}>
								<Text data={{ text: 'Создать', tag: 'span' }} cn={{ size: 'text-body-2' }} />
							</Link>
						</Button>
					</div>
					<Button type="submit" className={'self-center'}>
						{form.formState.isSubmitting ? 'Вход...' : 'Войти'}
					</Button>
				</form>
			</Form>
		</div>
	);
};
