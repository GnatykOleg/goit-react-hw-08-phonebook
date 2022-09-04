import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contacts/contacts-operations';
import { loadingSelector } from 'redux/contacts/contacts-selectors';
import { Loader } from '../Loader/Loader';
import s from './Contacts.module.css';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { useEffect } from 'react';

import {
  contactsSelector,
  filterSelector,
} from 'redux/contacts/contacts-selectors';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  const loading = useSelector(loadingSelector);
  const data = contacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  const elements = data.map(({ id, name, phone }) => {
    return (
      <li key={id} className={s.item}>
        <p className={s.text}>{name}</p>
        <p className={s.text}>{phone}</p>
        <button
          className={s.btn}
          type="submit"
          onClick={() => dispatch(deleteContacts(id))}
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <ul className={s.list}>
      <h3 className={s.listTitle}>Total contacts: {data.length}</h3>
      {!loading ? elements : <Loader />}
    </ul>
  );
}
