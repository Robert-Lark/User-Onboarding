import React, { useState } from "react";
import "../App.css";
import * as Yup from "yup";

function Password() {
	const defaultPasswordState = { password: "" };
	const [password, setPassword] = useState(defaultPasswordState);
	const handleChangePassword = (event) => {
		setPassword({
			...password,
			[event.target.name]: event.target.value,
		});
	};
	const formPasswordSchema = Yup.object().shape({
		password: Yup.string()
			.min(6, "Passwords must be at least 6 characters long.")
			.required("Password is Required"),
	});
	const [passErrors, setErrors] = useState({
		password: "",
	});
	return (
		<div className="App">
			<label htmlFor="password">
				Password
				<br />
				<br />
				<input
					placeholder="Password"
					id="passwordInput"
					name="password"
					type="text"
					onChange={handleChangePassword}
				/>
			</label>
		</div>
	);
}

export default Password;
