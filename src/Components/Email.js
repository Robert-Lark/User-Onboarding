import React, { useState, useEffect } from "react";
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

	Yup
		.reach(formEmailSchema, event.target.name)
		.validate(event.target.value)
		.then(valid => {
			setErrors({
				...emailErrors,
				[event.target.name]: ""
			});
		})
		.catch(err => {
			setErrors({
				...emailErrors,
				[event.target.name]: err.errors[0]
			});
		});
	setEmail({
		...email,
		[event.target.name]: event.target.value
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
