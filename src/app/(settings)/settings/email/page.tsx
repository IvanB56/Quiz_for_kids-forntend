'use client';
import React from 'react';
import {SettingsForms} from "@widgets";
import {getUser} from "@/shared/api/user/getUser";
import {Text} from "@components";

const EmailPage = () => {
	const {user, isLoading} = getUser();

	if (isLoading) {
		return <Text data={{text: 'Загрузка данных', tag: 'p'}}/>
	}

	return <SettingsForms form='email' user={user} />
};

export default EmailPage;