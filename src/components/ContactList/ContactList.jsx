import React from "react";
// import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact, selectContacts } from "../redux/contactsSlice";
import { selectNameFilter } from "../redux/filtersSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <ul style={{ paddingLeft: 0, listStyle: "none" }}>
      {filteredContacts.map((contact) => (
        <li
          key={contact.id}
          style={{
            marginBottom: "10px",
            border: "1px solid #ccc",
            padding: "10px",
            dispay: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>
            {contact.name}: {contact.number}
          </span>
          <button
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
            style={{
              backgroundColor: "#ff4d4d",
              color: "#fff",
              border: "none",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
