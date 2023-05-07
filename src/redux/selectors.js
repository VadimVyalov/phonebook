import { createSelector } from '@reduxjs/toolkit';
import { contactsApi } from './contacts/contactsApi';
export const selectFilter = state => state.filter;

const inititial = [];

export const selectContacts = createSelector(
  contactsApi.endpoints.getContacts.select(),
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
