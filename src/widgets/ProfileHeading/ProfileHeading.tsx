'use client';
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import {Plus} from "lucide-react";
import {useAppDispatch, useAppSelector} from "@lib/store/hooks";
import {setActiveChildId} from "@/lib/store/features/user";
import {Button, Heading, LinkUI, Text} from "@components";
import classes from './ProfileHeading.cn';
import './ProfileHeading.scss';

import img from '@assets/images/profile-heading/profile-img.png';

export const ProfileHeading = ({title}: { title: string }) => {
	const {data, loading, activeChildId} = useAppSelector(state => state.profileChild);
	const styles = classes();
	const dispatch = useAppDispatch();

	const [activeChild, setActiveChild] = useState<typeof data[0] | null>(null);

	useEffect(() => {
		if (data.length) {
			dispatch(setActiveChildId(data[0].id));
		}
	}, [data, dispatch]);

	useEffect(() => {
		setActiveChild(() => data.find(item => String(item.id) === String(activeChildId)) || data[0]);
	}, [activeChildId, data]);


	if (loading) {
		return (
			<div className={styles.block}>
				<Heading data={{text: title, tag: 'h1'}}/>
				<Text data={{text: 'Загрузка данных...', tag: 'span'}} cn={{size: 'text-body-2'}}/>
			</div>
		);
	}

	return (
		<div className={styles.block}>
			<Heading data={{text: title, tag: 'h1'}}/>
			{!data?.length && (
				<Button asChild variant={'link'}>
					<LinkUI data={{href: '../settings/child'}}>
						<Text data={{text: 'Добавить ребенка', tag: 'span'}} cn={{size: 'text-body-2'}}/>
						<Plus/>
					</LinkUI>
				</Button>
			)}
			{activeChild &&
				<div className={styles.elementInfo}>
					<div className={styles.elementText}>
						<Heading data={{text: `${activeChild.name}, ${activeChild.userable.birthdate} лет`, tag: 'h2'}}/>
						<div className={styles.elementCoins}>
							<div className={styles.elementEarned}>
								<Text data={{text: 'Заработанные монеты', tag: 'p'}} cn={{size: 'text-body-4'}}/>
								<Text data={{text: '0', tag: 'p'}}/>
							</div>
							<div className={styles.elementBank}>
								<Text data={{text: 'монеты в копилке', tag: 'p'}} cn={{size: 'text-body-4'}}/>
								<Text data={{text: '0', tag: 'p'}}/>
							</div>
						</div>
					</div>
					{data?.length && (
						<div className={styles.elementImages}>
							{data?.map((item) => {
								return (
									<Button variant='link' key={item.id} disabled={item.id === activeChildId} onClick={() => {dispatch(setActiveChildId(item.id))}}>
										<Image src={img || ''} alt={'logo'} width={80} height={80}/>
									</Button>
								)
							})}
						</div>
					)}
				</div>
			}
		</div>
	);
};