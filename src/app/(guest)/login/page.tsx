import React from 'react';

const LoginPage = () => {
	return (
		<div>
			<form>
				<label>
					Email
					<input name="email" type="email"/>
				</label>
				<label>
					Password
					<input name="password" type="password"/>
				</label>
				<button>Sign In</button>
			</form>
		</div>
	);
};
export default LoginPage;
