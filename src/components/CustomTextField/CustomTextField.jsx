import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const CustomTextField = styled(TextField)({
  '.MuiInputBase-input': {
    padding: 2,
    height: 30,
    paddingLeft: 10,
  },
  '.MuiFormLabel-root': {
    top: -12,
    '&.Mui-focused': {
      top: 0,
    },
    '&.MuiFormLabel-filled': {
      top: 0,
    },
  },

  '& .MuiOutlinedInput-root': {
    borderRadius: 10,
  },
});
