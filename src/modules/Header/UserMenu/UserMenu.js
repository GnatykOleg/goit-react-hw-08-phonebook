import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import s from '../UserMenu/UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <p className={s.text}> {email}</p>
        <button
          type="button"
          className={s.button}
          onClick={() => dispatch(logOut())}
        >
          Logout
        </button>
      </li>
    </ul>
  );
}
