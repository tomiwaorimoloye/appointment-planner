import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import AppointmentForm from "../components/appointmentForm";
import TileList from "../components/tileList";

export default function AppointmentsPage() {
	const [contacts, , appointments, setAppointments] = useOutletContext();
	const [title, setTitle] = useState("");
	const [contact, setContact] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		const newAppointment = {
			title,
			contact,
			date,
			time,
		};
		setAppointments((prevAppointments) => [
			...prevAppointments,
			newAppointment,
		]);

		setTitle("");
		setContact("select");
		setDate("");
		setTime("");
	}

	return (
		<>
			<h2>Add Appointment</h2>
			<AppointmentForm
				contacts={contacts}
				title={title}
				setTitle={setTitle}
				date={date}
				setDate={setDate}
				time={time}
				setTime={setTime}
				contact={contact}
				setContact={setContact}
				handleSubmit={handleSubmit}
			/>
			<hr />
			{appointments.length ? (
				<h2>Appointments</h2>
			) : (
				<h2>No Appointments</h2>
			)}
			<TileList list={appointments} />
		</>
	);
}
