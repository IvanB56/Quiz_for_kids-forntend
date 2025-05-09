import React, {ComponentProps, forwardRef} from "react";
import {cn} from "@utils";
import './Textarea.scss';

type TextareaProps = ComponentProps<"textarea">;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({className, ...props}, ref) => {
	return (
		<textarea className={cn("textarea", className)} ref={ref} {...props} />
	)
});

Textarea.displayName = "Textarea";

export {Textarea};
