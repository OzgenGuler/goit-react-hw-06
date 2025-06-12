import React from "react";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../redux/contactsSlice";
import { selectNameFilter } from "../redux/filtersSlice";
// import { nanoid } from "nanoid";

const ContactList = ({ onDelete }) => {
  // const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(
    (contact) =>
      typeof contact.name === "string" &&
      contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <ul style={{ paddingLeft: 0, listStyle: "none" }}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={() => onDelete(contact.id)}
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
            onClick={() => onDelete(contact.id)}
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
        </Contact>
      ))}
    </ul>
  );
};

export default ContactList;
