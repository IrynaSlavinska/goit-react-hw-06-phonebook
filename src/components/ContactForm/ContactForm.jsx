import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/contactsSlice';

import {
  PhonebookForm,
  PhonebookLabel,
  PhonebookInput,
  PhonebookButtonAddContact,
} from './ContactForm.styled';

const ContactForm = ({ submit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { contacts } = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const isExist = contacts.some(contact => contact.name === name);

    if (isExist) {
      alert();
    }

    dispatch(addContact({ name, number, id: nanoid() }));

    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  return (
    <PhonebookForm onSubmit={handleSubmit}>
      <PhonebookLabel>
        Name
        <PhonebookInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
          placeholder="Enter name"
        />
      </PhonebookLabel>

      <PhonebookLabel>
        Number
        <PhonebookInput
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
          placeholder="Enter tel"
        />
      </PhonebookLabel>

      <PhonebookButtonAddContact type="submit">
        Add contact
      </PhonebookButtonAddContact>
    </PhonebookForm>
  );
};

export default ContactForm;
