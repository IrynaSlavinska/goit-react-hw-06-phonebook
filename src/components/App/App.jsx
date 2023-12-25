import ContactForm from '../ContactForm/ContactForm';
import Contacts from '../Contacts/Contacts';
import Filter from '../Filter/Filter';

import { Container, PartContainer, PhonebookTitle } from './App.styled';

function App() {
  return (
    <Container>
      <PartContainer>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm />
      </PartContainer>

      <PartContainer>
        <PhonebookTitle>Contacts</PhonebookTitle>
        <Filter />
        <Contacts />
      </PartContainer>
    </Container>
  );
}

export default App;
