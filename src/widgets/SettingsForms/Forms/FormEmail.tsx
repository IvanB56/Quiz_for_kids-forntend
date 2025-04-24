'use client';
import React, {useEffect, useState} from 'react';
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
import {FieldErrors, useForm} from "react-hook-form";
import {formSchema, TypeEmail} from "@/features/auth/schemas/email";
import {zodResolver} from "@hookform/resolvers/zod";
import {classes} from '../SettingsForm.cn';
import {IUser} from "../../../../types";

export const FormEmail = (props: {user?: IUser}) => {
	const styles = classes();
	const user = props?.user?.data;

	const form = useForm<TypeEmail>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: user?.email || '',
			'new_email': ''
		},
	});
	const [errors, setErrors] = useState<FieldErrors | null>(null);

	async function onSubmit(values: TypeEmail) {
		console.log(values);
	}

	useEffect(() => {
		if (form?.formState?.errors) {
			setErrors(form.formState.errors!);
		}
	}, [form.formState.errors]);

	return (
		<div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} noValidate className={styles.elementForm}>
					<FormField
						control={form.control}
						name="email"
						render={({field}) => (
							<FormItem className={styles.elementField}>
								<FormLabel className={styles.elementLabel}>Текущий email</FormLabel>
								<div className={'flex items-center gap-x-2'}>
									<FormControl>
										<Input type={'email'} placeholder="" {...field} autoComplete={'off'}
										       className={styles.elementInput}/>
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
						name="new_email"
						render={({field}) => (
							<FormItem className={styles.elementField}>
								<FormLabel className={styles.elementLabel}>Новый email </FormLabel>
								<div className={'flex items-center gap-x-2'}>
									<FormControl>
										<Input type={'email'} placeholder="" {...field} autoComplete={'off'}
										       className={styles.elementInput}/>
									</FormControl>
									{errors && errors.new_email && (
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
		</div>
	);
};