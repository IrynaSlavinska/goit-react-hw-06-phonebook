import styled from '@emotion/styled';

export const PhonebookForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const PhonebookLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const PhonebookInput = styled.input`
  font-size: 20px;
  padding: 12px;
  border-radius: 8px;
  border: 2px solid #a1c487;
  outline: transparent;

  &: focus {
    border-color: rgb(224, 160, 31);
  }

  &: hover {
    border-color: rgb(224, 160, 31);
  }
`;

export const PhonebookButtonAddContact = styled.button`
  padding: 12px;
  border-radius: 8px;
  border: none;
  background-color: #a1c487;
  cursor: pointer;
`;
