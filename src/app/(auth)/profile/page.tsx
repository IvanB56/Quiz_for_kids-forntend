'use client';
import {getUser} from "@/shared/api/user/getUser";
import {Text} from "@components";

const Profile = () => {
	const {user, isLoading} = getUser();

	if (isLoading) {
		return <Text data={{text: 'Загрузка данных', tag: 'p'}}/>
	}

	return (
		<main>
			{JSON.stringify(user)}
		</main>
	);
}

export default Profile;