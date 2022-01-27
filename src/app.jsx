import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const App = () => {
	// collect data from local storage if there is
	const [existingContacts, existingAppointments] = JSON.parse(
		localStorage.getItem("details")
	) || [null, null];
	const [contacts, setContacts] = useState(existingContacts || []);
	const [appointments, setAppointments] = useState(
		existingAppointments || []
	);

	useEffect(() => {
		let localDatabase = [contacts, appointments];

		// update the localStorage anytime a new contact/appointment is made
		localStorage.setItem("details", JSON.stringify(localDatabase));
	}, [contacts, appointments]);

	return (
		<div>
			<header>
				<Link to="/" id="title">
					<h1>Appointment Planner</h1>
				</Link>

				<nav>
					<NavLink
						to="contacts"
						className={({ isActive }) =>
							isActive ? "active-nav" : null
						}
					>
						Contacts
					</NavLink>
					<NavLink
						to="appointments"
						className={({ isActive }) =>
							isActive ? "active-nav" : null
						}
					>
						Appointments
					</NavLink>
				</nav>
				<hr />
			</header>
			<Outlet
				context={[contacts, setContacts, appointments, setAppointments]}
			/>
		</div>
	);
};

export default App;
