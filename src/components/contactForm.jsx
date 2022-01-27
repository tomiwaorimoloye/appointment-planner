import React from "react";

export default function ContactForm(props) {
	return (
		<>
			<h2>Add Contact</h2>
			<form onSubmit={props.handleSubmit}>
				<input
					type="text"
					onChange={(e) => props.setName(e.target.value)}
					value={props.name}
					placeholder="Contact Name"
					required
				/>
				<input
					type="text"
					onChange={(e) => props.setPhone(e.target.value)}
					value={props.phone}
					placeholder="Contact Phone (###-###-####)"
					pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[1-9]{4}"
					required
				/>
				<input
					type="text"
					onChange={(e) => props.setEmail(e.target.value)}
					value={props.email}
					placeholder="Contact Email"
					required
				/>
				<input type="submit" value="Add Contact" />
			</form>
		</>
	);
}
