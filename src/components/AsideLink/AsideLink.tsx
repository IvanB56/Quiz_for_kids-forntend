'use client';
import React, {useState} from 'react';
import {LinkUI as Link, Text} from "@components";
import {ChevronUp} from "lucide-react";
import {classes} from './AsideLink.cn';
import './AsideLink.scss';
import {cn} from "@utils";


export interface IAsideLink {
	name: string;
	href?: string;
	nested?: IAsideLink[];
}

const AsideLink = (props: { data: IAsideLink, path: string }) => {
	const {data, path} = props;
	const {name, href, nested} = data;
	const styles = classes();
	const [isOpen, setIsOpen] = useState(() => setDefaultState());

	function setDefaultState() {
		return !!(nested && nested.find(item => item.href?.includes(path)));
	}

	if (nested) {
		return (
			<div className={`${styles.elementNested}${!isOpen ? ' hidden': ''}`}>
				<button className={styles.elementNestedTitle} onClick={() => setIsOpen(!isOpen)}>
					<ChevronUp className={styles.elementIcon}/><Text data={{text: name, tag: 'p'}}
					                                                 className={styles.elementTitleText}/>
				</button>
				<div className={styles.elementNestedLinks}>
					{
						nested.map(({href, name}) => (
							<Link data={{href: href!}} className={cn(styles.block, {
								'is-active': path === href
							})} key={href}>
								<Text data={{text: name, tag: 'p'}}/>
							</Link>))
					}
				</div>
			</div>
		)
	}

	if (href) {
		return (
			<Link data={{href}} className={cn(styles.block, {
				'is-active': path === href
			})}>
				<Text data={{text: name, tag: 'p'}}/>
			</Link>
		);
	}

	return <Text data={{text: 'Нужно указать href для ссылки', tag: 'p'}}/>
};

export default AsideLink;