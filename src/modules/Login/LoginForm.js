import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import s from '../Contacts/ContactsForm/ContactsForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={onFormSubmit} className={s.form}>
      <label htmlFor="email">
        Email
        <input
          className={s.inputNumber}
          id="email"
          onChange={handleInputChange}
          type="email"
          name="email"
          value={email}
          title="Exemple user@mail.com "
          required
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          className={s.inputNumber}
          id="password"
          onChange={handleInputChange}
          type="password"
          name="password"
          value={password}
          title="You can enter the password in any form"
          required
        />
      </label>
      <button className={s.btn} type="submit">
        Register
      </button>
    </form>
  );
}
