'use client';
import React, {useEffect, useState} from 'react';
import {FieldErrors, useForm} from "react-hook-form";
import {Check, ChevronsUpDown, TriangleAlert} from "lucide-react";
import {zodResolver} from "@hookform/resolvers/zod";
import {formSchema, TypeProfile} from "@/features/auth/schemas/profile";
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
	FormMessage,
	Input,
	Popover,
	PopoverContent,
	PopoverTrigger
} from "@components";
import {classes} from '../SettingsForm.cn';
import {UserState} from "@lib/store/features/user/UserSlice";
import {cn} from "@utils";
import {useAppDispatch, useAppSelector} from "@lib/store/hooks";
import {fetchRegions} from "@lib/store/features/user";

export const FormProfile = (props: { user?: UserState['data'] }) => {
	const styles = classes();
	const {user} = props;

	const form = useForm<TypeProfile>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			surname: user?.surname || '',
			name: user?.name || '',
			patronymic: user?.patronymic || '',
			birth: user?.birthdate || '',
			region: user?.city || ''
		},
	});
	const [errors, setErrors] = useState<FieldErrors | null>(null);

	const {data: regions} = useAppSelector(state => state.regions);
	const dispatch = useAppDispatch();

	async function onSubmit(values: TypeProfile) {
		console.log(values);
	}

	useEffect(() => {
		if (form?.formState?.errors) {
			setErrors(form.formState.errors!);
		}
	}, [form.formState.errors]);

	useEffect(() => {
		dispatch(fetchRegions());
	}, [dispatch]);

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
							<div className={'flex items-center gap-x-2 w-1/2'}>
								<Popover>
									<PopoverTrigger asChild>
										<FormControl>
											<Button
												variant="input"
												role="combobox"
												className={cn(!field.value ? "text-gray-100" : 'text-primary-blue')}
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
