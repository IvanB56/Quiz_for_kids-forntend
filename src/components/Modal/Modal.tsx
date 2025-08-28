import React, {PropsWithChildren, ReactNode} from 'react';
import {CN} from "@/lib";
import {X} from "lucide-react";
import {useClassName} from "@hooks";
import {Button, Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger} from "@components";

import './Modal.scss';

type ModalProps = {
	trigger: () => ReactNode;
	header?: () => ReactNode;
	description?: () => ReactNode;
	footer?: () => ReactNode;
	className?: Partial<Record<'trigger' | 'close' | 'header' | 'descriptions' | 'footer', string>>;
} & PropsWithChildren;

const block = CN('modal');

export const Modal = ({trigger, className, header, description, footer, children}: ModalProps) => {
	return (
		<Dialog>
			<DialogTrigger className={useClassName(block('trigger'), className?.['trigger'])}>
				{trigger()}
			</DialogTrigger>
			<DialogContent className={block('content')}>
				<DialogClose asChild>
					<Button className={useClassName(block('button-close'), className?.close)}><X/></Button>
				</DialogClose>
				{
					header && <DialogHeader className={useClassName(block('header'), className?.header)}>
						{header()}
					</DialogHeader>
				}
				{
					description && <div className={useClassName(block('descriptions'), className?.descriptions)}>
						{description()}
					</div>
				}
				{children}
				{
					footer && <DialogFooter className={useClassName(block('footer'), className?.footer)}>
						{footer()}
					</DialogFooter>
				}
			</DialogContent>
		</Dialog>
	);
};