import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import s from '../Register/RegisterForm.module.css';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.formContainer}>
      <form onSubmit={onFormSubmit} className={s.form}>
        <label className={s.label} htmlFor="name">
          Name
        </label>
        <input
          className={s.input}
          id="name"
          onChange={handleInputChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={s.label} htmlFor="email">
          Email
        </label>
        <input
          className={s.input}
          id="email"
          onChange={handleInputChange}
          type="email"
          name="email"
          value={email}
          title="Exemple user@mail.com "
          required
        />
        <label className={s.label} htmlFor="password">
          Password
        </label>
        <input
          className={s.input}
          id="password"
          onChange={handleInputChange}
          type="password"
          name="password"
          value={password}
          title="You can enter the password in any form"
          min={7}
          required
        />
        <button className={s.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
