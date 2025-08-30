import React from 'react';
import {CN} from "@/lib";
import Image from "next/image";
import {useClassName} from "@hooks";
import {ArrowRight} from "lucide-react";
import {Heading, Modal, Text} from "@components";

import './CardWithModal.scss';

const block = CN('card-with-modal');

type CardProps = {
	img: string;
	title: string;
	data: {
		text?: string;
		list?: Array<string>;
	};
	className?: string;
};

export const CardWithModal = ({data, img, title, className}: CardProps) => {
	return (
		<div className={useClassName(block(), className)}>
			<Image src={img} alt="" fill style={{objectFit: 'cover'}}/>
			<div className={block('inner')}>
				<Heading data={{text: title, tag: 'h3'}} cn={{size: 'h3', align: 'text-center'}} className={block('title')}/>
				<Modal
					trigger={() => (<><Text data={{text: 'Подробнее', tag: 'span'}} className="text"/><ArrowRight size={100}/></>)}
					className={{trigger: block('button')}}
					header={() => (
						<div className={block({modal: true})}>
							<Image src={img} alt="" fill style={{objectFit: 'cover'}}/>
							<div className={block('inner')}>
								<Heading data={{text: title, tag: 'h3'}} cn={{size: 'h3', align: 'text-center'}} className={block('title')}/>
							</div>
						</div>
					)}
					description={() => (
						<>
							{
								data?.text && <Text data={{text: data.text, tag: 'p'}} cn={{size: 'text-body-1', textWrap: 'text-pretty'}} />
							}
							{
								data?.list && (
									<ul className={block('list')}>
										{
											data.list.map((item, index) => (
												<li key={index}><Text data={{text: item, tag: 'p'}} cn={{size: 'text-body-1', textWrap: 'text-pretty'}} /></li>
											))
										}
									</ul>
								)
							}
						</>
					)}
				/>
			</div>
		</div>
	);
};