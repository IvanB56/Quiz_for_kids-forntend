'use client';
import * as React from 'react';
import {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useAppDispatch} from "@hooks";
import {CN} from "@/lib";
import {fetchStudentsData, getStudentsData} from "@/entities/student";
import {Button, Heading, LinkUI, Skeleton, Slider, Text} from "@components";
import {ArrowLeft, ArrowRight} from "lucide-react";

import './headingWithStudent.scss';
import {useIsMobile} from "@/hooks/use-mobile";

const block = CN('heading-with-student');

type Props = {
	title: string;
	className?: string;
};

export const HeadingWithStudent = React.memo(function HeadingWithStudent({title, className}: Props) {
	const students = useSelector(getStudentsData);
	const dispatch = useAppDispatch();
	const isMobile = useIsMobile();

	useEffect(() => {
		dispatch(fetchStudentsData());
	}, [dispatch]);

	if (students && students.length === 0) {
		return (
			<section className={block({}, [className])}>
				<div className="flex justify-between items-center">
					<Heading data={{text: title, tag: 'h1'}} cn={{margin: 'mr-auto'}}/>
					<Button asChild>
						<LinkUI data={{text: 'Добавить ребенка', href: '/profile/child'}}/>
					</Button>
				</div>
			</section>
		);
	}

	if (students?.length && !isMobile) {
		return (
			<section className={block({}, [className])}>
				<div className="flex justify-between items-center">
					<Heading data={{text: title, tag: 'h1'}} cn={{margin: 'mr-auto'}}/>
					<div className={block('slider')}>
						<Slider settings={{
							slidesPerView: 1,
							navigation: {
								prevEl: `.${block('navigation-prev')}`,
								nextEl: `.${block('navigation-next')}`
							}
						}}>
							{
								students?.map(item => (
									<Slider.Slide key={item.user_id}>
										<Text data={{text: item.name, tag: 'p'}} cn={{size: 'text-body-1'}} className="text-center"/>
									</Slider.Slide>
								))
							}
						</Slider>
						{students.length > 1 && <div className={block('navigation')}>
							<div className={block('navigation-prev')}><ArrowLeft size={24}/></div>
							<div className={block('navigation-next')}><ArrowRight size={24}/></div>
						</div>}
					</div>
				</div>
			</section>
		);
	}

	if (students?.length && isMobile) {
		return <section className={block({}, [className])}>
			<div className="flex justify-between items-center">
				<Heading data={{text: title, tag: 'h1'}} cn={{margin: 'mr-auto'}}/>
			</div>
		</section>
	}

	return (
		<section className={block()}>
			<div className="flex justify-between items-center">
				<Heading data={{text: title, tag: 'h1'}} cn={{margin: 'mr-auto'}}/>
				<Skeleton className="h-[5rem] w-[25rem]"/>
			</div>
		</section>
	);
});