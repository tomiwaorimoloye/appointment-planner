import React from "react";

export default function ContactForm({
	handleSubmit,
	setName,
	name,
	setPhone,
	phone,
	setEmail,
	email,
}) {
	return (
		<>
			<h2>Add Contact</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					onChange={(e) => setName(e.target.value)}
					value={name}
					placeholder="Contact Name"
					required
				/>
				<input
					type="text"
					onChange={(e) => setPhone(e.target.value)}
					value={phone}
					placeholder="Contact Phone (###-###-####)"
					pattern="[1-9][0-9]{2}[1-9][0-9]{2}[1-9][0-9]{3}"
					maxLength={10}
					required
				/>
				<input
					type="text"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					placeholder="Contact Email"
					required
				/>
				<input type="submit" value="Add Contact" />
			</form>
		</>
	);
}
