import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

function App() {
	const WrapperDiv = styled.div`
		width: 100vw;
		height: 100vh;
		background-color: #fffaf0;
	`;
	const [name, setName] = useState("");
	const [artist, setArtist] = useState("");
	return (
		<WrapperDiv>
			<div className="App">
				<h3>The name is {name || "unknown"} </h3>
				<h3>The Favorite Artist is {artist || "unknown"} </h3>
				<form>
					<label>
						Name
						<input
							placeholder="Name"
							id="fArtistInput"
							name="fArtist"
							type="text"
							onChange={(event) => {
								setName(event.target.value);
								event.preventDefault();
							}}
						/>
						<br />
						<label>
							RSVP:
							<input
								name="isGoing"
								type="checkbox"
								checked={false}
								onChange={handleInputChange}
							/>
						</label>
						<input
							type="checkbox"
							name="nameOfChoice"
							value="1"
							checked
						></input>
						<label htmlFor="favArtistSelect">Favorite Artist</label>
						<select
							onChange={(event) => {
								setArtist(event.target.value);
								event.preventDefault();
							}}
							id="favArtistSelect"
						>
							<option />
							<option>Nils Frahm</option>
							<option>Pan and Me</option>
							<option value="1">Haxan Cloak</option>
							<option>Max Richter</option>
							<option>Loscil</option>
						</select>
					</label>
					<input type="submit" />
				</form>
			</div>
		</WrapperDiv>
	);
}

export default App;
