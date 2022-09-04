import HeaderMenu from 'modules/Header/HeaderMenu/HeaderMenu';
import HeaderUser from 'modules/Header/HeaderUser/HeaderUser';
import s from './Header.module.css';

export default function Header() {
  return (
    <header className={s.header}>
      <div className="container">
        <nav>
          <HeaderMenu />
        </nav>
        <HeaderUser />
      </div>
    </header>
  );
}
