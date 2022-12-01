import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/contacts-actions';
import s from './ContactsFilter.module.css';

export default function Filter() {
  const value = useSelector(state => state.filter);

  const dispatch = useDispatch();
  return (
    <div className={s.formContainer}>
      <form className={s.form}>
        <label htmlFor="filter" className={s.label}>
          Find contacts by name
        </label>
        <input
          className={s.input}
          onChange={event => dispatch(setFilter(event.currentTarget.value))}
          type="name"
          name="filter"
          id="filter"
          value={value}
          required
        />
      </form>
    </div>
  );
}
