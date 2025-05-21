'use client';
import {SettingsForms} from "@widgets";
import {Text} from "@components";
import {useAppSelector} from "@lib/store/hooks";

const ProfilePage = () => {
	const { data, loading } = useAppSelector((state) => state.user);


	if (loading) {
		return <Text data={{text: 'Загрузка данных...', tag: 'p' }}/>
	}

	return <SettingsForms form='profile' user={data}/>;
};

export default ProfilePage;
