'use client';
import React, {useEffect, useState} from 'react';
import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	Input,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Text
} from "@components";
import {classes} from './FormRelatives.cn';
import {FieldErrors, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {formSchema, TypeRelative} from "@/features/auth/schemas/relative";
import './FormRelatives.scss';

export const FormRelatives = () => {
	const styles = classes();

	const form = useForm<TypeRelative>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			relative: '',
		},
	});
	const [errors, setErrors] = useState<FieldErrors | null>(null);

	async function onSubmit(values: TypeRelative) {
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
								<div className={'flex items-center gap-x-2'}>
									<FormControl>
										<Input type={'text'} className={styles.elementInput} placeholder="Имя Фамилия" {...field}
										       autoComplete={'off'} disabled={!!form?.formState?.isSubmitting}/>
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
						name="relative"
						render={({field}) => (
							<FormItem className={styles.elementField}>
								<Select onValueChange={field.onChange} defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Выберете из списка"/>
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="father">Отец</SelectItem>
										<SelectItem value="mother">Мать</SelectItem>
										<SelectItem value="grandmother">Бабушка</SelectItem>
										<SelectItem value="grandfather">Дедушка</SelectItem>
										<SelectItem value="sister">Сестра</SelectItem>
										<SelectItem value="brother">Брат</SelectItem>
									</SelectContent>
								</Select>
							</FormItem>
						)}
					/>
					<Button type="submit" className={styles.elementSubmit}>
						{form.formState.isSubmitting ? 'Добавляем...' : 'Добавить '}
					</Button>
				</form>
			</Form>
		</div>
	);
};