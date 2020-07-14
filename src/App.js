import React from "react";
import Logo from "./Logo.png";
import "./App.css";
import styled from "styled-components";
import { keyframes } from "styled-components";
import Form from "./Components/Form.js";

function App() {
	const WrapperDiv = styled.div`
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background-color: #fffaf0;
	`;
	const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
	const Rotate = styled.div`
		display: inline-block;
		animation: ${rotate} 10s linear infinite;
		padding: 2rem 1rem;
		font-size: 1.2rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 98.5%;

	`;
	return (
		<WrapperDiv>
			<div>
				<Rotate>
					<img src={Logo} width="200" height="200" alt="Photo of 3 cats" />
				</Rotate>
				<Form />
			</div>
		</WrapperDiv>
	);
}

export default App;
