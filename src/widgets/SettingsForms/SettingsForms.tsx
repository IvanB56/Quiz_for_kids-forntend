import React from 'react';
import {FormProfile} from "./Forms/FormProfile";
import {FormEmail} from "./Forms/FormEmail";
import {FormPassword} from "./Forms/FormPassword";
import {Notification} from "./Forms/Notification";
import {FormChild} from "./Forms/FormChild";
import {classes} from './SettingsForm.cn';
import './SettingsForms.scss';
import {UserState} from "@lib/store/features/user/UserSlice";

type FormProps = {
	form: 'profile' | 'email' | 'child' | 'notification' | 'password',
	user?: UserState
}

export const SettingsForms = (props: FormProps) => {
	const styles = classes();
	const {user, form} = props;

	let Form = <FormProfile user={user}/>

	if (form === 'email') Form = <FormEmail user={user} />
	if (form === 'password') Form = <FormPassword />
	if (form === 'notification') Form = <Notification />
	if (form === 'child') Form = <FormChild />

	return (<div className={styles.block}>{ Form }</div>)
};