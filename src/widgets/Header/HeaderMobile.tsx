'use client';
import React from 'react';
import {CN} from "@/lib";
import Link from "next/link";
import Image from "next/image";
import {LogIn, Menu, UserRoundPlus, X} from "lucide-react";
import {useClassName} from "@hooks";
import {LoginForm} from "@/features/AuthByPhone";
import {RegistrationForm} from "@/features/Registration";
import {Button, Heading, Modal, Popover, PopoverContent, PopoverTrigger} from "@components";

import logo from "@assets/images/logo.png";

const block = CN('header');

export const HeaderMobile = () => {
	const [modalLoginOpen, setModalLoginOpen] = React.useState(false);
	const [modalRegOpen, setModalRegOpen] = React.useState(false);

	return (
		<header className={block()}>
			<div className={useClassName(block('container'), "flex justify-between")}>
				<Button asChild variant={'link'}>
					<Link href={'/'}>
						<Image src={logo} alt="логотип" width="250"/>
					</Link>
				</Button>
				<Popover>
					<PopoverTrigger asChild>
						<Button variant={"link"} className={block('burger')}>
							<>
								<Menu className={block('icon-open')}/>
								<X className={block('icon-close')}/>
							</>
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-dvw max-w-fit flex justify-end items-center">
						<>
							<Modal
								open={modalLoginOpen}
								onOpenChange={setModalLoginOpen}
								trigger={() => (
									<><LogIn/> Войти</>
								)}
								header={() => (
									<Heading
										data={{text: 'Войти', tag: 'h3'}}
										cn={{size: 'h3', align: 'text-center'}}
										className={block('heading')}
									/>
								)}
								description={() => <LoginForm/>}
								className={{
									trigger: block('auth-button')
								}}
							/>
							<Modal
								open={modalRegOpen}
								onOpenChange={setModalRegOpen}
								trigger={() => (
									<><UserRoundPlus/> Зарегистрироваться</>
								)}
								header={() => (
									<Heading
										data={{text: 'Регистрация', tag: 'h3'}}
										cn={{size: 'h3', align: 'text-center'}}
										className={block('modal-heading')}
									/>
								)}
								description={() => <RegistrationForm/>}
								className={{
									content: block('modal-content'),
									trigger: block('auth-button')
								}}
							/>
						</>
					</PopoverContent>
				</Popover>
			</div>
		</header>
	);
};