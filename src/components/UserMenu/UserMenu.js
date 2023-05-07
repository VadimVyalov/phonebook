import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { authApi, useLogoutMutation } from 'redux/auth/authApi';
import { contactsApi, useGetContactsQuery } from 'redux/contacts/contactsApi';

import css from './UserMenu.module.css';

export const UserMenu = () => {
  const [logout] = useLogoutMutation();
  // const { refetch } = useGetContactsQuery();
  const { user } = useAuth();
  const dispatch = useDispatch();
  const handleResetContacts = () => {
    //  dispatch(authApi.util.resetApiState());
    dispatch(contactsApi.util.resetApiState());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      {/* <button type="button" onClick={() => dispatch(logout())}> */}
      <button type="button" onClick={() => handleResetContacts()}>
        reset
      </button>
      <button type="button" onClick={() => logout()}>
        Logout
      </button>
    </div>
  );
};
