import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import ContactForm from "../components/contactForm";
import TileList from "../components/tileList";

export default function ContactsPage() {
	const [contacts, setContacts, , , sortObjectList] = useOutletContext();
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");

	function addContact(name, phone, email) {
		setContacts((prevContacts) => [
			...prevContacts,
			{
				name,
				phone,
				email,
			},
		]);
	}

	const formatName = (words) => {
		const titleCase = (word) => {
			return (
				word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
			);
		};

		return words
			.split(" ")
			.map((word) => titleCase(word))
			.join(" ");
	};

	function handleSubmit(e) {
		e.preventDefault();

		// add a new contact
		// cannot have the same name
		const duplicates = contacts.filter(
			(contact) => contact.name.toLowerCase() === name.toLowerCase()
		).length;

		if (!duplicates) addContact(formatName(name), phone, email);
		else alert("Cannot enter already existing contact!");
		// clear inputs
		setName("");
		setPhone("");
		setEmail("");
	}

	return (
		<>
			<ContactForm
				name={name}
				setName={setName}
				phone={phone}
				setPhone={setPhone}
				email={email}
				setEmail={setEmail}
				handleSubmit={handleSubmit}
			/>
			<hr />
			{contacts.length ? <h2>Contacts</h2> : <h2>No Contacts</h2>}
			<TileList list={sortObjectList(contacts, "name")} />
		</>
	);
}
