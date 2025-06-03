// import { useEffect, useState } from "react";
// import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import CSS from "./App.module.css";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

import { useSelector, useDispatch } from "react-redux";
import {
  addContact,
  deleteContact,
  selectContacts,
} from "./components/redux/contactsSlice";
import { changeFilter, selectFilter } from "./components/redux/filtersSlice";

function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  // const localStorageContacts = JSON.parse(localStorage.getItem("contacts")) ||
  // const [contacts, setContacts] = useState([
  //   { id: nanoid(), name: "Rosie Simpson", number: "459-12-56" },
  //   { id: nanoid(), name: "Hermione Kline", number: "443-89-12" },
  //   { id: nanoid(), name: "Eden Clements", number: "645-17-79" },
  //   { id: nanoid(), name: "Annie Copeland", number: "227-91-26" },
  //   { id: nanoid(), name: "Rosie Kline ", number: "459-12-57" },
  //   { id: nanoid(), name: "Hermione Simpson", number: "443-89-13" },
  //   { id: nanoid(), name: "Eden Copeland", number: "645-17-78" },
  //   { id: nanoid(), name: "Annie Clements", number: "227-91-25" },
  // ]);
  // const [filter, setFilter] = useState("");

  const handleAddContact = ({ name, number }) => {
    const exists = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (exists) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ id: nanoid(), name, number }));

    // setContacts((prev) => [...prev, { id: nanoid(), name, number }]);
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
    // setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
    // setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={CSS.App}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;
