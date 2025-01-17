import {schemas, type TypeError, type TypeSchema} from "../../../helpers/validationSchemas.ts";

export class Input {
	private readonly input: HTMLInputElement;
	private readonly errorElem: HTMLElement;
	private errorText: string = '';
	private readonly schema: TypeSchema;
	private isValid: boolean = false;

	constructor(private readonly element: HTMLElement) {
		this.input = this.element.querySelector('.input-field') as HTMLInputElement;
		this.errorElem = this.element.querySelector('.input-error') as HTMLElement;
		// @ts-ignore
		this.schema = schemas.pick({[this.getName]: true});
		this.addEvents();
	}

	get getName() {
		return this.input.dataset.nameValid;
	}

	get getValue() {
		return this.input.value;
	}

	get getError() {
		return this.errorText;
	}

	get getIsValid() {
		return this.isValid;
	}

	set setError(error: string) {
		this.errorText = error;
	}

	set setValue(value: string) {
		this.input.value = value;
	}

	set setIsValid(value: boolean) {
		this.isValid = value;
	}

	private addEvents() {
		this.input.addEventListener('change', (e) => {
			this.inputChange(e)
		});
	}

	private inputChange(event: Event) {
		const target = event.target as HTMLInputElement;
		this.setValue = target.value;
		this.validation();
	}

	validation() {
		try {
			// @ts-ignore
			const res = this.schema.parse({[this.getName]: this.getValue});
			this.setError = '';
		} catch (res: unknown) {
			this.setError = (res as TypeError).errors[0].message;
		}
		this.setIsValid = !this.getError;
		this.createError();
	}

	private createError() {
		this.errorElem.innerText = this.getError;
		this.errorElem.style.visibility = this.getIsValid ? 'hidden' : 'visible';
	}
}