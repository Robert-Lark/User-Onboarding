import React from "react";
import "../App.css";

function Email(props) {
	return (
			<div className="App">
					<label>
						Email
						<br />
						<br />
						<input
							placeholder="Email"
							id="emailInput"
							name="email"
							type="text"
							onChange={props.logEvent}
						/>
					</label>
			</div>
	);
}

export default Email;
