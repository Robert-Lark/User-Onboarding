import React from "react";
import "../App.css";
import styled from "styled-components";
import Email from "./Email.js";
import Name from "./Name.js";
import Password from './Password.js';
import TermsOfService from "./TermsOfService.js";

function Form() {

	const FormDiv = styled.div`
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
	`;


	return (
			<FormDiv>
				<div className="App">
					<form>
						<Name />
						<br />
						<Email />
						<br />
						<Password />
						<br />
						<TermsOfService />
					</form>
				</div>
			</FormDiv>
	);
}

export default Form;
