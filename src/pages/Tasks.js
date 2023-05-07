// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
//import { Helmet } from 'react-helmet';

import Container from 'components/Container';
import ContactForm from 'components/ContactForm';
//import Loader from 'components/Loader/Loader';
//import ContactList from 'components/ContactList';
//import Filter from 'components/Filter';
//import { ListTitle } from 'components/ContactList/ContactList.styled';
//import { useGetContactsQuery } from 'redux/contacts/contactsApi';

export default function Tasks() {
  //   const dispatch = useDispatch();
  //   const isLoading = useSelector(selectLoading);

  //   useEffect(() => {
  //     dispatch(fetchTasks());
  //   }, [dispatch]);

  //   return (
  //     <>
  //       <Helmet>
  //         <title>Your tasks</title>
  //       </Helmet>
  //       <TaskEditor />
  //       <div>{isLoading && 'Request in progress...'}</div>
  //       <TaskList />
  //     </>
  //   );
  //const { isLoading, isError: error } = useGetContactsQuery();

  return (
    <Container>
      {/* <Helmet>
        <title>Your tasks</title>
      </Helmet> */}
      <ContactForm />
      {/* <Filter />
      {isLoading && !error && <Loader size={300} />}
      {!isLoading && !error && <ContactList />}
      {error && (
        <>
          <ListTitle>Щось пішло не так</ListTitle>
          <p>{error}</p>
        </>
      )} */}
    </Container>
  );
}
