import { ContactsFilter, ContactsList, ContactsForm } from 'modules';
import s from '../ContactsPage/ContactsPage.module.css';
export default function ContactsPage() {
  return (
    <section>
      <main className={s.main}>
        <div className={s.container}>
          <h2 className={s.title}>Contacts</h2>
          <ContactsForm />
          <ContactsFilter />
          <ContactsList />
        </div>
      </main>
    </section>
  );
}
