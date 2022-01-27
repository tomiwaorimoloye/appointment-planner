import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./app";
import ContactsPage from "./containers/contactsPage";
import AppointmentsPage from "./containers/appointmentsPage";
import Contact from "./components/contact";
import Home from "./components/home";

render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="contacts" element={<ContactsPage />} />
					<Route path="appointments" element={<AppointmentsPage />} />
					<Route path=":contactName" element={<Contact />} />
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
