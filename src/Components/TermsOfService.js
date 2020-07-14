import React from "react";
import "../App.css";


function TermsOfService(props) {
	return (
			<div className="App">
					<label>
						Terms of Service
						<input
							type="checkbox"
							name="TOS"
							value="yes"
							onChange={props.logEvent}
						/>
					</label>
			</div>
	);
}

export default TermsOfService;
