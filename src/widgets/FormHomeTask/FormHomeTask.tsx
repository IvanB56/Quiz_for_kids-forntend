'use client';
import React, {useEffect, useState} from 'react';
import {FieldErrors, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {formSchema, TypeHomeTask} from "@/features/auth/schemas";
import {Button, Form, FormControl, FormField, FormItem, FormLabel, Input, Text, Textarea} from "@components";
import {classes} from "./FormHomeTask.cn";
import './FormHomeTask.scss';

export const FormHomeTask = () => {
	const styles = classes();

	const form = useForm<TypeHomeTask>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			description: '',
			price: '0'
		},
	});
	const [errors, setErrors] = useState<FieldErrors | null>(null);

	function onSubmit(values: TypeHomeTask) {
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
							<FormItem className={'relative w-full'}>
								<FormLabel className={styles.elementLabel}>
									<Text data={{text: 'Добавьте заголовок', tag: 'p'}} cn={{color: 'text-black', margin: 'mb-2'}} />
								</FormLabel>
								<FormControl>
									<Input type={'text'} placeholder="Убраться в комнате" {...field} autoComplete={'off'}
									       className={styles.elementInput}
									       disabled={!!form?.formState?.isSubmitting}/>
								</FormControl>
								{errors && errors.name && (
									<Text
										data={{text: errors.name.message as string, tag: 'span'}}
										cn={{color: 'text-primary-red', size: 'text-body-5'}}
										className={styles.elementError}
									/>
								)}
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="description"
						render={({field}) => (
							<FormItem className={'relative w-full'}>
								<FormLabel className={styles.elementLabel}>
									<Text data={{text: 'Добавьте описание задания', tag: 'p'}} cn={{color: 'text-black', margin: 'mb-2'}} />
								</FormLabel>
								<FormControl>
									<Textarea placeholder="Убраться в комнате" {...field} autoComplete={'off'}
									       className={styles.elementTextarea}
									       disabled={!!form?.formState?.isSubmitting}/>
								</FormControl>
								{errors && errors.description && (
									<Text
										data={{text: errors.description.message as string, tag: 'span'}}
										cn={{color: 'text-primary-red', size: 'text-body-5'}}
										className={styles.elementError}
									/>
								)}
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="price"
						render={({field}) => (
							<FormItem className={'relative w-fit'}>
								<FormLabel className={styles.elementLabel}>
									<Text data={{text: 'Укажите стоимость (в монетах), <br /> за выполнение домашнего задания', tag: 'p'}} cn={{color: 'text-black', margin: 'mb-2'}} />
								</FormLabel>
								<FormControl>
									<Input type={'number'} min={0} {...field} autoComplete={'off'}
									       className={styles.elementInput}
									       disabled={!!form?.formState?.isSubmitting}/>
								</FormControl>
								{errors && errors.price && (
									<Text
										data={{text: errors.price.message as string, tag: 'span'}}
										cn={{color: 'text-primary-red', size: 'text-body-5'}}
										className={styles.elementError}
									/>
								)}
							</FormItem>
						)}
					/>

					<Button type="submit" className={styles.elementSubmit}>
						{form.formState.isSubmitting ? 'Создаем...' : 'Создать задание'}
					</Button>
				</form>
			</Form>
		</div>
	);
};