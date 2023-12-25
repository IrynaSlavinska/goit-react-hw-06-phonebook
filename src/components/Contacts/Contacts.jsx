import { useSelector } from 'react-redux';

import { ContactsList } from './Contacts.styled';
import { ContactListItem } from './ContactListItem';

import { getContacts, getFilterValue } from '../../redux/selectors';

const Contacts = () => {
  const { filter } = useSelector(getFilterValue);
  const { contacts } = useSelector(getContacts);

  const getVisibleContacts = () => {
    if (filter.filter === '') return;

    const normilezedFilter = filter.toLowerCase().trim();

    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(normilezedFilter)
    );
    return visibleContacts;
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ContactsList>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} name={name} number={number} />
      ))}
    </ContactsList>
  );
};

export default Contacts;
