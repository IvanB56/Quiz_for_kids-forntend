'use client';
import React, {useEffect, useState} from 'react';
import {classes} from "@/widgets/SettingsForms/SettingsForm.cn";
import {FieldErrors, useForm} from "react-hook-form";
import {formSchema, TypeRegistration} from "@/features/auth/schemas/registration";
import {zodResolver} from "@hookform/resolvers/zod";
import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Popover,
	PopoverContent,
	PopoverTrigger
} from "@components";
import {TriangleAlert} from "lucide-react";
import {useClassName} from "@hooks";
import {register} from "@/shared/api/auth/actions";

export const FormChild = () => {
	const styles = classes();

	const form = useForm<TypeRegistration>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			phone: '',
			email: '',
			password: '',
			password_confirmation: '',
		},
	});
	const [errors, setErrors] = useState<FieldErrors | null>(null);

	async function onSubmit(values: TypeRegistration) {
		await register(values, 'api/student');
	}

	useEffect(() => {
		if (form?.formState?.errors) {
			setErrors(form.formState.errors!);
		}
	}, [form.formState.errors]);

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} noValidate className={useClassName(styles.elementForm)}>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem className={styles.elementField}>
							<FormLabel className={styles.elementLabel}>Имя</FormLabel>
							<div className={'flex items-center gap-x-2 w-1/2 max-md:w-full'}>
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
						<FormItem className={styles.elementField}>
							<FormLabel className={styles.elementLabel}>Телефон</FormLabel>
							<div className={'flex items-center gap-x-2 w-1/2 max-md:w-full'}>
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
						<FormItem className={styles.elementField}>
							<FormLabel className={styles.elementLabel}>Email</FormLabel>
							<div className={'flex items-center gap-x-2 w-1/2 max-md:w-full'}>
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
						<FormItem className={styles.elementField}>
							<FormLabel className={styles.elementLabel}>Пароль</FormLabel>
							<div className={'flex items-center gap-x-2 w-1/2 max-md:w-full'}>
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
						<FormItem className={styles.elementField}>
							<FormLabel className={styles.elementLabel}>Повторите пароль</FormLabel>
							<div className={'flex items-center gap-x-2 w-1/2 max-md:w-full'}>
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
				<FormItem className={styles.elementField}>
					<Button type="submit" className={styles.elementSubmit}>
						{form.formState.isSubmitting ? 'Отправка данных' : 'Сохранить'}
					</Button>
				</FormItem>
			</form>
		</Form>
	);
};