import React, {PropsWithChildren, ReactNode} from 'react';
import {DialogProps} from "@radix-ui/react-dialog";
import {CN} from "@/lib";
import {X} from "lucide-react";
import {useClassName} from "@hooks";
import {
	Button,
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@components";

import './Modal.scss';

type ModalProps = {
	trigger: () => ReactNode;
	header?: () => ReactNode;
	description?: () => ReactNode;
	footer?: () => ReactNode;
	title?: string;
	className?: Partial<Record<'trigger' | 'close' | 'header' | 'description' | 'footer', string>>;
} & PropsWithChildren & DialogProps;

const block = CN('modal');

export const Modal = ({trigger, className, header, title, description, footer, children, ...props}: ModalProps) => {
	const headerClasses = useClassName(block('header'), className?.header);
	const descriptionClasses = useClassName(block('header'), className?.description);
	const footerClasses = useClassName(block('header'), className?.footer);

	return (
		<Dialog {...props}>
			<DialogTrigger className={useClassName(block('trigger'), className?.trigger)}>
				{trigger()}
			</DialogTrigger>
			<DialogContent className={block('content')}>
				<DialogTitle>{title}</DialogTitle>
				<DialogClose asChild>
					<Button className={useClassName(block('button-close'), className?.close)}><X/></Button>
				</DialogClose>
				{
					header && <DialogHeader className={headerClasses}>
						{header()}
					</DialogHeader>
				}
				{
					description && <div className={descriptionClasses}>
						{description()}
					</div>
				}
				{children}
				{
					footer && <DialogFooter className={footerClasses}>
						{footer()}
					</DialogFooter>
				}
			</DialogContent>
		</Dialog>
	);
};