import React, { useState } from "react";
import "../App.css";
import * as Yup from "yup";

function Name() {
	const defaultNameState = { name: "" };
	const [name, setName] = useState(defaultNameState);
	const handleChangeName = (event) => {
		setName({
			...name,
			[event.target.name]: event.target.value,
		});
    };
    // const formNameSchema = Yup.object().shape({
    // name: Yup
    //     .string()
    //     .name()
    //     .required("Name is required")
    // })
    const [nameErrors, setErrors] = useState({
			name: ""
		});
	return (
		<div className="App">
			<label htmlFor="name">
				Name
				<br />
				<br />
				<input
					placeholder="Name"
					id="nameInput"
					name="name"
					type="text"
					onChange={handleChangeName}
				/>
			</label>
		</div>
	);
}

export default Name;
