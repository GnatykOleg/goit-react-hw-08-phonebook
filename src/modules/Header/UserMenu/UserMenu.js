import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);
  return (
    <>
      <h2>User: {email}</h2>
      <button type="button" className="btn" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </>
  );
}
