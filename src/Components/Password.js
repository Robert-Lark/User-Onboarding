import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";

function Password() {
    const WrapperDivPass = styled.div``;
	const [name, setName] = useState("");
	return (
		<WrapperDivPass>
			<div className="App">
				<form>
					<label>
						Password
						<br />
						<br />
						<input
							placeholder="Password"
							id="passwordInput"
							name="password"
							type="text"
						/>
					</label>
				</form>
			</div>
		</WrapperDivPass>
	);
}

export default Password;
