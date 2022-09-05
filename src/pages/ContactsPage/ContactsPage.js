import { ContactsFilter, ContactsList, ContactsForm } from 'modules';
import s from '../ContactsPage/ContactsPage.module.css';
export default function ContactsPage() {
  return (
    <section className="section">
      <div className={s.container}>
        <ContactsForm />
        <ContactsFilter />
        <ContactsList />
      </div>
    </section>
  );
}
