import { LoginForm } from 'modules';
import { Container } from 'components';
export default function LoginPage() {
  return (
    <section className="section">
      <h2 className="visually-hidden">Login page</h2>
      <Container>
        <LoginForm />
      </Container>
    </section>
  );
}
