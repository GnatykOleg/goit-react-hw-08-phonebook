import { Container } from 'components';

import s from '../HomePage/HomePage.module.css';

export default function HomePage() {
  return (
    <section className="section">
      <main>
        <Container>
          <h1 className={s.title}>
            Welcomes you to the contact collections web application.
          </h1>
        </Container>
      </main>
    </section>
  );
}
