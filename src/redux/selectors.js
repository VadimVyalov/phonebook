import { createSelector } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
export const selectFilter = state => state.filter;

const inititial = [];

export const selectResult = contactsApi.endpoints.getContacts.select();

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
