import s from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={s.contact}>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
};

export default Contact;
