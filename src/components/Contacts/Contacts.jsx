import { useDispatch, useSelector } from 'react-redux';

import { deleteContacts } from 'redux/contacts/contacts-operations';
import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import { Blocks } from 'react-loader-spinner';

export default function Contacts({ data }) {
  const loading = useSelector(state => state.loading);

  const dispatch = useDispatch();
  if (loading) {
    return (
      <ul className={s.list}>
        <h3 className={s.listTitle}>Total contacts: {data.length}</h3>
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />
        ;
      </ul>
    );
  } else {
    return (
      <ul className={s.list}>
        <h3 className={s.listTitle}>Total contacts: {data.length}</h3>
        {data.map(({ id, name, phone }) => {
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
        })}
      </ul>
    );
  }
}

Contacts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
    })
  ),
};
