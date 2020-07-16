import React, { useState } from "react";
import "../App.css";
import Email from "./Email.js";
import Name from "./Name.js";
import Password from "./Password.js";
import TermsOfService from "./TermsOfService.js";
import * as Yup from "yup";
function Form(props) {

	const handleSubmit = (event) => {
		event.preventDefault();
	};
	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<Name />
				<br />
				<Email />
				<br />
				<Password />
				<br />
				<TermsOfService />
				<br />
				<button>Submit</button>
			</form>
		</div>
	);
}
export default Form;
