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
import {classes} from '../SettingsForm.cn';
import {UserState} from "@lib/store/features/user/UserSlice";

export const FormProfile = (props: { user?: UserState }) => {
	const styles = classes();
	const {user} = props;

	const form = useForm<TypeProfile>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			surname: user?.userable.surname || '',
			name: user?.name || '',
			patronymic: user?.userable.patronymic || '',
			birth: user?.userable.birthdate || '',
			region: user?.userable.city || ''
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
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} noValidate className={styles.elementForm}>
				<FormField
					control={form.control}
					name="surname"
					render={({field}) => (
						<FormItem className={styles.elementField}>
							<FormLabel className={styles.elementLabel}>Фамилия</FormLabel>
							<div className={'flex items-center gap-x-2 w-1/2 max-md:w-full'}>
								<FormControl>
									<Input
										type={'text'}
										placeholder=""
										{...field}
										autoComplete={'off'}
										className={styles.elementInput}
									/>
								</FormControl>
								{errors && errors.surname && (
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
					name="name"
					render={({field}) => (
						<FormItem className={styles.elementField}>
							<FormLabel className={styles.elementLabel}>Имя</FormLabel>
							<div className={'flex items-center gap-x-2 w-1/2 max-md:w-full'}>
								<FormControl>
									<Input type={'text'} placeholder="" {...field} autoComplete={'off'}
									       className={styles.elementInput}/>
								</FormControl>
								{errors && errors.name && (
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
					name="patronymic"
					render={({field}) => (
						<FormItem className={styles.elementField}>
							<FormLabel className={styles.elementLabel}>Отчество</FormLabel>
							<div className={'flex items-center gap-x-2 w-1/2 max-md:w-full'}>
								<FormControl>
									<Input type={'text'} placeholder="" {...field} autoComplete={'off'}
									       className={styles.elementInput}/>
								</FormControl>
								{errors && errors.patronymic && (
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
					name="birth"
					render={({field}) => (
						<FormItem className={styles.elementField}>
							<FormLabel className={styles.elementLabel}>Дата рождения</FormLabel>
							<div className={'flex items-center gap-x-2'}>
								<FormControl>
									<Input type={'date'} placeholder="" {...field} autoComplete={'off'}
									       className={styles.elementInput}/>
								</FormControl>
								{errors && errors.birth && (
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
					render={({field}) => (
						<FormItem className={styles.elementField}>
							<FormLabel className={styles.elementLabel}>Регион</FormLabel>
							<div className={'flex items-center gap-x-2 w-1/2 max-md:w-full'}>
								<FormControl>
									<Input type={'text'} placeholder="" {...field} autoComplete={'off'}
									       className={styles.elementInput}/>
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
				<FormItem className={styles.elementField}>
					<Button type="submit" className={styles.elementSubmit}>
						{form.formState.isSubmitting ? 'Отправка данных' : 'Сохранить'}
					</Button>
				</FormItem>
			</form>
		</Form>
	);
};
