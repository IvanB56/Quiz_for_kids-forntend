'use client';
import React from 'react';
import {SettingsForms} from "@widgets";
import {Text} from "@components";
import {useGetUserQuery} from "@lib/services/UserService";

const EmailPage = () => {
	const {data, isLoading} = useGetUserQuery('');

	if (isLoading) {
		return <Text data={{text: 'Загрузка данных', tag: 'p'}}/>
	}

	return <SettingsForms form='email' user={data?.data} />
};

export default EmailPage;