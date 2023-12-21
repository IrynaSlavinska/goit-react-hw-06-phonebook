import { ContactInput } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      <ContactInput
        type="text"
        name="search"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
export default Filter;
