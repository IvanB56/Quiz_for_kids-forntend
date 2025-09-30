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
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTrigger
} from "@components";

import './Modal.scss';

type ModalProps = {
	trigger: () => ReactNode;
	header?: () => ReactNode;
	description?: () => ReactNode;
	footer?: () => ReactNode;
	className?: Partial<Record<'trigger' | 'close' | 'header' | 'description' | 'footer' | 'content', string>>;
} & PropsWithChildren & DialogProps;

const block = CN('modal');

export const Modal = ({trigger, className, header, description, footer, children, ...props}: ModalProps) => {
	const headerClasses = useClassName(block('header'), className?.header);
	const descriptionClasses = useClassName(block('descriptions'), className?.description);
	const footerClasses = useClassName(block('footer'), className?.footer);

	return (
		<Dialog {...props}>
			<DialogTrigger className={useClassName(block('trigger'), className?.trigger)}>
				{trigger()}
			</DialogTrigger>
			<DialogContent className={useClassName(block('content'), className?.content)}>
				<DialogClose asChild>
					<Button className={useClassName(block('button-close'), className?.close)}><X/></Button>
				</DialogClose>
				{
					header && <DialogHeader className={headerClasses}>
						{header()}
					</DialogHeader>
				}
				{
					description && <DialogDescription className={descriptionClasses} asChild>
						{description()}
					</DialogDescription>
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