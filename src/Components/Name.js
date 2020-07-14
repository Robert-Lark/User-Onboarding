import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";

function Name() {
    const WrapperDivName = styled.div``;
	const [name, setName] = useState("");
	return (
		<WrapperDivName>
			<div className="App">
				<form>
					<label>
						Name
						<br />
						<br />
						<input placeholder="Name" id="nameInput" name="name" type="text" />
					</label>
				</form>
			</div>
		</WrapperDivName>
	);
}

export default Name;
