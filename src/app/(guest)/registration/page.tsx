import React from 'react';
import { FormRegistration } from '@widgets';
import './page.scss';
import Image from 'next/image';
import bg from '@assets/images/registration/bg.png';

const Registration = () => {
	return (
		<div className="flex h-full w-full bg-button-hover overflow-hidden">
			<div className="form-wrapper">
				<FormRegistration />
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

export default Registration;
