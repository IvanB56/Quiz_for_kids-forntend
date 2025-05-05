import React from 'react';
import { FormRegistration } from '@widgets';
import Image from 'next/image';
import bg from '@assets/images/registration/bg.png';
import './page.scss';

const Registration = async () => {
	return (
		<section className="section-registration">
			<div className="form-wrapper">
				<FormRegistration />
			</div>
			<div className="image-wrapper">
				<Image src={bg} sizes={'(max-width: 768px) 100vw, 960px'} alt={'background'} className={'w-auto h-auto'} />
			</div>
		</section>
	);
};

export default Registration;
