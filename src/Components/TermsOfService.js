import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";

function TermsOfService() {
    const WrapperDivTOS = styled.div``;
	const [name, setName] = useState("");
	return (
		<WrapperDivTOS>
			<div className="App">
				<form>
					<label>
						Terms of Service
						<input type="checkbox" name="nameOfChoice" value="yes" />
					</label>
				</form>
			</div>
		</WrapperDivTOS>
	);
}

export default TermsOfService;
