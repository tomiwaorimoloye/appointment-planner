import React from "react";

export default function AppointmentForm({
	contacts,
	title,
	setTitle,
	date,
	setDate,
	time,
	setTime,
	contact,
	setContact,
	handleSubmit,
}) {
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Appointment Title"
				onChange={(e) => setTitle(e.target.value)}
				value={title}
			/>
			<select
				value={contact}
				onChange={(e) => setContact(e.target.value)}
			>
				<option value="">Select</option>
				{contacts.map((currenctContact) => (
					<option
						key={currenctContact.name}
						value={currenctContact.name}
					>
						{currenctContact.name}
					</option>
				))}
			</select>
			<input
				type="date"
				onChange={(e) => setDate(e.target.value)}
				value={date}
			/>
			<input
				type="time"
				onChange={(e) => setTime(e.target.value)}
				value={time}
			/>
			<input type="submit" value="Add Appointment" />
		</form>
	);
}
