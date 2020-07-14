import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";

function Email() {
const WrapperDivEmail = styled.div``

	const [email, setEmail] = useState("");
	return (
		<WrapperDivEmail>
			<div className="App">
				<form>
					<label>
						Email
						<br />
						<br />
						<input
							placeholder="Email"
							id="emailInput"
							name="email"
							type="text"
						/>
					</label>
				</form>
			</div>
		</WrapperDivEmail>
	);
}

export default Email;
