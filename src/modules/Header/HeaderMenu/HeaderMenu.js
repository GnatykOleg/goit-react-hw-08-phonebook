import { NavLink } from 'react-router-dom';
import { items } from './items';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import s from '../HeaderMenu/HeaderMenu.module.css';

const getLink = ({ isActive }) => {
  return !isActive ? s.link : s.linkActive;
};

export default function HeaderMenu() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const itemsFilteredPrivat = isLoggedIn
    ? items
    : items.filter(item => !item.private);
  const elements = itemsFilteredPrivat.map(({ id, text, to }) => (
    <li className={s.item} key={id}>
      <NavLink to={to} className={getLink}>
        {text}
      </NavLink>
    </li>
  ));
  return <ul className={s.list}>{elements}</ul>;
}
