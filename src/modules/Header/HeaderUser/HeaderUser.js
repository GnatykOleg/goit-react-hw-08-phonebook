import { Link } from 'react-router-dom';
import { items } from './items';
import s from '../HeaderMenu/HeaderMenu.module.css';

export default function HeaderUser() {
  const elements = items.map(({ id, text, to }) => (
    <li className={s.item} key={id}>
      <Link to={to}>{text}</Link>
    </li>
  ));

  return <ul className={s.list}>{elements}</ul>;
}
