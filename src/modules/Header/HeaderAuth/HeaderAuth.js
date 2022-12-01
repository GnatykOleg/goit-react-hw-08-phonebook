import { NavLink } from 'react-router-dom';
import { items } from './items';
import s from '../HeaderAuth/HeaderAuth.module.css';
import stylesLink from '../HeaderMenu/HeaderMenu.module.css';

const getLink = ({ isActive }) => {
  return !isActive ? stylesLink.link : stylesLink.linkActive;
};

export default function HeaderAuth() {
  const elements = items.map(({ id, text, to }) => (
    <li className={s.headerAuth__item} key={id}>
      <NavLink className={getLink} to={to}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={s.headerAuth__list}>{elements}</ul>;
}
