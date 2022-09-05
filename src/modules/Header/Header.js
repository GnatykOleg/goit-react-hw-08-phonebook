import { HeaderMenu, HeaderAuth, UserMenu } from '../../modules';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import s from './Header.module.css';

export default function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header className={s.header}>
      <div className={s.container}>
        <HeaderMenu />
        {isLoggedIn ? <UserMenu /> : <HeaderAuth />}
      </div>
    </header>
  );
}
