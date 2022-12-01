import { ContactsFilter, ContactsList, ContactsForm } from 'modules';
import { Container } from 'components';

export default function ContactsPage() {
  return (
    <section className="section">
      <h2 className="visually-hidden">Contacts page</h2>
      <Container>
        <ContactsForm />
        <ContactsFilter />
        <ContactsList />
      </Container>
    </section>
  );
}
