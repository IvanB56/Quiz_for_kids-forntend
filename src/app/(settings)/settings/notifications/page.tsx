import React from 'react';
import {SettingsForms} from "@widgets";
import {getUser} from "@/shared/api/user/getUser";
import {Text} from "@components";

const PasswordPage = () => {
	const {user, isLoading} = getUser();

	if (isLoading) {
		return <Text data={{text: 'Загрузка данных', tag: 'p'}}/>
	}

	return <SettingsForms form={'notification'} user={user}/>
};

export default PasswordPage;