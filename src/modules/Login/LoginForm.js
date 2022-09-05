import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import s from '../Login/LoginForm.module.css';

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
    <section className={s.section}>
      <main>
        <h2 className={s.title}>Please login</h2>
        <div className={s.container}>
          <form onSubmit={onFormSubmit} className={s.form}>
            <label className={s.label} htmlFor="email">
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
            <label className={s.label} htmlFor="password">
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
              login
            </button>
          </form>
        </div>
      </main>
    </section>
  );
}
