import { useDispatch, useSelector } from 'react-redux';
import { FilterContainer } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onChange = evt => {
    dispatch(setFilter(evt.target.value.toLowerCase()));
  };
  return (
    <FilterContainer>
      <label>
        <span>{'Пошук контактів за ім`ям'}</span>
        <input
          type="text"
          name="filter"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={filter}
          onChange={onChange}
        />
      </label>
    </FilterContainer>
  );
};

export default Filter;
