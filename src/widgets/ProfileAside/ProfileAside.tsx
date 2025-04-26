'use client';
import React from 'react';
import {usePathname} from "next/navigation";
import {classes} from './ProfileAside.cn';
import {Button, type IAsideLink} from "@components";
import './ProfileAside.scss';
import AsideLink from "@/components/AsideLink/AsideLink";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/images/logo.png";

interface IProfileAside {
	pagesLink: IAsideLink[];
}

const ProfileAside = (props: IProfileAside) => {
	const styles = classes();
	const {pagesLink} = props;
	const path = usePathname();

	return (
		<aside className={styles.block}>
			<div className={'text-center pb-[60px]'}>
				<Button asChild variant={'link'}>
					<Link href={'/'}>
						<Image src={logo} alt="логотип" width="250"/>
					</Link>
				</Button>
			</div>
			<div className={styles.elementInner}>
				{
					pagesLink.map(({name, href, nested}) => (
						<AsideLink data={{href, name, nested}} key={name} path={path}/>
					))
				}
			</div>
		</aside>
	);
};

export default ProfileAside;