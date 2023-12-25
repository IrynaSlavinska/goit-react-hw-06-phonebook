import { useDispatch } from 'react-redux';

// import { getFilterValue } from '../../redux/selectors';
import { searchFilter } from '../../redux/filterSlice';
import { ContactInput } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  // const { filter } = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const filterChange = e => dispatch(searchFilter(e.target.value));

  return (
    <label>
      <ContactInput
        type="text"
        name="search"
        placeholder="Search..."
        value={value}
        onChange={filterChange}
      />
    </label>
  );
};
export default Filter;
