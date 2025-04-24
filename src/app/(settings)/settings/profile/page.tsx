'use client';
import {SettingsForms} from "@widgets";
import {Text} from "@components";
import {IUser} from "../../../../../types";

const ProfilePage = () => {
	// const {user, isLoading} = getUser();
	const {user, isLoading} = {user: {}, isLoading: false};

	if (isLoading) {
		return <Text data={{text: 'Загрузка данных', tag: 'p'}}/>
	}

	return <SettingsForms form='profile' user={user as IUser}/>;
};

export default ProfilePage;
