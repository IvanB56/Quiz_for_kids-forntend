'use client';
import React, {useEffect, useState} from 'react';
import {FieldErrors, useForm} from "react-hook-form";
import {TriangleAlert} from "lucide-react";
import {zodResolver} from "@hookform/resolvers/zod";
import {formSchema, TypeProfile} from "@/features/auth/schemas/profile";
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
import {classes} from './FormProfile.cn';
import './FormProfile.scss';

export const FormProfile = () => {
	const styles = classes();

	const form = useForm<TypeProfile>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			surname: '',
			name: '',
			patronymic: '',
			email: '',
			birth: '',
			region: ''
		},
	});
	const [errors, setErrors] = useState<FieldErrors | null>(null);

	async function onSubmit(values: TypeProfile) {
		console.log(values);
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
						name="surname"
						render={({ field }) => (
							<FormItem className={styles.elementField}>
								<FormLabel className={styles.elementLabel}>Фамилия</FormLabel>
								<div className={'flex items-center gap-x-2'}>
									<FormControl>
										<Input type={'text'} placeholder="" {...field} autoComplete={'off'} />
									</FormControl>
									{errors && errors.surname && (
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
						name="name"
						render={({ field }) => (
							<FormItem className={styles.elementField}>
								<FormLabel className={styles.elementLabel}>Имя</FormLabel>
								<div className={'flex items-center gap-x-2'}>
									<FormControl>
										<Input type={'text'} placeholder="" {...field} autoComplete={'off'} />
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
						name="patronymic"
						render={({ field }) => (
							<FormItem className={styles.elementField}>
								<FormLabel className={styles.elementLabel}>Отчество</FormLabel>
								<div className={'flex items-center gap-x-2'}>
									<FormControl>
										<Input type={'text'} placeholder="" {...field} autoComplete={'off'} />
									</FormControl>
									{errors && errors.patronymic && (
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
						name="birth"
						render={({ field }) => (
							<FormItem className={styles.elementField}>
								<FormLabel className={styles.elementLabel}>Дата рождения</FormLabel>
								<div className={'flex items-center gap-x-2'}>
									<FormControl>
										<Input type={'date'} placeholder="" {...field} autoComplete={'off'} />
									</FormControl>
									{errors && errors.birth && (
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
								<div className={'flex items-center gap-x-2'}>
									<FormControl>
										<Input type={'email'} placeholder="" {...field} autoComplete={'off'}/>
									</FormControl>
									{errors && errors.email && (
										<Popover>
											<PopoverTrigger>
												<TriangleAlert className={'text-primary-red'}/>
											</PopoverTrigger>
											<PopoverContent>
												<FormMessage/>
											</PopoverContent>
										</Popover>
									)}
								</div>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="region"
						render={({ field }) => (
							<FormItem className={styles.elementField}>
								<FormLabel className={styles.elementLabel}>Регион</FormLabel>
								<div className={'flex items-center gap-x-2'}>
									<FormControl>
										<Input type={'text'} placeholder="" {...field} autoComplete={'off'}/>
									</FormControl>
									{errors && errors.region && (
										<Popover>
											<PopoverTrigger>
												<TriangleAlert className={'text-primary-red'}/>
											</PopoverTrigger>
											<PopoverContent>
												<FormMessage/>
											</PopoverContent>
										</Popover>
									)}
								</div>
							</FormItem>
						)}
					/>
					<Button type="submit" className={styles.elementSubmit}>
						{form.formState.isSubmitting ? 'Отправка данных' : 'Сохранить'}
					</Button>
				</form>
			</Form>
		</div>
	);
};
