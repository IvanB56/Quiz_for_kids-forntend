'use client';
import {useGetUserQuery} from "@lib/services/UserService";
import {SettingsForms} from "@widgets";
import {Text} from "@components";

const ProfilePage = () => {
	const {data, isLoading} = useGetUserQuery('');

	if (isLoading) {
		return <Text data={{text: 'Загрузка данных...', tag: 'p' }}/>
	}

	return <SettingsForms form='profile' user={data?.data}/>;
};

export default ProfilePage;
