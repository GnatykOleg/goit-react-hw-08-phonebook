import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);
  return (
    <>
      <p>Добро пожаловать , {email}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </>
  );
}
