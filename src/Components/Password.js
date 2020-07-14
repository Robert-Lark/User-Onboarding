import React from "react";
import "../App.css";


function Password(props) {
	return (
			<div className="App">
					<label>
						Password
						<br />
						<br />
						<input
							placeholder="Password"
							id="passwordInput"
							name="password"
							type="text"
							onChange={props.logEvent}
						/>
					</label>
			</div>
	);
}

export default Password;
