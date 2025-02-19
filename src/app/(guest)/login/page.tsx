import React from 'react';
import Image from 'next/image';
import bg from '@assets/images/login/bg.png';
import { FormLogin } from '@widgets';
import './page.scss';

const LoginPage = () => {
	return (
		<div className="flex h-full w-full bg-button-hover overflow-hidden">
			<div className="form-wrapper">
				<FormLogin />
			</div>
			<div className="image-wrapper">
				<Image
					src={bg}
					sizes={'(max-width: 768px) 100vw, 960px'}
					alt={'background'}
					className={'w-auto h-auto'}
				/>
			</div>
		</div>
	);
};
export default LoginPage;
