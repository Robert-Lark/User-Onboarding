import React, { useState } from "react";
import "../App.css";
import Email from "./Email.js";
import Name from "./Name.js";
import Password from "./Password.js";
import TermsOfService from "./TermsOfService.js";

function Form() {
	const handleSubmit = (event) => {
		event.preventDefault();
	};
	
	const defaultState = { name: "", email: "", password: "" };
	const [email, setEmail] = useState(defaultState);
	const [name, setName] = useState(defaultState);
	const [password, setPassword] = useState(defaultState);
	const [TOS, setTOS] = useState("");

	const handleChangeEmail = (event) => {
		setEmail({
			...email,
			[event.target.email]: event.target.value,
		});
	};
	const handleChangePassword = (event) => {
		setPassword({
			...password,
			[event.target.password]: event.target.value,
		});
	};
	const handleChangeTOS = (event) => {
		setTOS({
			...TOS,
			[event.target.TOS]: event.target.value,
		});
	};
	const handleChangeName = (event) => {
		setName({
			...name,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<Name logEvent={handleChangeName} />
				<br />
				<Email logEvent={handleChangeEmail} />
				<br />
				<Password logEvent={handleChangePassword} />
				<br />
				<TermsOfService logEvent={handleChangeTOS} />
				<button>Submit</button>
			</form>
		</div>
	);
}

export default Form;
