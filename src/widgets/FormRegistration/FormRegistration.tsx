'use client';
import React, { useEffect, useState } from 'react';
import { classes } from './FormRegistration.cn';
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
import { formSchema, TypeRegistration } from '@/features/auth/schemas/registration';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';

export const FormRegistration = () => {
	const styles = classes();

	const form = useForm<TypeRegistration>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			email: '',
			phone: '',
			password: '',
			passwordRepeat: '',
		},
	});
	const [errors, setErrors] = useState<FieldErrors | null>(null);

	function onSubmit(values: TypeRegistration) {
		console.log(values);
		fetch('/api/users', {
			method: 'POST',
			body: JSON.stringify(values),
		}).then(r => console.log(r));
	}


	useEffect(() => {
		if (form?.formState?.errors) {
			setErrors(form.formState.errors!);
		}
	}, [form.formState.errors]);

	return (
		<div className={styles.block}>
			<Heading
				data={{ text: 'Регистрация', tag: 'h2' }}
				cn={{ color: 'text-primary-blue', margin: 'mb-[42px]' }}
				className={'text-center'}
			/>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} noValidate className={'space-y-4 w-[470px] flex flex-col'}>
					<FormField
						control={form.control}
						name="username"
						render={({ field }) => (<FormItem>
							<FormLabel>Имя</FormLabel>
							<div className={'flex items-center gap-x-2'}>
								<FormControl>
									<Input placeholder="Введите имя" {...field} autoComplete={'off'} />
								</FormControl>
								{errors && errors.username && (
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
						name="phone"
						render={({ field }) => (<FormItem>
								<FormLabel>Телефон</FormLabel>
								<div className={'flex items-center gap-x-2'}>
									<FormControl>
										<Input placeholder="Введите телефон" {...field} autoComplete={'off'} />
									</FormControl>
									{errors && errors.phone && (
										<Popover>
											<PopoverTrigger><TriangleAlert className={'text-primary-red'} /></PopoverTrigger>
											<PopoverContent><FormMessage /></PopoverContent>
										</Popover>
									)}
								</div>
							</FormItem>
						)}
					/>
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
					<FormField
						control={form.control}
						name="passwordRepeat"
						render={({ field }) => (<FormItem>
							<FormLabel>Повторите пароль</FormLabel>
							<div className={'flex items-center gap-x-2'}>
								<FormControl>
									<Input type={'password'} placeholder="Повторите пароль" {...field} autoComplete={'off'} />
								</FormControl>
								{errors && errors.passwordRepeat && (
									<Popover>
										<PopoverTrigger><TriangleAlert className={'text-primary-red'} /></PopoverTrigger>
										<PopoverContent><FormMessage /></PopoverContent>
									</Popover>
								)}
							</div>
						</FormItem>)}
					/>
					<div className={'flex items-center justify-center gap-x-1'}>
						<Text data={{ text: 'Есть аккаунт? ', tag: 'span' }} cn={{ size: 'text-body-2' }} />
						<Button asChild variant={'link'}>
							<Link href={'/login'}>
								<Text data={{ text: 'Войти', tag: 'span' }} cn={{ size: 'text-body-2' }} />
							</Link>
						</Button>
					</div>
					<Button type="submit" className={'self-center'}>Создать аккаунт</Button>
				</form>
			</Form>
		</div>
	);
};
