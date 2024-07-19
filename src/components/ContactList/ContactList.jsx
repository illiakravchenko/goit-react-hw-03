import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className={s.contactList}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onDelete={deleteContact} />
      ))}
    </div>
  );
};

export default ContactList;
