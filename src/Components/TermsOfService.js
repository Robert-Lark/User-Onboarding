import React, { useState } from "react";
import "../App.css";
import * as Yup from "yup";

function TermsOfService() {
	const [TOS, setTOS] = useState("");
	const handleChangeTOS = (event) => {
		setTOS({
			...TOS,
			[event.target.name]: event.target.value,
		});
	};
	const formTermsSchema = Yup.object().shape({
		terms: Yup.boolean().oneOf(
			[true],
			"You must accept the terms and conditions"
		),
	});
	const [termsErrors, setErrors] = useState({
		terms: ""
	});
	return (
		<div className="App">
			<label htmlFor="TOS">
				Terms of Service
				<input
					type="checkbox"
					name="terms"
					value="yes"
					onChange={handleChangeTOS}
				/>
			</label>
		</div>
	);
}

export default TermsOfService;
