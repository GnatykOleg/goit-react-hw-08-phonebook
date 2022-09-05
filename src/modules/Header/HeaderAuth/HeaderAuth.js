import { NavLink } from 'react-router-dom';
import { items } from './items';
import s from '../HeaderMenu/HeaderMenu.module.css';

const getLink = ({ isActive }) => {
  return !isActive ? s.link : s.linkActive;
};

export default function HeaderAuth() {
  const elements = items.map(({ id, text, to }) => (
    <li className={s.item} key={id}>
      <NavLink className={getLink} to={to}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={s.list}>{elements}</ul>;
}
