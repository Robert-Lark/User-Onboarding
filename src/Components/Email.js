import React, { useState } from "react";
import "../App.css";
import * as Yup from "yup";


function Email(props) {
	const defaultEmailState = { email: "" };
	const [email, setEmail] = useState(defaultEmailState);
	const handleChangeEmail = (event) => {
		setEmail({
			...email,
			[event.target.name]: event.target.value,
		});
	};
const formEmailSchema = Yup.object().shape({
  email: Yup
    .string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
});
const [emailErrors, setErrors] = useState({
	email: "",
});
	return (
		<div className="App">
			<label htmlFor="email">
				Email
				<br />
				<br />
				<input
					placeholder="Email"
					id="emailInput"
					name="email"
					type="text"
					onChange={handleChangeEmail}
				/>
			</label>
		</div>
	);
}

export default Email;
