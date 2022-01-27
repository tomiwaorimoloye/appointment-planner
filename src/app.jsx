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

	function sortObjectList(arr, keyName, number = false) {
		return arr.sort(({ [keyName]: val1 }, { [keyName]: val2 }) => {
			[val1, val2] = number // check if it's a number
				? [parseFloat(val1), parseFloat(val2)] // convert to number
				: [val1.toUpperCase(), val2.toUpperCase()]; // convert to upperCase string

			return val1 < val2 ? -1 : val1 > val2 ? 1 : 0;
		});
	}

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
				context={[
					contacts,
					setContacts,
					appointments,
					setAppointments,
					sortObjectList,
				]}
			/>
		</div>
	);
};

export default App;
