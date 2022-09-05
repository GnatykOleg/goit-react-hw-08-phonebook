import { useState } from 'react';
import s from './ContactsForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelector } from 'redux/contacts/contacts-selectors';
import { addContacts } from 'redux/contacts/contacts-operations';

export default function Form() {
  const contacts = useSelector(contactsSelector);

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const formSubmitData = ({ name, number }) => {
    const newContactName = name.toLowerCase();
    if (contacts.some(({ name }) => name.toLowerCase() === newContactName)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContacts({ name, number }));
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();
    formSubmitData({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onFormSubmit} className={s.form}>
      <label htmlFor="name">
        Name
        <input
          className={s.inputName}
          id="name"
          onChange={handleInputChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="number">
        Number
        <input
          className={s.inputNumber}
          id="number"
          onChange={handleInputChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Number number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
