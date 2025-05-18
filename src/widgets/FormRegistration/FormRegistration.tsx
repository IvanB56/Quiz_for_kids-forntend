'use client';
import IMask from "imask";
import React, {useEffect, useRef, useState} from 'react';
import {useRouter} from "next/navigation";
import {FieldErrors, useForm} from 'react-hook-form';
import {useAppDispatch, useAppSelector} from "@lib/store/hooks";
import {cn} from "@utils";
import Link from 'next/link';
import {Check, ChevronsUpDown} from "lucide-react";
import {useClassName} from '@hooks';
import {zodResolver} from '@hookform/resolvers/zod';
import {register} from '@/shared/api';
import {classes} from './FormRegistration.cn';
import {formSchema, TypeRegistration} from '@/features/auth/schemas/registration';
import {
	Button,
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	Heading,
	Input,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Text
} from '@components';
import './FormRegistration.scss';
import {fetchRegions} from "@lib/store/features/user";

export const FormRegistration = () => {
	const {data: regions, error, loading} = useAppSelector(state => state.regions);
	const dispatch = useAppDispatch();
	const styles = classes();
	const router = useRouter();

	const form = useForm<TypeRegistration>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			region: '',
			phone: '',
			password: '',
			password_confirmation: '',
		},
	});
	const [errors, setErrors] = useState<FieldErrors | null>(null);
	const inputPhoneRef = useRef(null);

	async function onSubmit(values: TypeRegistration) {
		await register(values);
		router.push('settings/profile');
	}

	useEffect(() => {
		if (form?.formState?.errors) {
			setErrors(form.formState.errors!);
		}
	}, [form.formState.errors]);

	useEffect(() => {
		if (inputPhoneRef?.current) {
			IMask(inputPhoneRef?.current, {mask: '+{7}(000)000-00-00'})
		}
	}, []);

	useEffect(() => {
		dispatch(fetchRegions());
	}, [dispatch]);

	return (
		<div className={styles.block}>
			<Heading
				data={{text: 'Регистрация', tag: 'h1'}}
				cn={{color: 'text-primary-blue', margin: 'mb-[28px]', size: 'h2'}}
				className={'text-center'}
			/>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} noValidate className={useClassName(styles.elementForm)}>
					<FormField
						control={form.control}
						name="name"
						render={({field}) => (
							<FormItem className={styles.elementField}>
								<FormLabel>Имя</FormLabel>
								<div className={'flex items-center gap-x-2'}>
									<FormControl>
										<Input placeholder="Введите имя" {...field} autoComplete={'off'}
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
						name="phone"
						render={({field}) => (
							<FormItem className={styles.elementField}>
								<FormLabel>Телефон</FormLabel>
								<div className={'flex items-center gap-x-2'}>
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
					<FormField
						control={form.control}
						name="region"
						render={({field}) => (
							<FormItem className={styles.elementField}>
								<FormLabel>Регион</FormLabel>
								<div className={'flex items-center gap-x-2'}>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant="input"
													role="combobox"
													className={cn( !field.value ? "text-gray-100": 'text-primary-blue' )}
												>
													{field.value
														? regions.find(
															(region) => region.slug === field.value
														)?.name
														: "Выберете регион"}
													<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50 text-primary-blue"/>
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent className="w-full p-0">
											<Command>
												<CommandInput placeholder="Поиск региона..."/>
												<CommandList>
													<CommandEmpty>Совпадений не найдено</CommandEmpty>
													<CommandGroup>
														{regions.map((region) => (
															<CommandItem
																value={region.name.toLowerCase()}
																key={region.slug}
																onSelect={() => {
																	form.setValue('region', region.slug.toLowerCase())
																}}
															>
																{region.name}
																<Check
																	className={cn(
																		"ml-auto",
																		region.slug.toLowerCase() === field.value.toLowerCase()
																			? "opacity-100"
																			: "opacity-0"
																	)}
																/>
															</CommandItem>
														))}
													</CommandGroup>
												</CommandList>
											</Command>
										</PopoverContent>
									</Popover>
									{errors?.region?.message && (
										<Text
											data={{text: errors.region.message as string, tag: 'span'}}
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
								<FormLabel>Email</FormLabel>
								<div className={'flex items-center gap-x-2'}>
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
						name="password"
						render={({field}) => (
							<FormItem className={styles.elementField}>
								<FormLabel>Пароль</FormLabel>
								<div className={'flex items-center gap-x-2'}>
									<FormControl>
										<Input type={'password'} placeholder="Введите пароль" {...field} autoComplete={'off'}
										       disabled={!!form?.formState?.isSubmitting}/>
									</FormControl>
									{errors?.password?.message && (
										<Text
											data={{text: errors.password.message as string, tag: 'span'}}
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
						name="password_confirmation"
						render={({field}) => (
							<FormItem className={styles.elementField}>
								<FormLabel>Повторите пароль</FormLabel>
								<div className={'flex items-center gap-x-2'}>
									<FormControl>
										<Input type={'password'} placeholder="Повторите пароль" {...field} autoComplete={'off'}
										       disabled={!!form?.formState?.isSubmitting}/>
									</FormControl>
									{errors?.password_confirmation?.message && (
										<Text
											data={{text: errors.password_confirmation.message as string, tag: 'span'}}
											cn={{color: 'text-primary-red', size: 'text-body-5'}}
											className={styles.elementError}
										/>
									)}
								</div>
							</FormItem>
						)}
					/>
					<div className={useClassName(styles.elementLogin, 'flex items-center justify-center gap-x-1')}>
						<Text data={{text: 'Есть аккаунт? ', tag: 'span'}} cn={{size: 'text-body-2'}}/>
						<Button asChild variant={'link'}>
							<Link href={'/login'}>
								<Text data={{text: 'Войти', tag: 'span'}} cn={{size: 'text-body-2'}}/>
							</Link>
						</Button>
					</div>
					<Button type="submit" className={styles.elementSubmit}>
						Создать аккаунт
					</Button>
				</form>
			</Form>
		</div>
	);
};
