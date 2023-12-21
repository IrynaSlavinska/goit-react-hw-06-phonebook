import {
  ContactsList,
  ContactItem,
  Container,
  ContactName,
  ContactNumber,
  DeleteContactButton,
} from './Contacts.styled';

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <Container>
            <ContactName>{name}</ContactName>
            <ContactNumber>{number}</ContactNumber>
          </Container>
          <DeleteContactButton
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            delete
          </DeleteContactButton>
        </ContactItem>
      ))}
    </ContactsList>
  );
};

export default Contacts;
