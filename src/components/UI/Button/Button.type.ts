import {IChildrenAndClassName} from "@root/global";

export interface IButton extends IChildrenAndClassName {
	data: Record<'text', string> & Partial<Record<'href', string>>
	cn?: Partial<Record<'background' | 'color' | 'margin' | 'width', string>>
}
