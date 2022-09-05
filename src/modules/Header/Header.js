import { HeaderMenu, HeaderAuth, UserMenu } from '../../modules';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import s from './Header.module.css';

export default function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header className={s.header}>
      <HeaderMenu />
      {isLoggedIn ? <UserMenu /> : <HeaderAuth />}
    </header>
  );
}
