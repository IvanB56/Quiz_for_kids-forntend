'use client';
import {SettingsForms} from "@widgets";
import {Text} from "@components";
import {getUser} from "@/shared/api/user/getUser";

const ProfilePage = () => {
	const {user, isLoading} = getUser();

	if (isLoading) {
		return <Text data={{text: 'Загрузка данных', tag: 'p'}}/>
	}

	return <SettingsForms form='profile' user={user}/>;
};

export default ProfilePage;
