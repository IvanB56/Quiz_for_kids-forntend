import React from 'react';
import {FormProfile, ProfileHeading} from "@widgets";
import {getPlaySettings, getUser} from "@features";
import {Separator} from '@components';

const Budget = async () => {
	const {user} = await getUser();
	const {settings} = await getPlaySettings(user?.data.user_id);

	return (
		<>
			<ProfileHeading title={"Настройки МонетикУМ"}/>
			<Separator className="my-4" />
			{
				settings?.data?.active
				? "Настройки МонетикУМ"
				: <FormProfile/>
			}
		</>
	);
};

export default Budget;