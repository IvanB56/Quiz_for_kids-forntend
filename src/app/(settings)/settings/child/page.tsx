'use client';
import React from 'react';
import {SettingsForms} from "@widgets";
import {Text} from "@components";
import {useGetUserQuery} from "@lib/services/UserService";

const ChildPage = () => {
	const {data, isLoading} = useGetUserQuery('');

	if (isLoading) {
		return <Text data={{text: 'Загрузка данных...', tag: 'p' }}/>
	}

	return <SettingsForms form='child' user={data?.data} />
};

export default ChildPage;