import { useState } from 'react';
import s from './ContactsForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelector } from 'redux/contacts/contacts-selectors';
import { addContacts } from 'redux/contacts/contacts-operations';
import { toast } from 'react-toastify';

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
      toast.warn(`${name} is already in contacts`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
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
    <div className={s.formContainer}>
      <form onSubmit={onFormSubmit} className={s.form}>
        <label className={s.label} htmlFor="name">
          Name
        </label>
        <input
          className={s.input}
          id="name"
          onChange={handleInputChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          maxLength={40}
          required
        />
        <label className={s.label} htmlFor="number">
          Number
        </label>
        <input
          className={s.input}
          id="number"
          onChange={handleInputChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Number number must be digits and can contain spaces, dashes, parentheses and can start with +"
          maxLength={20}
          required
        />
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}
