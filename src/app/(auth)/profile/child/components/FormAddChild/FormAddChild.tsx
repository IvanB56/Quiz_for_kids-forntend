'use client';
import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import {FieldErrors, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {createStudents} from "@/shared/api";
import {CN} from "@/lib";

import {
	Button,
	Calendar,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	Input,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Text
} from "@components";
import {CalendarIcon, LoaderCircle} from "lucide-react";
import {formSchema, TypeChildCreate} from "./type";

import './FormAddChild.scss';
import {toast} from "sonner";
import {useChildrenContext} from "@/app/(auth)/profile/child/hooks/useChildrenContext";
import {UserChildState} from "@lib/store/features/user";

const block = CN('form-child');

export const FormAddChild = () => {
	const form = useForm<TypeChildCreate>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
		}
	});
	const [errors, setErrors] = useState<FieldErrors | null>(null);
	const formRef = useRef<HTMLFormElement | null>(null);
	const {setChildrenData} = useChildrenContext();

	async function onSubmit(values: TypeChildCreate) {
		const formData = {
			...values,
			birthdate: values.birthdate.toLocaleDateString()
		}

		const data = await createStudents<UserChildState['data'][number]>(formData);

		setChildrenData(prev => ((prev || []).push(data), prev));

		toast("Ребёнок успешно добавлен");
	}

	useEffect(() => {
		if (form?.formState?.errors) {
			setErrors(form.formState.errors!);
		}
	}, [form.formState.errors]);

	return (
		<div className={block()}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} noValidate ref={formRef} className={block('form')}>
					<FormField
						control={form.control}
						name="name"
						render={({field}) => (
							<FormItem className={block('field')}>
								<FormLabel>Имя ребенка*</FormLabel>
								<div className={'flex items-center gap-x-2'}>
									<FormControl>
										<Input placeholder="Напишите имя ребенка" {...field} autoComplete={'off'}
										       disabled={!!form?.formState?.isSubmitting}/>
									</FormControl>
									{errors?.name?.message && (
										<Text
											data={{text: errors.name.message as string, tag: 'span'}}
											cn={{color: 'text-primary-red', size: 'text-body-5'}}
											className={block('error')}
										/>
									)}
								</div>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="birthdate"
						render={({field}) => (
							<FormItem className={block('field')}>
								<FormLabel>Дата рождения ребенка*</FormLabel>
								<div className={'flex items-center gap-x-2'}>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant="light"
													className={
														block('date', [!field.value? 'text-muted-foreground': ''])
													}
												>
													{field.value ? field.value.toLocaleDateString() : (
														<span>Выберите дату</span>
													)}
													<CalendarIcon className="ml-auto h-4 w-4 opacity-50 text-black"/>
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0" align="start" container={formRef?.current}>
											<Calendar
												mode="single"
												selected={field.value}
												onSelect={field.onChange}
												captionLayout="dropdown"
												formatters={{
													formatMonthDropdown: date => {
														return date.toLocaleString('ru-RU', {month: 'long'})
													}
												}}
											/>
										</PopoverContent>
									</Popover>
									{errors?.birthdate?.message && (
										<Text
											data={{text: errors.birthdate.message as string, tag: 'span'}}
											cn={{color: 'text-primary-red', size: 'text-body-5'}}
											className={block('error')}
										/>
									)}
								</div>
							</FormItem>
						)}
					/>
					<Button type="submit" className={block('submit')}>
						{form.formState.isSubmitting ? <LoaderCircle className="loader " size={28}/> : 'Добавить'}
					</Button>
				</form>
			</Form>
		</div>
	);
};