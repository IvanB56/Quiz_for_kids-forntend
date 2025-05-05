import React from 'react';
import Image from 'next/image';
import bg from '@assets/images/login/bg.png';
import { FormLogin } from '@widgets';
import './page.scss';

const LoginPage = () => {
	return (
		<section className="section-login">
			<div className="form-wrapper">
				<FormLogin />
			</div>
			<div className="image-wrapper">
				<Image src={bg} sizes={'(max-width: 768px) 100vw, 960px'} alt={'background'} className={'w-auto h-auto'} />
			</div>
		</section>
	);
};
export default LoginPage;
