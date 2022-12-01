import { RegisterForm } from 'modules';
import { Container } from 'components';
export default function RegisterPage() {
  return (
    <section className="section">
      <h2 className="visually-hidden">Register page</h2>
      <Container>
        <RegisterForm />
      </Container>
    </section>
  );
}
