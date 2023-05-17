import Loader from 'components/Loader/Loader';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import { Typography, Paper } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
export default function Contacts() {
  const { isLoading, isError: error } = useGetContactsQuery();
  const { user } = useAuth();
  // console.log(user);
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
      <Typography variant="h6" component="h2" align="center">
        Вітаю {user.name}
      </Typography>
      <Filter />
      {isLoading && !error && <Loader size={300} />}
      {!isLoading && !error && <ContactList />}
      {error && (
        <>
          <Typography>Щось пішло не так</Typography>
          <p>{error}</p>
        </>
      )}
    </Paper>
  );
}
