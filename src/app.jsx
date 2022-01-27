import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const App = () => {
	const [contacts, setContacts] = useState([]);
	const [appointments, setAppointments] = useState([]);

	useEffect(() => {
		console.log(contacts, appointments);
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
