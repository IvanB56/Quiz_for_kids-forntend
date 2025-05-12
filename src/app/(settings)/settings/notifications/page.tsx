import React from 'react';
import {SettingsForms} from "@widgets";
import {Text} from "@components";
import {useAppSelector} from "@lib/store/hooks";

const PasswordPage = () => {
	const { data, loading } = useAppSelector((state) => state.user);

	if (loading) {
		return <Text data={{text: 'Загрузка данных', tag: 'p'}}/>
	}

	return <SettingsForms form={'notification'} user={data}/>
};

export default PasswordPage;