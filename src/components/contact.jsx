import React from "react";
import { useParams, useOutletContext } from "react-router-dom";

export default function Contact() {
	const [contacts, , appointments] = useOutletContext();
	const params = useParams();

	const currentContact = contacts.find(
		(contact) => contact.name === params.contactName
	);

	const relatedAppointments = appointments.filter(
		(appointment) => appointment.contact === params.contactName
	);

	if (currentContact) {
		return (
			<>
				<h2>{params.contactName}</h2>
				<h3>Details</h3>
				<p>Phone Number: {currentContact.phone}</p>
				<p>Email: {currentContact.email}</p>
				<br />
				{/* only render relate appointments if there are any */}
				{relatedAppointments.length ? (
					<>
						<h3>Appointments</h3>
						{relatedAppointments.map((appointment) => (
							<>
								<p>Title: {appointment.title}</p>
								<p>Date: {appointment.date}</p>
								<p>Time: {appointment.time}</p>
								<br />
								<br />
							</>
						))}
					</>
				) : (
					<small className="note">
						{currentContact.name} has no Appointments
					</small>
				)}
			</>
		);
	} else {
		return <h1>Contact not found!</h1>;
	}
}
