import React from 'react';
import {FormProfile} from "./Forms/FormProfile";
import {FormEmail} from "./Forms/FormEmail";
import {classes} from './SettingsForm.cn';
import './SettingsForms.scss';
import {FormPassword} from "@/widgets/SettingsForms/Forms/FormPassword";

type FormProps = {
	form: 'profile' | 'email' | 'child' | 'notification' | 'password'
}

export const SettingsForms = (props: FormProps) => {
	const styles = classes();

	let Form = <FormProfile/>

	if (props.form === 'email') Form = <FormEmail />
	if (props.form === 'password') Form = <FormPassword />

	return (<div className={styles.block}>{ Form }</div>)
};