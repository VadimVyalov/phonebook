import ContactForm from 'components/ContactForm';
import Loader from 'components/Loader/Loader';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import { Typography, Paper } from '@mui/material';
export default function Contacts() {
  const { isLoading, isError: error } = useGetContactsQuery();

  return (
    <Paper
      elevation={4}
      sx={{
        width: '100%',
        borderRadius: 0,
        mt: 1,
        p: 2,
        boxSizing: 'border-box',
      }}
    >
      <Typography variant="h6" component="h3" mb={1}>
        Додати контакт
      </Typography>
      <ContactForm />
      {isLoading && !error && <Loader size={300} />}
      {error && (
        <>
          <Typography>Щось пішло не так</Typography>
          <p>{error}</p>
        </>
      )}
    </Paper>
  );
}
