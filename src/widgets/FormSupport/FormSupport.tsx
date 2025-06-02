'use client';
import React, {useEffect, useState} from 'react';
import {FieldErrors, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {classes} from './FormSupport.cn';
import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	Input,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Text,
	Textarea,
} from '@components';
import {TypeSupport} from '@/features/auth/schemas';
import {formSchema} from '@/features/auth/schemas/support';
import './FormSupport.scss';

export const FormSupport = () => {
	const styles = classes();

	const form = useForm<TypeSupport>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			theme: '',
			text: ''
		},
	});
	const [errors, setErrors] = useState<FieldErrors | null>(null);

	async function onSubmit(values: TypeSupport) {
		console.log(values)
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
						name="name"
						render={({field}) => (
							<FormItem className={styles.elementField}>
								<FormLabel className={styles.elementLabel}>Имя</FormLabel>
								<div className={'relative flex items-center gap-x-2 w-1/2 max-md:w-full'}>
									<FormControl>
										<Input type={'email'} placeholder="Введите имя" {...field} autoComplete={'off'}
										       disabled={!!form?.formState?.isSubmitting}/>
									</FormControl>
									{errors?.name?.message && (
										<Text
											data={{text: errors.name.message as string, tag: 'span'}}
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
								<FormLabel className={styles.elementLabel}>Email</FormLabel>
								<div className={'relative flex items-center gap-x-2 w-1/2 max-md:w-full'}>
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
						name="theme"
						render={({field}) => (
							<FormItem className={styles.elementField}>
								<FormLabel className={styles.elementLabel}>Текст обращения</FormLabel>
								<div className={'relative flex items-center gap-x-2 w-1/2 max-md:w-full'}>
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Выберете тему обращения"/>
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="theme_1">тема 1</SelectItem>
											<SelectItem value="theme_2">тема 2</SelectItem>
											<SelectItem value="theme_3">тема 3</SelectItem>
											<SelectItem value="theme_4">тема 4</SelectItem>
											<SelectItem value="theme_5">тема 5</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="text"
						render={({field}) => (
							<FormItem className={styles.elementField}>
								<FormLabel className={styles.elementLabel}>Текст обращения</FormLabel>
								<div className={'relative flex items-center gap-x-2 w-1/2 max-md:w-full'}>
									<FormControl>
										<Textarea
											{...field}
											autoComplete={'off'}
											rows={5}
											className={styles.elementTextarea}
											disabled={!!form?.formState?.isSubmitting}
										/>
									</FormControl>
									{errors && errors.text && (
										<Text
											data={{text: errors.text.message as string, tag: 'span'}}
											cn={{color: 'text-primary-red', size: 'text-body-5'}}
											className={styles.elementError}
										/>
									)}
								</div>
							</FormItem>
						)}
					/>

					<Button type="submit" className={styles.elementSubmit}>
						{form.formState.isSubmitting ? 'Отправляем...' : 'Отправить'}
					</Button>
				</form>
			</Form>
		</div>
	);
};
