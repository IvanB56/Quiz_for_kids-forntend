'use client';
import * as React from "react";
import {memo, Ref, useCallback, useEffect, useRef} from "react";
import {Button, LinkUI, Slider, Text} from "@components";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {ClassNameFormatter} from "@bem-react/classname";
import {getCurrentStudent, Student, studentActions} from "@/entities/student";
import {SwiperRef} from "swiper/react";
import Swiper from "swiper";
import {useAppDispatch} from "@hooks";
import {useParams, useRouter} from "next/navigation";
import {useSelector} from "react-redux";

interface Props {
	students: Student[];
	classBlock: ClassNameFormatter
}

export const NoStudents = memo(() => {
	return (
		<Button asChild>
			<LinkUI data={{text: 'Добавить ребенка', href: '/profile/child'}}/>
		</Button>
	);
})

export const StudentSlider = memo(({students, classBlock}: Props) => {
	const sliderRef = useRef<SwiperRef | undefined>(undefined);
	const currentStudent = useSelector(getCurrentStudent);
	const dispatch = useAppDispatch();
	const {id} = useParams<{id: string}>();
	const router = useRouter();

	useEffect(() => {
		dispatch(studentActions.setCurrentStudent(+id));
	}, [dispatch, id]);

	const changeSlide = useCallback((swiper: Swiper) => {
		const activeIndex = swiper.activeIndex;
		const slides = swiper.slides;
		const currentSlide = slides[activeIndex];
		const userId = currentSlide.getAttribute("data-id") || id;

		if  (userId !== String(currentStudent)) router.push(`./${userId}`);
	}, [currentStudent, id, router])

	useEffect(() => {
		sliderRef.current?.swiper.on('slideChange', changeSlide);
	}, [changeSlide]);

	useEffect(() => {
		if (sliderRef?.current?.swiper) {
			sliderRef.current.swiper.slides?.map((slide, index) => {
				const userId = slide.getAttribute("data-id");
				if (userId && userId === String(currentStudent)) {
					sliderRef?.current?.swiper.slideTo(index, 0);
				}
			})
		}
	}, [currentStudent]);

	return (
		<div className={classBlock('slider')}>
			<Slider
				settings={{
					slidesPerView: 1,
					navigation: {
						prevEl: `.${classBlock('navigation-prev')}`,
						nextEl: `.${classBlock('navigation-next')}`
					}
				}}
				ref={sliderRef as Ref<SwiperRef>}
			>
				{
					students?.map(item => (
						<Slider.Slide key={item.user_id} data-id={item.user_id}>
							<Text data={{text: item.name, tag: 'p'}} cn={{size: 'text-body-1'}} className="text-center !font-bold"/>
						</Slider.Slide>
					))
				}
			</Slider>
			{students.length > 1 && <div className={classBlock('navigation')}>
				<div className={classBlock('navigation-prev')}><ArrowLeft size={24}/></div>
				<div className={classBlock('navigation-next')}><ArrowRight size={24}/></div>
			</div>}
		</div>
	)
})

export const StudentMobile = memo(() => {
	return (
		<>
			Mobile
		</>
	);
})

NoStudents.displayName = 'NoStudents';
StudentSlider.displayName = 'StudentSlider';
StudentMobile.displayName = 'StudentMobile';