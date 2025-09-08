'use client';
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import {Plus} from "lucide-react";
import {useAppDispatch, useAppSelector} from "@lib/store/hooks";
import {setActiveChildId, UserChildState} from "@/lib/store/features/user";
import {Button, Heading, LinkUI, Skeleton, Text} from "@components";
import classes from './ProfileHeading.cn';
import './ProfileHeading.scss';

import img from '@assets/images/profile-heading/profile-img.png';

export const ProfileHeading = ({title}: { title: string }) => {
	const {data, loading, activeChildId} = useAppSelector(state => state.profileChild);
	const styles = classes();
	const dispatch = useAppDispatch();

	type ChildData = NonNullable<UserChildState['data']>[number];
	const [activeChild, setActiveChild] = useState<ChildData | null>(null);

	useEffect(() => {
		if (data?.length) {
			dispatch(setActiveChildId(data[0].user_id));
		}
	}, [data, dispatch]);

	useEffect(() => {
		if (data) {
			setActiveChild(() => data.find(item => item.user_id === activeChildId) || data[0]);
		}
	}, [activeChildId, data]);

	if (loading || !data) {
		return (
			<div className={styles.block}>
				<Heading data={{text: title, tag: 'h1'}} cn={{margin: 'mr-auto ml-8'}}/>
				<div className={styles.elementInfo}>
					<div className={styles.elementText}>
						<Skeleton className="h-[50px] w-[300px]" />
						<Skeleton className="h-[50px] w-[300px]" />
					</div>
					<Skeleton className="h-[80px] w-[80px] rounded-100 ml-5" />
				</div>
			</div>
		);
	}

	return (
		<div className={styles.block}>
			<Heading data={{text: title, tag: 'h1'}} cn={{margin: 'mr-auto ml-8'}}/>
			{data && !data.length && (
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
						<Heading data={{text: `${activeChild.name}, ${activeChild.birthdate}`, tag: 'h2'}}/>
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
									<Button variant='link' key={item.user_id} disabled={item?.user_id === activeChildId} onClick={() => {dispatch(setActiveChildId(item.user_id))}}>
										<Image src={img || ''} alt={item.name} width={80} height={80} title={item.name}/>
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