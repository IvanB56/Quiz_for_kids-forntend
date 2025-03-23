'use client';
import React from 'react';
import {getUser} from "@/shared/api/user/getUser";

const ProfilePage = () => {
	const user = getUser();

	console.log(user);
	
	return <div>ProfileSettings</div>;
};

export default ProfilePage;
