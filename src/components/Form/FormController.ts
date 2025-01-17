import { Input } from '@components/UI/Input/Input.ts';

export class FormController {
	private inputs: Input[] = [];
	private isValid: boolean = true;
	private inputsElems: NodeListOf<HTMLElement>;

	constructor(private readonly element: HTMLFormElement) {
		this.inputsElems = this.element.querySelectorAll('.input') as NodeListOf<HTMLElement>;
		this.init();
		this.addEvents();
	}

	private init() {
		this.inputsElems.forEach((input) => {
			this.inputs.push(new Input(input));
		});
	}

	private addEvents() {
		this.element.addEventListener('submit', (e) => {
			this.formSubmit(e);
		});
	}

	private formValidation() {
		this.isValid = true;
		this.inputs.forEach((input) => {
			input.validation();
			if (!input.getIsValid) {
				this.isValid = false;
			}
		});
		return this.isValid;
	}

	private formSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (this.formValidation()) {
			this.response();
		} else {
			console.log('form is inValid');
		}
	}

	private response() {
		const formData = new FormData(this.element);
		fetch(this.element.action, {
			method: 'GET',
			credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			body: formData,
		})
			.then((req) => req.json())
			.then(console.log)
			.catch(console.error);
	}
}
