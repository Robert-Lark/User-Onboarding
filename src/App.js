import React from "react";
import Logo from "./Logo.png";
import "./App.css";
import styled from "styled-components";
import { keyframes } from "styled-components";
import Form2 from "./SecondAttempt/Form2.js";

function App() {
	const WrapperDiv = styled.div`
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background-color: #fffaf0;
		border: 20px solid black;
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
		width: 97%;
	`;
	return (
		<WrapperDiv>
			<div>
				<Rotate>
					<img src={Logo} width="200" height="200" alt="logo" />
				</Rotate>
				<Form2 />
			</div>
		</WrapperDiv>
	);
}

export default App;
