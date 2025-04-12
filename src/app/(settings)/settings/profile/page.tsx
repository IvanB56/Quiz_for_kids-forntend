'use client';
import {SettingsForms} from "@widgets";
import {getUser} from "@/shared/api/user/getUser";

const ProfilePage = () => {
	const user = getUser();

	console.log(user)

	return <SettingsForms form='profile' />;
};

export default ProfilePage;
