import ContactForm from './Components/Form/Form';
import ContactsList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';

import './App.css';

export default function App() {
  return (
    <div className="Container">
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}
