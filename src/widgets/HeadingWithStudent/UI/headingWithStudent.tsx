'use client';
import * as React from 'react';
import {useSelector} from "react-redux";
import {CN} from "@/lib";
import {getStudentsData} from "@/entities/student";
import {Heading, Skeleton} from "@components";

import './headingWithStudent.scss';
import {useIsMobile} from "@/hooks/use-mobile";
import {NoStudents, StudentMobile, StudentSlider} from "./helper/render";

const block = CN('heading-with-student');

type Props = {
	title: string;
	className?: string;
};

export const HeadingWithStudent = React.memo(function HeadingWithStudent({title}: Props) {
	const students = useSelector(getStudentsData);
	const isMobile = useIsMobile();

	return (
		<section className={block()}>
			<div className="flex justify-between items-center">
				<Heading data={{text: title, tag: 'h1'}} cn={{margin: 'mr-auto'}}/>
				{
					!students
						? <Skeleton className="h-[5rem] w-[25rem]"/>
						: students.length === 0
							? <NoStudents/>
							: isMobile
								? <StudentMobile/>
								: <StudentSlider students={students} classBlock={block}/>
				}
			</div>
		</section>
	);
});