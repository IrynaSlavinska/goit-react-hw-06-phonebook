import { useDispatch } from 'react-redux';
import {
  ContactItem,
  Container,
  ContactName,
  ContactNumber,
  DeleteContactButton,
} from './Contacts.styled';
import { deleteContactAction } from '../../redux/contactsSlice';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = deleteId => {
    dispatch(deleteContactAction(deleteId));
  };

  return (
    <ContactItem key={id}>
      <Container>
        <ContactName>{name}</ContactName>
        <ContactNumber>{number}</ContactNumber>
      </Container>
      <DeleteContactButton type="button" onClick={() => deleteContact(id)}>
        delete
      </DeleteContactButton>
    </ContactItem>
  );
};
