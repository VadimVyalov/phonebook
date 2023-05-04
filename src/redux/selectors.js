import { createSelector } from '@reduxjs/toolkit';
import { authApi } from './auth/authApi';
import { contactsApi } from './contacts/contactsApi';
export const selectFilter = state => state.filter;

const inititial = [];

export const selectResult = contactsApi.endpoints.getContacts.select();

export const selectToken = createSelector(
  authApi.endpoints.authentication.select(),
  Result => Result
);

export const selectTokenLogin = createSelector(
  authApi.endpoints.login.select(),
  Result => Result //?.data?.token ?? ''
);

export const selectContacts = createSelector(
  selectResult,
  Result => Result?.data ?? inititial
);

export const selectfiltredContact = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }
);
