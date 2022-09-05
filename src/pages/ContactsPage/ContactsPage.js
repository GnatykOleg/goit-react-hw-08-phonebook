import { ContactsFilter, ContactsList, ContactsForm } from 'modules';
export default function ContactsPage() {
  return (
    <>
      <ContactsForm />
      <ContactsFilter />
      <ContactsList />
    </>
  );
}
