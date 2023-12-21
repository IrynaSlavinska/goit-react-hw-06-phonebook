import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import Contacts from '../Contacts/Contacts';
import Filter from '../Filter/Filter';

import { Container, PartContainer, PhonebookTitle } from './App.styled';

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const isExist = contacts.some(contact => contact.name === name);
    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts(previous => [...previous, { name, number, id: nanoid() }]);
  };

  const deleteContact = contactIdToDel => {
    setContacts(previousContacts =>
      previousContacts.filter(contact => contact.id !== contactIdToDel)
    );
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(normalizedFilter)
    );
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  return (
    <Container>
      <PartContainer>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm onSubmit={addContact} />
      </PartContainer>

      <PartContainer>
        <PhonebookTitle>Contacts</PhonebookTitle>
        <Filter value={filter} onChange={changeFilter} />
        <Contacts
          contacts={getFilteredContacts()}
          onDeleteContact={deleteContact}
        />
      </PartContainer>
    </Container>
  );
}

export default App;
