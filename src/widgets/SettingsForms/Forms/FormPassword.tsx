'use client';
import React, {useEffect, useState} from 'react';
import {FieldErrors, useForm} from "react-hook-form";
import {TriangleAlert} from "lucide-react";
import {zodResolver} from "@hookform/resolvers/zod";
import {formSchema, TypePassword} from "@/features/auth/schemas/password";
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
import {classes} from '../SettingsForm.cn';

export const FormPassword = () => {
	const styles = classes();

	const form = useForm<TypePassword>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			password: '',
			new_password: '',
			password_confirmation: ''
		},
	});
	const [errors, setErrors] = useState<FieldErrors | null>(null);

	async function onSubmit(values: TypePassword) {
		console.log(values);
	}

	useEffect(() => {
		if (form?.formState?.errors) {
			setErrors(form.formState.errors!);
		}
	}, [form.formState.errors]);

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} noValidate className={styles.elementForm}>
				<FormField
					control={form.control}
					name="password"
					render={({field}) => (
						<FormItem className={styles.elementField}>
							<FormLabel className={styles.elementLabel}>Текущий пароль</FormLabel>
							<div className={'flex items-center gap-x-2 w-1/2 max-md:w-full'}>
								<FormControl>
									<Input type={'password'} placeholder="" {...field} autoComplete={'off'}
									       className={styles.elementInput}/>
								</FormControl>
								{errors && errors.password && (
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
					name="new_password"
					render={({field}) => (
						<FormItem className={styles.elementField}>
							<FormLabel className={styles.elementLabel}>Новый пароль</FormLabel>
							<div className={'flex items-center gap-x-2 w-1/2 max-md:w-full'}>
								<FormControl>
									<Input type={'password'} placeholder="" {...field} autoComplete={'off'}
									       className={styles.elementInput}/>
								</FormControl>
								{errors && errors.new_password && (
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
					name="password_confirmation"
					render={({field}) => (
						<FormItem className={styles.elementField}>
							<FormLabel className={styles.elementLabel}>Подтвердите пароль</FormLabel>
							<div className={'flex items-center gap-x-2 w-1/2 max-md:w-full'}>
								<FormControl>
									<Input type={'password'} placeholder="" {...field} autoComplete={'off'}
									       className={styles.elementInput}/>
								</FormControl>
								{errors && errors.password_confirmation && (
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
				<FormItem className={styles.elementField}>
					<Button type="submit" className={styles.elementSubmit}>
						{form.formState.isSubmitting ? 'Отправка данных' : 'Сохранить'}
					</Button>
				</FormItem>
			</form>
		</Form>
	);
};
