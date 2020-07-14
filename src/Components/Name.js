import React from "react";
import "../App.css";

function Name(props) {
	return (
			<div className="App">
					<label>
						Name
						<br />
						<br />
						<input
							placeholder="Name"
							id="nameInput"
							name="name"
							type="text"
							onChange={props.logEvent}
						/>
					</label>
			</div>
	);
}

export default Name;
