import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

import { HeaderMenu, HeaderAuth, UserMenu } from '../../modules';
import { Container } from 'components';

import s from './Header.module.css';

export default function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const headerStyles = isLoggedIn ? s.stylesLogged : s.stylesNotLogged;

  return (
    <header className={s.header}>
      <Container>
        <div className={headerStyles}>
          <HeaderMenu />
          {isLoggedIn ? <UserMenu /> : <HeaderAuth />}
        </div>
      </Container>
    </header>
  );
}
