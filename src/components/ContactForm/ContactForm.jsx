import { useState } from 'react';

import {
  PhonebookForm,
  PhonebookLabel,
  PhonebookInput,
  PhonebookButtonAddContact,
} from './ContactForm.styled';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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

  const submitHandler = e => {
    e.preventDefault();

    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <PhonebookForm onSubmit={submitHandler}>
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
