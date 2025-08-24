import React from 'react';
import {CN} from "@/lib";
import Image from "next/image";
import {useClassName} from "@hooks";
import {ArrowRight, X} from "lucide-react";
import {Button, Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger, Heading, Text} from "@components";

import './CardWithModal.scss';

const block = CN('card-with-modal');

type CardProps = {
	img: string;
	title: string;
	description: {
		text?: string;
		list?: Array<string>;
	};
	className?: string;
};

export const CardWithModal = ({description, img, title, className}: CardProps) => {
	return (
		<div className={useClassName(block(), className)}>
			<Image src={img} alt="" fill objectFit={'cover'}/>
			<div className={block('inner')}>
				<Heading data={{text: title, tag: 'h3'}} cn={{size: 'h3', align: 'text-center'}} className={block('title')}/>
				<Dialog>
					<DialogTrigger className={block('button')}>
						<ArrowRight size={100}/>
					</DialogTrigger>
					<DialogContent className={block('dialog-content')}>
						<DialogClose asChild>
							<Button className="rounded-[50%] p-0 w-[50px] h-[50px] absolute right-0 top-0"><X /></Button>

						</DialogClose>
						<DialogHeader className={block('dialog-header')}>
							<div className={block({modal: true})}>
								<Image src={img} alt="" fill objectFit={'cover'}/>
								<div className={block('inner')}>
									<Heading data={{text: title, tag: 'h3'}} cn={{size: 'h3', align: 'text-center'}} className={block('title')}/>
								</div>
							</div>
						</DialogHeader>
						<div className={block('dialog-descriptions')}>
							{
								description?.text && <Text data={{text: description.text, tag: 'p'}} cn={{size: 'text-body-1', textWrap: 'text-pretty'}} />
							}
							{
								description?.list && (
									<ul className={block('list')}>
										{
											description.list.map((item, index) => (
												<li key={index}><Text data={{text: item, tag: 'p'}} cn={{size: 'text-body-1', textWrap: 'text-pretty'}} /></li>
											))
										}
									</ul>
								)
							}
						</div>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
};