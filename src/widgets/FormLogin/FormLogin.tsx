'use client';
import React, {useEffect, useRef, useState} from 'react';
import {useRouter} from "next/navigation";
import {FieldErrors, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {classes} from './FormLogin.cn';
import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	Input,
	Text,
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@components';
import {TypeLogin} from '@/features/auth/schemas';
import {formSchema} from '@/features/auth/schemas/login';
import {isLoginError, login} from '@/shared/api';
import './FormLogin.scss';
import {toast} from "sonner";
import {LoaderCircle} from "lucide-react";
import Link from "next/link";
import IMask from "imask";

export const FormLogin = () => {
	const styles = classes();
	const router = useRouter();

	const form = useForm<TypeLogin>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			phone: '',
			password: '',
		},
	});
	const [errors, setErrors] = useState<FieldErrors | null>(null);
	const inputPhoneRef = useRef(null);

	async function onSubmit(values: TypeLogin) {
		const data = await login(values);

		if (isLoginError(data)) {
			toast("Ошибка авторизации", {
				description: data.message
			})
		} else {
			router.push('/profile');
		}
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

	return (
		<div className={styles.block}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} noValidate className={styles.elementForm}>
					<FormField
						control={form.control}
						name="phone"
						render={({field}) => (
							<FormItem className={styles.elementField}>
								<FormLabel>Телефон*</FormLabel>
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
						name="password"
						render={({field}) => (
							<FormItem className={styles.elementField}>
								<FormLabel>Пароль*</FormLabel>
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
					<Button type="submit" className={styles.elementSubmit}>
						{form.formState.isSubmitting ? <LoaderCircle className="loader " size={28}/> : 'Войти'}
					</Button>

					<Text data={{text: 'или войти с помощью', tag: 'p'}} className={"text-with-divider"}/>
					<div className={'flex gap-2 justify-center'}>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button variant={'link'} asChild>
									<Link href={'https://vk.com'}>
										<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
											<path fill="#1976d2"
											      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"></path>
											<path fill="#fff"
											      d="M35.937,18.041c0.046-0.151,0.068-0.291,0.062-0.416C35.984,17.263,35.735,17,35.149,17h-2.618 c-0.661,0-0.966,0.4-1.144,0.801c0,0-1.632,3.359-3.513,5.574c-0.61,0.641-0.92,0.625-1.25,0.625C26.447,24,26,23.786,26,23.199 v-5.185C26,17.32,25.827,17,25.268,17h-4.649C20.212,17,20,17.32,20,17.641c0,0.667,0.898,0.827,1,2.696v3.623 C21,24.84,20.847,25,20.517,25c-0.89,0-2.642-3-3.815-6.932C16.448,17.294,16.194,17,15.533,17h-2.643 C12.127,17,12,17.374,12,17.774c0,0.721,0.6,4.619,3.875,9.101C18.25,30.125,21.379,32,24.149,32c1.678,0,1.85-0.427,1.85-1.094 v-2.972C26,27.133,26.183,27,26.717,27c0.381,0,1.158,0.25,2.658,2c1.73,2.018,2.044,3,3.036,3h2.618 c0.608,0,0.957-0.255,0.971-0.75c0.003-0.126-0.015-0.267-0.056-0.424c-0.194-0.576-1.084-1.984-2.194-3.326 c-0.615-0.743-1.222-1.479-1.501-1.879C32.062,25.36,31.991,25.176,32,25c0.009-0.185,0.105-0.361,0.249-0.607 C32.223,24.393,35.607,19.642,35.937,18.041z"></path>
										</svg>
									</Link>
								</Button>
							</TooltipTrigger>
							<TooltipContent>
								<p>Вконтакте</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button variant={'link'} asChild>
									<Link href={'https://odnoklassniki.ru'}>
										<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
											<path fill="#FF9800"
											      d="M42,37c0,2.8-2.2,5-5,5H11c-2.8,0-5-2.2-5-5V11c0-2.8,2.2-5,5-5h26c2.8,0,5,2.2,5,5V37z"></path>
											<path fill="#FFF"
											      d="M26.9,30.4c1.5-0.3,2.9-0.9,4.1-1.7c1-0.6,1.3-1.9,0.7-2.9c-0.6-1-1.9-1.3-2.9-0.7c-2.9,1.8-6.7,1.8-9.6,0c-1-0.6-2.3-0.3-2.9,0.7c-0.6,1-0.3,2.3,0.7,2.9c1.3,0.8,2.7,1.4,4.1,1.7l-4,4c-0.8,0.8-0.8,2.1,0,3c0.4,0.4,0.9,0.6,1.5,0.6c0.5,0,1.1-0.2,1.5-0.6l3.9-3.9l3.9,3.9c0.8,0.8,2.1,0.8,3,0c0.8-0.8,0.8-2.1,0-3C30.9,34.4,26.9,30.4,26.9,30.4z M24,10c-3.9,0-7,3.1-7,7c0,3.9,3.1,7,7,7c3.9,0,7-3.1,7-7C31,13.1,27.9,10,24,10z M24,20c-1.7,0-3-1.3-3-3c0-1.7,1.3-3,3-3c1.7,0,3,1.3,3,3C27,18.7,25.7,20,24,20z"></path>
										</svg>
									</Link>
								</Button>
							</TooltipTrigger>
							<TooltipContent>
								<p>Одноклассники</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
						<Button variant={'link'} asChild>
							<Link href={'https://yandex.ru'}>
								<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
									<linearGradient id="lpa7hSZqz_S376v76E9kia_wQ15B9zLAw61_gr1" x1="13.239" x2="37.906" y1="1.907"
									                y2="33.479" gradientUnits="userSpaceOnUse">
										<stop offset  ="0" stop-color="#f52537"></stop>
										<stop offset=".293" stop-color="#f32536"></stop>
										<stop offset=".465" stop-color="#ea2434"></stop>
										<stop offset=".605" stop-color="#dc2231"></stop>
										<stop offset=".729" stop-color="#c8202c"></stop>
										<stop offset=".841" stop-color="#ae1e25"></stop>
										<stop offset=".944" stop-color="#8f1a1d"></stop>
										<stop offset="1" stop-color="#7a1818"></stop>
									</linearGradient>
									<path fill="url(#lpa7hSZqz_S376v76E9kia_wQ15B9zLAw61_gr1)"
									      d="M32,24h-7l8-18h7L32,24z M27,36.689	c0-4.168-0.953-8.357-2.758-12.117L15,6H8l10.833,21.169C20.251,30.123,21,33.415,21,36.689V42h6V36.689z"></path>
								</svg>
							</Link>
						</Button>
						</TooltipTrigger>
							<TooltipContent>
								<p>Яндекс</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
						<Button variant={'link'} asChild>
							<Link href={'https://google.ru'}>
								<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
									<path fill="#FFC107"
									      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
									<path fill="#FF3D00"
									      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
									<path fill="#4CAF50"
									      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
									<path fill="#1976D2"
									      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
								</svg>
							</Link>
						</Button>
						</TooltipTrigger>
							<TooltipContent>
								<p>Google</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
						<Button variant={'link'} asChild>
							<Link href={'https://pinterest.ru'}>
								<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
									<circle cx="24" cy="24" r="20" fill="#E60023"></circle>
									<path fill="#FFF"
									      d="M24.4439087,11.4161377c-8.6323242,0-13.2153931,5.7946167-13.2153931,12.1030884	c0,2.9338379,1.5615234,6.5853882,4.0599976,7.7484131c0.378418,0.1762085,0.581543,0.1000366,0.668457-0.2669067	c0.0668945-0.2784424,0.4038086-1.6369019,0.5553589-2.2684326c0.0484619-0.2015381,0.0246582-0.3746338-0.1384277-0.5731201	c-0.8269653-1.0030518-1.4884644-2.8461304-1.4884644-4.5645752c0-4.4115601,3.3399658-8.6799927,9.0299683-8.6799927	c4.9130859,0,8.3530884,3.3484497,8.3530884,8.1369019c0,5.4099731-2.7322998,9.1584473-6.2869263,9.1584473	c-1.9630737,0-3.4330444-1.6238403-2.9615479-3.6153564c0.5654297-2.3769531,1.6569214-4.9415283,1.6569214-6.6584473	c0-1.5354004-0.8230591-2.8169556-2.5299683-2.8169556c-2.006958,0-3.6184692,2.0753784-3.6184692,4.8569336	c0,1.7700195,0.5984497,2.9684448,0.5984497,2.9684448s-1.9822998,8.3815308-2.3453979,9.9415283	c-0.4019775,1.72229-0.2453003,4.1416016-0.0713501,5.7233887l0,0c0.4511108,0.1768799,0.9024048,0.3537598,1.3687744,0.4981079l0,0	c0.8168945-1.3278198,2.0349731-3.5056763,2.4864502-5.2422485c0.2438354-0.9361572,1.2468872-4.7546387,1.2468872-4.7546387	c0.6515503,1.2438965,2.5561523,2.296936,4.5831299,2.296936c6.0314941,0,10.378418-5.546936,10.378418-12.4400024	C36.7738647,16.3591919,31.3823242,11.4161377,24.4439087,11.4161377z"></path>
								</svg>
							</Link>
						</Button>
						</TooltipTrigger>
							<TooltipContent>
								<p>Pinterest</p>
							</TooltipContent>
						</Tooltip>
					</div>
				</form>
			</Form>
		</div>
	);
};
