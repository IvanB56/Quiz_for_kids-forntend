'use client';
import React, {useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import {FieldErrors, useForm} from 'react-hook-form';
import {TriangleAlert} from 'lucide-react';
import {zodResolver} from '@hookform/resolvers/zod';
import {classes} from './FormLogin.cn';
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
import {TypeLogin} from '@/features/auth/schemas';
import {formSchema} from '@/features/auth/schemas/login';
import {login} from '@/shared/api/auth/actions';
import Link from 'next/link';
import './FormLogin.scss';
import {useClassName} from '@hooks';

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
		await login(values);
		router.push('/profile');
	}

	useEffect(() => {
		if (form?.formState?.errors) {
			setErrors(form.formState.errors!);
		}
	}, [form.formState.errors]);

	return (
		<div className={styles.block}>
			<Heading
				data={{ text: 'Авторизация', tag: 'h1' }}
				cn={{ color: 'text-primary-blue', margin: 'mb-[42px]', size: 'h2' }}
				className={'text-center'}
			/>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} noValidate className={styles.elementForm}>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<div className={'flex items-center gap-x-2'}>
									<FormControl>
										<Input type={'email'} placeholder="Введите email" {...field} autoComplete={'off'} disabled={!!form?.formState?.isSubmitting} />
									</FormControl>
									{errors && errors.email && (
										<Popover>
											<PopoverTrigger>
												<TriangleAlert className={'text-primary-red'} />
											</PopoverTrigger>
											<PopoverContent>
												<FormMessage />
											</PopoverContent>
										</Popover>
									)}
								</div>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Пароль</FormLabel>
								<div className={'flex items-center gap-x-2'}>
									<FormControl>
										<Input type={'password'} placeholder="Введите пароль" {...field} autoComplete={'off'} disabled={!!form?.formState?.isSubmitting} />
									</FormControl>
									{errors && errors.password && (
										<Popover>
											<PopoverTrigger>
												<TriangleAlert className={'text-primary-red'} />
											</PopoverTrigger>
											<PopoverContent>
												<FormMessage />
											</PopoverContent>
										</Popover>
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
