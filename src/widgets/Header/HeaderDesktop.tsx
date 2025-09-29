import React from 'react';
import {CN} from "@/lib";
import Link from "next/link";
import Image from "next/image";
import {LogIn, UserRoundPlus} from "lucide-react";
import {LoginForm} from "@/features/AuthByPhone";
import {RegistrationForm} from "@/features/Registration";
import {Button, Heading, Modal} from "@components";
import logo from "@assets/images/logo.png";

const block = CN('header');


export const HeaderDesktop = () => {
	const [modalLoginOpen, setModalLoginOpen] = React.useState(false);

	return (
		<header className={block()}>
			<div className={block('container')}>
				<Button asChild variant={'link'}>
					<Link href={'/'}>
						<Image src={logo} alt="логотип" width="250"/>
					</Link>
				</Button>
				<div className={block('buttons')}>
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
				</div>
			</div>
		</header>
	);
};