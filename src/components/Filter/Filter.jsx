import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from '../../redux/filter/filterSlice';
import { Box } from '@mui/material';
import { CustomTextField } from '../CustomTextField/CustomTextField';
const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onChange = evt => {
    dispatch(setFilter(evt.target.value.toLowerCase()));
  };
  return (
    <Box pt={2} pb={2}>
      <CustomTextField
        label="Пошук контактів за ім`ям"
        color="formInput"
        onChange={onChange}
        value={filter}
        fullWidth={true}
      />
    </Box>
  );
};

export default Filter;
