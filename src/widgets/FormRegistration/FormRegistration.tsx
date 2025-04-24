'use client';
import React, {useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import {FieldErrors, useForm} from 'react-hook-form';
import {classes} from './FormRegistration.cn';
import Link from 'next/link';
import {formSchema, TypeRegistration} from '@/features/auth/schemas/registration';
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
import {useClassName} from '@hooks';
import {zodResolver} from '@hookform/resolvers/zod';
import {TriangleAlert} from 'lucide-react';
import {register} from '@/shared/api/auth/actions';
import './FormRegistration.scss';

interface IFormRegistration {
	redirect?: string;
}

export const FormRegistration = (props: IFormRegistration) => {
	const styles = classes();
	const {redirect} = props;
	const router = useRouter();

	const form = useForm<TypeRegistration>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			password: '',
			password_confirmation: '',
		},
	});
	const [errors, setErrors] = useState<FieldErrors | null>(null);

	async function onSubmit(values: TypeRegistration) {
		await register(values);
		if (redirect) {
			router.push(redirect);
		}
	}

	useEffect(() => {
		if (form?.formState?.errors) {
			setErrors(form.formState.errors!);
		}
	}, [form.formState.errors]);

	return (
		<section className={styles.block}>
			<Heading
				data={{ text: 'Регистрация', tag: 'h1' }}
				cn={{ color: 'text-primary-blue', margin: 'mb-[42px]', size: 'h2' }}
				className={'text-center'}
			/>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} noValidate className={useClassName(styles.elementForm)}>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Имя</FormLabel>
								<div className={'flex items-center gap-x-2'}>
									<FormControl>
										<Input placeholder="Введите имя" {...field} autoComplete={'off'} disabled={!!form?.formState?.isSubmitting} />
									</FormControl>
									{errors && errors.name && (
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
						name="phone"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Телефон</FormLabel>
								<div className={'flex items-center gap-x-2'}>
									<FormControl>
										<Input placeholder="Введите телефон" {...field} autoComplete={'off'} disabled={!!form?.formState?.isSubmitting} />
									</FormControl>
									{errors && errors.phone && (
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
					<FormField
						control={form.control}
						name="password_confirmation"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Повторите пароль</FormLabel>
								<div className={'flex items-center gap-x-2'}>
									<FormControl>
										<Input type={'password'} placeholder="Повторите пароль" {...field} autoComplete={'off'} disabled={!!form?.formState?.isSubmitting} />
									</FormControl>
									{errors && errors.password_confirmation && (
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
					<div className={useClassName(styles.elementLogin, 'flex items-center justify-center gap-x-1')}>
						<Text data={{ text: 'Есть аккаунт? ', tag: 'span' }} cn={{ size: 'text-body-2' }} />
						<Button asChild variant={'link'}>
							<Link href={'/login'}>
								<Text data={{ text: 'Войти', tag: 'span' }} cn={{ size: 'text-body-2' }} />
							</Link>
						</Button>
					</div>
					<Button type="submit" className={styles.elementSubmit}>
						Создать аккаунт
					</Button>
				</form>
			</Form>
		</section>
	);
};
