"use client"
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import {cn} from "@utils";
import './RadioGroup.scss';

function RadioGroup({
	                    className,
	                    ...props
                    }: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
	return (
		<RadioGroupPrimitive.Root data-slot="radio-group" className={cn("grid gap-3", className)}{...props} />
	)
}

function RadioGroupItem({
	                        className,
	                        ...props
                        }: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
	return (
		<RadioGroupPrimitive.Item data-slot="radio-group-item" className={cn("radio-group__button", className)} {...props} >
			<RadioGroupPrimitive.Indicator data-slot="radio-group-indicator"
			                               className="radio-group__indicator"></RadioGroupPrimitive.Indicator>
		</RadioGroupPrimitive.Item>
	)
}

export {RadioGroup, RadioGroupItem}
