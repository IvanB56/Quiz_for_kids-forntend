import {TypeInput} from "./Input.type";
import './input.scss';

const Input = (props: TypeInput) => {
	const {data} = props;
	const {placeholder, title, value, type, name} = data;
	
	return (
		<div className="input w-full">
			<span className="input-title">{title}</span>
			<label className="input-label">
				<input
					className="input-field"
					type={type}
					name={name}
					value={value}
					placeholder={placeholder}
					data-name-valid={name}
				/>
				<span className="input-error invisible block text-white">&nbsp;</span>
			</label>
		</div>
	);
};

export default Input;
