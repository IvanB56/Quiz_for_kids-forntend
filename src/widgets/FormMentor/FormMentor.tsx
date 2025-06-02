'use client';
import React, {useEffect, useRef, useState} from 'react';
import IMask from "imask";
import {FieldErrors, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {classes} from './FormMentor.cn';
import {Button, Form, FormControl, FormField, FormItem, FormLabel, Heading, Input, Text, Textarea,} from '@components';
import {TypeMentor} from '@/features/auth/schemas';
import {formSchema} from '@/features/auth/schemas/support';
import './FormMentor.scss';

export const FormMentor = ({title}: { title?: string }) => {
	const styles = classes();

	const form = useForm<TypeMentor>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			description: ''
		},
	});
	const [errors, setErrors] = useState<FieldErrors | null>(null);
	const inputPhoneRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		if (inputPhoneRef?.current) {
			IMask(inputPhoneRef?.current, {mask: '+{7}(000)000-00-00'})
		}
	}, []);

	async function onSubmit(values: TypeMentor) {
		console.log(values)
	}

	useEffect(() => {
		if (form?.formState?.errors) {
			setErrors(form.formState.errors!);
		}
	}, [form.formState.errors]);

	return (
		<div className={styles.block}>
			{title && <Heading data={{text: title, tag: 'h3'}} cn={{margin: 'mb-8'}}/>}
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} noValidate className={styles.elementForm}>
					<div className={styles.formInnerLeft}>
						<FormField
							control={form.control}
							name="name"
							render={({field}) => (
								<FormItem className={styles.elementField}>
									<FormLabel className={styles.elementLabel}>Имя</FormLabel>
									<div className={'relative grow'}>
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
									<div className={'relative grow'}>
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
							name="phone"
							render={({field}) => (
								<FormItem className={styles.elementField}>
									<FormLabel className={styles.elementLabel}>Телефон</FormLabel>
									<div className={'relative grow'}>
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
					</div>
					<div className={styles.formInnerRight}>
						<FormField
							control={form.control}
							name="description"
							render={({field}) => (
								<FormItem className="h-full">
									<FormControl>
										<Textarea
											{...field}
											autoComplete={'off'}
											placeholder="Добавьте описание"
											className={styles.elementTextarea}
											disabled={!!form?.formState?.isSubmitting}
										/>
									</FormControl>
									{errors?.description && (
										<Text
											data={{text: errors.description.message as string, tag: 'span'}}
											cn={{color: 'text-primary-red', size: 'text-body-5'}}
											className={styles.elementError}
										/>
									)}
								</FormItem>
							)}
						/>
					</div>
					<div className="w-full flex">
						<Button type="submit" className={styles.elementSubmit}>
							{form.formState.isSubmitting ? 'Отправляем...' : 'Отправить'}
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};
